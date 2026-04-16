import { NextResponse } from "next/server";

export const runtime = "edge";

type SubscribeBody = { email?: string; selfHosting?: boolean };
type ApiResponse = { success: boolean; error?: string };

export async function POST(request: Request): Promise<NextResponse<ApiResponse>> {
  let body: SubscribeBody;
  try {
    body = (await request.json()) as SubscribeBody;
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const email = body.email?.trim();
  const selfHosting = body.selfHosting === true;
  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { success: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const apiKey = process.env.BUTTONDOWN_API_KEY;
  if (!apiKey) {
    // Configured but key missing — log and succeed silently so the page works
    // without Buttondown set up (e.g. preview deploys)
    console.warn("BUTTONDOWN_API_KEY not set — skipping subscriber save");
    return NextResponse.json({ success: true });
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
        tags: selfHosting ? ["waitlist", "self-hosting"] : ["waitlist"],
      }),
    });

    // 409 = already subscribed — treat as success
    if (res.ok || res.status === 409) {
      return NextResponse.json({ success: true });
    }

    console.error("Buttondown error", res.status);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 502 }
    );
  } catch (err) {
    console.error("Subscribe fetch failed", err);
    return NextResponse.json(
      { success: false, error: "Network error. Please try again." },
      { status: 502 }
    );
  }
}
