import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);

  try {
    // منطق بديل لمعالجة الطلب بدون إرسال بريد إلكتروني عبر Resend
    return NextResponse.json({
      success: true,
      message: "Message received",
      email,
      subject,
      message,
    });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
