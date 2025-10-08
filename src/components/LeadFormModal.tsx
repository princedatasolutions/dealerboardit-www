"use client";

import { useEffect, useMemo, useState } from "react";

export type LeadPlan = "demo" | "monthly" | "yearly" | "multi_store";

export default function LeadFormModal({
  open,
  planSelected,
  onClose,
}: {
  open: boolean;
  planSelected: LeadPlan;
  onClose: () => void;
}) {
  const [fullName, setFullName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [dealershipName, setDealershipName] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [storeCount, setStoreCount] = useState<number | "">("");
  const [message, setMessage] = useState("");
  const [optIn, setOptIn] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState<null | "ok" | "err">(null);
  const [errorText, setErrorText] = useState<string>("");

  // Reset form when reopened
  useEffect(() => {
    if (open) {
      setDone(null);
      setErrorText("");
    }
  }, [open, planSelected]);

  const planLabel = useMemo(() => {
    switch (planSelected) {
      case "monthly":
        return "Monthly";
      case "yearly":
        return "Yearly";
      case "multi_store":
        return "Multi-Store (Monthly discount)";
    }
  }, [planSelected]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setErrorText("");

    try {
      const params = new URLSearchParams(window.location.search);
      const body = {
        full_name: fullName.trim(),
        work_email: workEmail.trim(),
        phone: phone.trim() || null,
        dealership_name: dealershipName.trim(),
        role: role || null,
        store_count:
          typeof storeCount === "number"
            ? storeCount
            : Number(storeCount) || null,
        plan_selected: planSelected,
        message: message.trim() || null,
        marketing_opt_in: !!optIn,
        page_path: window.location.pathname,
        utm_source: params.get("utm_source"),
        utm_medium: params.get("utm_medium"),
        utm_campaign: params.get("utm_campaign"),
      };

      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const t = await res.text();
        throw new Error(t || `Request failed (${res.status})`);
      }

      setDone("ok");
      // Optional: close automatically after a pause
      setTimeout(() => onClose(), 1200);
    } catch (err: unknown) {
      setDone("err");
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      setErrorText(msg);
    } finally {
      setSubmitting(false);
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Contact sales"
    >
      <form
        onSubmit={handleSubmit}
        className="w-[92vw] max-w-[560px] rounded-2xl bg-neutral-900 border border-white/10 shadow-2xl p-6 space-y-4"
      >
        <div className="flex items-start justify-between">
          <h2 className="text-xl font-semibold">Talk to Sales — {planLabel}</h2>
          <button
            type="button"
            onClick={onClose}
            className="px-2 py-1 rounded hover:bg-white/10"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <input
          type="hidden"
          name="plan_selected"
          value={planSelected}
          readOnly
        />

        <div className="grid grid-cols-1 gap-3">
          <label className="flex flex-col gap-1">
            <span className="text-sm text-white/70">Full name *</span>
            <input
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="h-10 rounded-md bg-black/40 border border-white/15 px-3 outline-none focus:border-pink-400"
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm text-white/70">Work email *</span>
            <input
              required
              type="email"
              value={workEmail}
              onChange={(e) => setWorkEmail(e.target.value)}
              className="h-10 rounded-md bg-black/40 border border-white/15 px-3 outline-none focus:border-pink-400"
            />
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className="flex flex-col gap-1">
              <span className="text-sm text-white/70">Dealership *</span>
              <input
                required
                value={dealershipName}
                onChange={(e) => setDealershipName(e.target.value)}
                className="h-10 rounded-md bg-black/40 border border-white/15 px-3 outline-none focus:border-pink-400"
              />
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-sm text-white/70">Phone</span>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-10 rounded-md bg-black/40 border border-white/15 px-3 outline-none focus:border-pink-400"
              />
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className="flex flex-col gap-1">
              <span className="text-sm text-white/70">Role</span>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="h-10 rounded-md bg-black/40 border border-white/15 px-3 outline-none focus:border-pink-400"
              >
                <option value="">Select…</option>
                <option>Owner</option>
                <option>Executive</option>
                <option>GM</option>
                <option>GSM</option>
                <option>Sales Manager</option>
                <option>Internet Director</option>
                <option>Finance</option>
                <option>Other</option>
              </select>
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-sm text-white/70">Store count</span>
              <input
                inputMode="numeric"
                pattern="[0-9]*"
                value={storeCount}
                onChange={(e) =>
                  setStoreCount(
                    e.target.value === "" ? "" : Number(e.target.value)
                  )
                }
                className="h-10 rounded-md bg-black/40 border border-white/15 px-3 outline-none focus:border-pink-400"
              />
            </label>
          </div>

          <label className="flex flex-col gap-1">
            <span className="text-sm text-white/70">Message</span>
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="rounded-md bg-black/40 border border-white/15 px-3 py-2 outline-none focus:border-pink-400"
              placeholder="What problems can we solve for you?"
            />
          </label>

          <label className="inline-flex items-center gap-2 select-none">
            <input
              type="checkbox"
              checked={optIn}
              onChange={(e) => setOptIn(e.target.checked)}
              className="h-4 w-4"
            />
            <span className="text-sm text-white/70">
              Send me product updates and tips
            </span>
          </label>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-white/50">
            Submitting as: <strong>{planLabel}</strong>
          </span>
          <button
            type="submit"
            disabled={submitting}
            className="rounded-md px-4 py-2 border border-white/20 hover:border-pink-400 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] disabled:opacity-60"
          >
            {submitting ? "Submitting…" : "Send"}
          </button>
        </div>

        {done === "ok" && (
          <p className="text-sm text-green-400">
            Thanks! We’ll be in touch shortly.
          </p>
        )}
        {done === "err" && (
          <p className="text-sm text-red-400">Error: {errorText}</p>
        )}
      </form>
    </div>
  );
}
