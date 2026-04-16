"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export function WaitlistForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("loading");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const selfHosting = formData.get("selfHosting") === "on";

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, selfHosting }),
      });
      const data = (await res.json()) as { success: boolean; error?: string };
      if (data.success) {
        setFormState("success");
      } else {
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setFormState("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setFormState("error");
    }
  }

  if (formState === "success") {
    return (
      <div className="rounded-xl border border-accent/30 bg-accent/10 px-6 py-5 text-center">
        <p className="text-lg font-semibold text-accent">You&apos;re in.</p>
        <p className="mt-1 text-sm text-zinc-400">
          We&apos;ll email you when the alpha lands. In the meantime, follow
          along on GitHub.
        </p>
      </div>
    );
  }

  const isPending = formState === "loading";

  return (
    <div className="flex flex-col gap-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="waitlist-email" className="sr-only">
          Email address
        </label>
        <input
          id="waitlist-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className="input-field sm:flex-1"
          disabled={isPending}
        />
        <button
          type="submit"
          disabled={isPending}
          className="btn-primary whitespace-nowrap"
        >
          {isPending ? "Joining…" : "Notify me"}
        </button>
      </form>

      {/* ICP signal checkbox */}
      <label className="flex cursor-pointer items-start gap-2 text-left text-sm text-zinc-500">
        <input
          type="checkbox"
          name="selfHosting"
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-zinc-600 bg-zinc-800 text-accent focus:ring-accent/50"
          disabled={isPending}
        />
        <span>I&apos;d consider self-hosting this</span>
      </label>

      {formState === "error" && (
        <p className="text-sm text-red-400" role="alert">
          {errorMsg}
        </p>
      )}
    </div>
  );
}
