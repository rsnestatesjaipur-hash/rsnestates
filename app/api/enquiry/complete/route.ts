import { NextRequest, NextResponse } from "next/server";

import { supabaseServer } from "@/lib/supabase/server";

const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

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

  const result =
    await response.json();

  return result.success === true;
}

export async function POST(
  request: NextRequest
) {
  try {
    const body = await request.json();

    const turnstileToken =
  body["cf-turnstile-response"];

if (!turnstileToken) {
  return NextResponse.json(
    {
      success: false,
      message:
        "Please complete the security verification.",
    },
    {
      status: 400,
    }
  );
}

const verified =
  await verifyTurnstile(
    turnstileToken
  );

if (!verified) {
  return NextResponse.json(
    {
      success: false,
      message:
        "Security verification failed.",
    },
    {
      status: 400,
    }
  );
}

    const { error } =
      await supabaseServer
        .from("contact_enquiries")
        .update({
          additional_details:
            body.additionalDetails,

          status: "Completed",
        })
        .eq("token", body.token);

    if (error) {
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