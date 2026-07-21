import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";

import { writeFile } from "fs/promises";
import path from "path";

import { uploadOptimizedImage } from "@/lib/supabase/storage";

export const runtime = "nodejs";

export async function POST(
  request: NextRequest
) {
  try {
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

    const urls: string[] = [];

    for (const file of files) {
      const arrayBuffer =
        await file.arrayBuffer();

      const buffer = Buffer.from(
        arrayBuffer
      );

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

const debugFile = path.join(
  process.cwd(),
  "public",
  "debug-upload.webp"
);

await writeFile(
  debugFile,
  optimizedBuffer
);

console.log(
  "Debug image written to:",
  debugFile
);

const publicUrl =
  await uploadOptimizedImage(
    optimizedBuffer
  );

console.log(
  "Uploaded Image URL:",
  publicUrl
);

urls.push(publicUrl);
    }

    return NextResponse.json({
      success: true,
      urls,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Image upload failed.",
      },
      {
        status: 500,
      }
    );
  }
}