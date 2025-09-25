// src/app/api/lead/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

type LeadPlan = "monthly" | "yearly" | "multi_store";

const resend = new Resend(process.env.RESEND_API_KEY);

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!, // server-only
  { auth: { persistSession: false } }
);

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();

    // Basic shape/normalization
    const payload = {
      full_name: (json.full_name ?? "").toString().trim(),
      work_email: (json.work_email ?? "").toString().trim(),
      phone: json.phone ? String(json.phone) : null,
      dealership_name: (json.dealership_name ?? "").toString().trim(),
      role: json.role ? String(json.role) : null,
      store_count: json.store_count ? Number(json.store_count) : null,
      plan_selected: (json.plan_selected ?? "monthly") as LeadPlan,
      message: json.message ? String(json.message) : null,
      marketing_opt_in: !!json.marketing_opt_in,
      page_path: json.page_path ? String(json.page_path) : null,
      referer: req.headers.get("referer"),
      utm_source: json.utm_source ? String(json.utm_source) : null,
      utm_medium: json.utm_medium ? String(json.utm_medium) : null,
      utm_campaign: json.utm_campaign ? String(json.utm_campaign) : null,
      user_agent: req.headers.get("user-agent"),
      ip_address: (req.headers.get("x-forwarded-for") || req.ip || "")
        .split(",")[0]
        .trim(),
    };

    // Minimal validation
    if (!payload.full_name || !payload.work_email || !payload.dealership_name) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Insert into Supabase (RLS bypassed by service role)
    const { data, error } = await supabaseAdmin
      .from("lead")
      .insert(payload)
      .select("id, created_at")
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Email sales@dealerboardit.com
    const subject = `New Lead — ${payload.dealership_name} — ${payload.plan_selected}`;
    const lines = [
      `Name: ${payload.full_name}`,
      `Email: ${payload.work_email}`,
      `Phone: ${payload.phone ?? "-"}`,
      `Dealership: ${payload.dealership_name}`,
      `Role: ${payload.role ?? "-"}`,
      `Store Count: ${payload.store_count ?? "-"}`,
      `Plan: ${payload.plan_selected}`,
      `Message: ${payload.message ?? "-"}`,
      "",
      `Page: ${payload.page_path ?? "-"}`,
      `Referer: ${payload.referer ?? "-"}`,
      `UTM: ${payload.utm_source ?? "-"} / ${payload.utm_medium ?? "-"} / ${
        payload.utm_campaign ?? "-"
      }`,
      `IP: ${payload.ip_address ?? "-"}`,
      `UA: ${payload.user_agent ?? "-"}`,
      `Created: ${data?.created_at}`,
    ].join("\n");

    try {
      await resend.emails.send({
        from: "Dealer Board It <noreply@dealerboardit.com>",
        to: ["sales@dealerboardit.com"],
        subject,
        text: lines,
      });
    } catch (mailErr) {
      // Don't fail the request if the email provider hiccups
      console.error("Resend error:", mailErr);
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Server error.";
    console.error("Lead route error:", err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
