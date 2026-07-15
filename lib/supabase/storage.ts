import { randomUUID } from "crypto";
import { supabaseServer } from "@/lib/supabase/server";

export async function uploadPropertyImages(
  files: File[]
): Promise<string[]> {
  const urls: string[] = [];

  for (const file of files) {
    const extension =
      file.name.split(".").pop() ?? "webp";

    const fileName = `${randomUUID()}.${extension}`;

    const filePath = `properties/${fileName}`;

    const { error } =
      await supabaseServer.storage
        .from("property-images")
        .upload(filePath, file, {
          cacheControl: "3600",
          upsert: false,
        });

    if (error) {
      throw error;
    }

    const {
      data: { publicUrl },
    } = supabaseServer.storage
      .from("property-images")
      .getPublicUrl(filePath);

    urls.push(publicUrl);
  }

  return urls;
}

export async function uploadOptimizedImage(
  imageBuffer: Buffer,
  folder = "properties"
): Promise<string> {
  const fileName = `${randomUUID()}.webp`;

  const filePath = `${folder}/${fileName}`;

  const { error } =
    await supabaseServer.storage
      .from("property-images")
      .upload(filePath, imageBuffer, {
        contentType: "image/webp",
        cacheControl: "3600",
        upsert: false,
      });

  if (error) {
    throw error;
  }

  const {
    data: { publicUrl },
  } = supabaseServer.storage
    .from("property-images")
    .getPublicUrl(filePath);

  return publicUrl;
}