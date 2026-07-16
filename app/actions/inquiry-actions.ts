"use server";

import { supabaseServer } from "@/lib/supabase/server";
import { inquirySchema } from "@/lib/validations/inquiry";
import { sendEmail } from "@/lib/email/sendEmail";

const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

function parseInquiry(formData: FormData) {
  return inquirySchema.safeParse({
    propertyId: Number(formData.get("propertyId")),
    propertyTitle: String(
      formData.get("propertyTitle") ?? ""
    ),
    propertySlug: String(
      formData.get("propertySlug") ?? ""
    ),

    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    message: String(formData.get("message") ?? ""),
  });
}

export async function createInquiry(
  formData: FormData
) {

    const turnstileToken =
    String(
      formData.get(
        "cf-turnstile-response"
      ) ?? ""
    );

  if (!turnstileToken) {
    return {
      success: false,
      message:
        "Please complete the security verification.",
    };
  }

  const verified =
    await verifyTurnstile(
      turnstileToken
    );

  if (!verified) {
    return {
      success: false,
      message:
        "Security verification failed.",
    };
  }

  const parsed = parseInquiry(formData);

  const emailVerifyToken =
  crypto.randomUUID();

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const { error } = await supabaseServer
    .from("property_inquiries")
    .insert({
      property_id: parsed.data.propertyId,
      property_title: parsed.data.propertyTitle,
      property_slug: parsed.data.propertySlug,

      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      message: parsed.data.message,

      status: "New",

      email_verified: false,

      email_verify_token:
      emailVerifyToken,
    });

  if (error) {
    console.error(error);

    return {
      success: false,
      message: error.message,
    };
  }


  async function verifyTurnstile(
  token: string
) {
  const response =
    await fetch(
      TURNSTILE_VERIFY_URL,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded",
        },

        body: new URLSearchParams({
          secret:
            process.env
              .TURNSTILE_SECRET_KEY!,
          response: token,
        }),
      }
    );

const result = await response.json();

console.log("Turnstile verification:", result);

return result.success === true;
}

const website = "https://rsnestates.com";

const propertyUrl = `${website}/properties/${parsed.data.propertySlug}`;

const verifyUrl =
  `${website}/confirm-email/${emailVerifyToken}`;

await sendEmail({
  to: process.env.ADMIN_EMAIL!,
  subject: `New Property Inquiry - ${parsed.data.propertyTitle}`,
  html: `
    <h2>New Property Inquiry</h2>

    <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%;">
      <tr>
        <td><strong>Name</strong></td>
        <td>${parsed.data.name}</td>
      </tr>

      <tr>
        <td><strong>Mobile / WhatsApp</strong></td>
        <td>${parsed.data.phone}</td>
      </tr>

      <tr>
        <td><strong>Property</strong></td>
        <td>${parsed.data.propertyTitle}</td>
      </tr>

      <tr>
        <td><strong>Property ID</strong></td>
        <td>${parsed.data.propertyId}</td>
      </tr>

      <tr>
        <td><strong>Property Link</strong></td>
        <td>
          <a href="${propertyUrl}">
            ${propertyUrl}
          </a>
        </td>
      </tr>
    </table>
  `,
});

if (parsed.data.email) {
  await sendEmail({
    to: parsed.data.email,

    subject:
      "Please confirm your email - RSN Estates",

    html: `
      <div style="max-width:650px;margin:auto;font-family:Arial,sans-serif;color:#1e293b;line-height:1.7;">

        <h2>
          Hello ${parsed.data.name},
        </h2>

        <p>
          Thank you for showing interest in
          <strong>${parsed.data.propertyTitle}</strong>.
        </p>

        <p>
          Before we send you similar properties,
          price updates and exclusive inventory,
          please confirm your email address.
        </p>

        <div style="margin:35px 0;text-align:center;">

          <a
            href="${verifyUrl}"
            style="
              display:inline-block;
              padding:16px 34px;
              background:#2563eb;
              color:#ffffff;
              text-decoration:none;
              border-radius:10px;
              font-weight:700;
              font-size:16px;
            "
          >
            ✅ Confirm My Email
          </a>

        </div>

        <p>
          After confirmation you'll receive:
        </p>

        <ul>
          <li>🏡 Similar properties matching your requirements</li>
          <li>📉 Price drop alerts</li>
          <li>✨ New launches in Jaipur</li>
          <li>🔑 Exclusive inventory before public listing</li>
        </ul>

        <hr
          style="
            margin:32px 0;
            border:none;
            border-top:1px solid #e2e8f0;
          "
        />

        <p>
          Interested in this property right now?
        </p>

        <p>
          <a href="${propertyUrl}">
            View Property →
          </a>
        </p>

        <p>
          Regards,<br/>
          <strong>RSN Estates</strong>
        </p>

      </div>
    `,
  });
}

return {
  success: true,
};
}

export async function updateInquiryStatus(
  id: number,
  status: string
) {
  const { error } = await supabaseServer
    .from("property_inquiries")
    .update({
      status,
    })
    .eq("id", id);

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  return {
    success: true,
  };
}

export async function deleteInquiry(
  id: number
) {
  const { error } = await supabaseServer
    .from("property_inquiries")
    .delete()
    .eq("id", id);

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  return {
    success: true,
  };
}

export async function deleteMultipleInquiries(
  items: {
    id: number;
    source: "Property" | "Contact";
  }[]
) {
  const propertyIds = items
    .filter(
      (item) =>
        item.source === "Property"
    )
    .map((item) => item.id);

  const contactIds = items
    .filter(
      (item) =>
        item.source === "Contact"
    )
    .map((item) => item.id);

  if (propertyIds.length > 0) {
    const { error } =
      await supabaseServer
        .from("property_inquiries")
        .delete()
        .in("id", propertyIds);

    if (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  if (contactIds.length > 0) {
    const { error } =
      await supabaseServer
        .from("contact_enquiries")
        .delete()
        .in("id", contactIds);

    if (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  return {
    success: true,
  };
}

export async function getAllInquiries() {
  const [
    propertyResult,
    contactResult,
  ] = await Promise.all([
    supabaseServer
      .from("property_inquiries")
      .select("*"),

    supabaseServer
      .from("contact_enquiries")
      .select("*"),
  ]);

  if (propertyResult.error) {
    console.error(
      propertyResult.error
    );
  }

  if (contactResult.error) {
    console.error(
      contactResult.error
    );
  }

  const propertyInquiries = (
    propertyResult.data ?? []
  ).map((item) => ({
    id: item.id,

    source: "Property" as const,

    propertyId: item.property_id,

    propertyTitle:
      item.property_title,

    propertySlug:
      item.property_slug,

    enquiryType: undefined,

    name: item.name,

    email: item.email,

    phone: item.phone,

    message: item.message,

    status: item.status,

    createdAt: item.created_at,
  }));

  const contactInquiries = (
    contactResult.data ?? []
  ).map((item) => ({
    id: item.id,

    source: "Contact" as const,

    propertyId: undefined,

    propertyTitle:
      item.enquiry_type === "buy"
        ? "Buy Property"
        : "Sell Property",

    propertySlug: undefined,

    enquiryType:
      item.enquiry_type,

    name: item.full_name,

    email: item.email,

    phone: item.mobile,

    message: item.message,

    status: item.status,

    createdAt: item.created_at,
  }));

  return [
    ...propertyInquiries,
    ...contactInquiries,
  ].sort(
    (a, b) =>
      new Date(
        b.createdAt
      ).getTime() -
      new Date(
        a.createdAt
      ).getTime()
  );
}