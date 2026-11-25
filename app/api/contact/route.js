import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const b = await req.json();
    if (b.website) return NextResponse.json({ ok: true }); // honeypot
    const name = String(b.name || "").trim(), email = String(b.email || "").trim(), message = String(b.message || "").trim();
    if (!name || !message || !/^\S+@\S+\.\S+$/.test(email)) return NextResponse.json({ error: "Please enter your name, a valid email and your project details." }, { status: 400 });
    // TODO: connect an email provider here (Resend / Nodemailer / SendGrid) and send to shriharigeoservices@gmail.com
    console.log("New enquiry:", { name, email, phone: b.phone, service: b.service, message });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
