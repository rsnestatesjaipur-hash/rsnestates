import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase/client";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      propertyId,
      name,
      whatsapp,
      email,
      message,
      source,
    } = body;

    if (!name || !whatsapp) {
      return NextResponse.json(
        {
          success: false,
          message: "Name and WhatsApp number are required.",
        },
        {
          status: 400,
        }
      );
    }

    const { error } = await supabase
      .from("enquiries")
      .insert({
        property_id: propertyId ?? null,
        name,
        whatsapp,
        email: email || null,
        message: message || null,
        source: source || "Website",
      });

    if (error) {
      console.error(error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to save enquiry.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}