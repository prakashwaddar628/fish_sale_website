import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, message } = data;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    // TODO: Process the data here — e.g., send email, save to DB, etc.
    // For demo, just log to console:
    console.log("Contact form submission:", data);

    return NextResponse.json({ success: true, message: "Message received!" });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
