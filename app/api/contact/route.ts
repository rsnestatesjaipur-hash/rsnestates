import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/email/sendEmail";
import { supabaseServer } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { data: enquiry, error: enquiryError } =
  await supabaseServer
    .from("contact_enquiries")
    .insert({
      enquiry_type: body.enquiryType,
      full_name: body.fullName,
      mobile: body.mobile,
      email: body.email,
      message: body.message,
      status: "Awaiting Details",
    })
    .select("token")
    .single();

if (enquiryError) {
  console.error(enquiryError);

  return NextResponse.json(
    {
      success: false,
    },
    {
      status: 500,
    }
  );
}

const baseUrl =
  process.env.NEXT_PUBLIC_APP_URL ??
  "http://localhost:3000";

const enquiryUrl =
  `${baseUrl}/enquiry/${enquiry.token}`;

    const entries = Object.entries(body)
      .filter(
        ([, value]) =>
          value !== "" &&
          value !== null &&
          value !== undefined
      )
      .map(
        ([key, value]) =>
          `<tr>
              <td style="padding:8px;font-weight:600;border:1px solid #ddd;">
                ${key}
              </td>
              <td style="padding:8px;border:1px solid #ddd;">
                ${value}
              </td>
           </tr>`
      )
      .join("");

    // =====================================================
    // Admin Email
    // =====================================================

    await sendEmail({
      to: process.env.ADMIN_EMAIL!,
      subject: `New ${body.enquiryType} Enquiry`,
      html: `
        <h2>New Website Enquiry</h2>

        <table
          cellpadding="0"
          cellspacing="0"
          style="border-collapse:collapse;width:100%;"
        >
          ${entries}
        </table>
      `,
    });

// =====================================================
// Customer Email
// =====================================================

if (body.email) {
  const isBuy =
    body.enquiryType === "buy";

  await sendEmail({
    to: body.email,

    subject: isBuy
      ? "Thank you for contacting RSN Estates – Let's Find Your Perfect Property"
      : "Thank you for contacting RSN Estates – Let's Sell Your Property",

html: `
  <h2>Hello ${body.fullName},</h2>

  <p>
    Thank you for contacting
    <strong>RSN Estates</strong>.
  </p>

  <p>
    We have received your enquiry.
  </p>

  <p>
    To help our property expert understand your
    requirements better, please complete a short
    questionnaire by clicking the button below.
  </p>

  <p style="margin:40px 0;text-align:center;">
    <a
      href="${enquiryUrl}"
      style="
        display:inline-block;
        background:#f59e0b;
        color:#111827;
        text-decoration:none;
        padding:16px 32px;
        border-radius:10px;
        font-size:16px;
        font-weight:700;
      "
    >
      Complete Your Requirements
    </a>
  </p>

  <p>
    It only takes about a minute and helps us
    recommend the most suitable properties for you.
  </p>

  <p>
    Regards,<br/>
    <strong>RSN Estates</strong>
  </p>
`,
  });
}

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}