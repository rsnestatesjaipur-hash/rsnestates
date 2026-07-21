import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";

import { uploadOptimizedImage } from "@/lib/supabase/storage";

export const runtime = "nodejs";

/* =========================================================
   Upload Optimized Property Images
   ---------------------------------------------------------
   Flow:
   1. Receive uploaded files.
   2. Optimize each image using Sharp.
   3. Log optimization details.
   4. Upload optimized image to Supabase Storage.
   5. Return public URLs.
========================================================= */

export async function POST(
  request: NextRequest
) {
  try {
    console.log(
      "========== IMAGE UPLOAD START =========="
    );

    /* =====================================================
       Read Form Data
    ===================================================== */

    const formData =
      await request.formData();

    const files = formData.getAll(
      "images"
    ) as File[];

    if (files.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "No images received.",
        },
        {
          status: 400,
        }
      );
    }

    console.log(
      `Received ${files.length} image(s).`
    );

    const urls: string[] = [];

    /* =====================================================
       Process Every Image
    ===================================================== */

    for (const file of files) {
      console.log(
        "STEP 1 - Processing:",
        file.name
      );

      /* ---------------------------------------------------
         Convert File → Buffer
      --------------------------------------------------- */

      const arrayBuffer =
        await file.arrayBuffer();

      const buffer = Buffer.from(
        arrayBuffer
      );

      console.log(
        "STEP 2 - Buffer created"
      );

      /* ---------------------------------------------------
         Optimize Image
      --------------------------------------------------- */

      const optimizedBuffer =
        await sharp(buffer)
          .rotate()
          .resize({
            width: 1920,
            height: 1920,
            fit: "inside",
            withoutEnlargement: true,
          })
          .webp({
            quality: 75,
            effort: 6,
          })
          .toBuffer();

      console.log(
        "STEP 3 - Sharp optimization completed"
      );

      console.log(
        `${file.name}: ${(
          buffer.length /
          1024 /
          1024
        ).toFixed(2)} MB → ${(
          optimizedBuffer.length /
          1024 /
          1024
        ).toFixed(2)} MB`
      );

      const metadata =
        await sharp(
          optimizedBuffer
        ).metadata();

      console.log(
        "Optimized Image Metadata:",
        metadata
      );

      /* ---------------------------------------------------
         Upload to Supabase Storage
      --------------------------------------------------- */

      console.log(
        "STEP 4 - Uploading to Supabase..."
      );

      const publicUrl =
        await uploadOptimizedImage(
          optimizedBuffer
        );

      if (!publicUrl) {
        throw new Error(
          "Supabase returned an empty public URL."
        );
      }

      console.log(
        "STEP 5 - Uploaded:",
        publicUrl
      );

      urls.push(publicUrl);
    }

    console.log(
      "========== IMAGE UPLOAD SUCCESS =========="
    );

    return NextResponse.json({
      success: true,
      urls,
    });
  } catch (error) {
    console.error(
      "========== IMAGE UPLOAD FAILED =========="
    );

    console.error(
      "UPLOAD ERROR DETAILS:",
      error instanceof Error
        ? {
            name: error.name,
            message: error.message,
            stack: error.stack,
          }
        : error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Image upload failed.",
      },
      {
        status: 500,
      }
    );
  }
}