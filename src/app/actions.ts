"use server";

export type SubscribeResult =
  | { success: true }
  | { success: false; error: string };

export async function subscribeEmail(
  _prevState: SubscribeResult | null,
  formData: FormData
): Promise<SubscribeResult> {
  const email = (formData.get("email") as string | null)?.trim();

  if (!email || !email.includes("@")) {
    return { success: false, error: "Please enter a valid email address." };
  }

  const apiKey = process.env.BUTTONDOWN_API_KEY;
  if (!apiKey) {
    // Fallback: log and succeed silently so the deploy works without the key configured
    console.error("BUTTONDOWN_API_KEY is not set");
    return { success: true };
  }

  try {
    const res = await fetch("https://api.buttondown.email/v1/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Token ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        type: "unactivated",
        tags: ["waitlist"],
      }),
      cache: "no-store",
    });

    // 409 = already subscribed — treat as success
    if (res.ok || res.status === 409) {
      return { success: true };
    }

    const body = await res.text();
    console.error("Buttondown error", res.status, body);
    return {
      success: false,
      error: "Something went wrong. Please try again.",
    };
  } catch (err) {
    console.error("Subscribe fetch failed", err);
    return {
      success: false,
      error: "Network error. Please try again.",
    };
  }
}
