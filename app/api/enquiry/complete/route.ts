import { NextRequest, NextResponse } from "next/server";

import { supabaseServer } from "@/lib/supabase/server";

export async function POST(
  request: NextRequest
) {
  try {
    const body = await request.json();

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