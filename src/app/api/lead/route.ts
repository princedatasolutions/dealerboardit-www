// src/app/api/lead/route.ts
import { NextRequest, NextResponse } from "next/server";

type Body = {
  full_name: string;
  work_email: string;
  phone: string | null;
  dealership_name: string;
  role: string | null;
  store_count: number | null;
  plan_selected: "book_demo" | "monthly" | "yearly" | "multi_store";
  message: string | null;
  marketing_opt_in: boolean;
  page_path?: string | null;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Body;

    // minimal validation
    if (!body.full_name || !body.work_email || !body.dealership_name) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      return NextResponse.json(
        { error: "RESEND_API_KEY is not configured" },
        { status: 500 }
      );
    }

    const planLabel =
      body.plan_selected === "book_demo"
        ? "Book Demo"
        : body.plan_selected === "multi_store"
        ? "Multi-Store (Monthly discount)"
        : body.plan_selected === "monthly"
        ? "Monthly"
        : "Yearly";

    const subject = `New Lead — ${planLabel}: ${body.full_name} (${body.dealership_name})`;

    const lines = [
      `Name: ${body.full_name}`,
      `Email: ${body.work_email}`,
      `Dealership: ${body.dealership_name}`,
      `Phone: ${body.phone ?? "-"}`,
      `Role: ${body.role ?? "-"}`,
      `Store count: ${body.store_count ?? "-"}`,
      `Plan selected: ${planLabel}`,
      `Opt-in: ${body.marketing_opt_in ? "Yes" : "No"}`,
      `Message: ${body.message ?? "-"}`,
      "",
      `Page: ${body.page_path ?? "-"}`,
      `UTM source: ${body.utm_source ?? "-"}`,
      `UTM medium: ${body.utm_medium ?? "-"}`,
      `UTM campaign: ${body.utm_campaign ?? "-"}`,
    ];

    const text = lines.join("\n");
    const html = `<pre style="font:14px/1.4 ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono','Courier New', monospace">${text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")}</pre>`;

    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Dealer Board It <no-reply@dealerboardit.com>",
        to: ["stephen@dealerboardit.com"],
        reply_to: body.work_email, // reply straight to lead
        subject,
        text,
        html,
      }),
    });

    if (!resp.ok) {
      let detail: unknown = null;

      try {
        detail = await resp.json();
      } catch {}
      const msg =
        detail &&
        typeof detail === "object" &&
        "message" in (detail as Record<string, unknown>)
          ? (detail as { message?: string }).message ??
            `Resend error: ${resp.status}`
          : `Resend error: ${resp.status}`;
      return NextResponse.json({ error: msg }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unexpected error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
