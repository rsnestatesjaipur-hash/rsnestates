import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email/sendEmail";

export async function GET() {
  try {
    await sendEmail({
      to: "rsnestatesjaipur@gmail.com", // Replace with your actual Gmail
      subject: "RSN Estates Test",
      html: `
        <h1>Success 🎉</h1>
        <p>Resend is working correctly.</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
  console.error("Resend Error:", error);

  return NextResponse.json(
    {
      success: false,
      error: JSON.stringify(error, null, 2),
    },
    {
      status: 500,
    }
  );
}
  }