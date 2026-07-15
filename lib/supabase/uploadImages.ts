export async function uploadImages(
  files: File[],
  onProgress?: (progress: number) => void
): Promise<string[]> {
  const formData = new FormData();

  files.forEach((file) => {
    formData.append("images", file);
  });

  onProgress?.(10);

  const response = await fetch(
    "/api/upload-images",
    {
      method: "POST",
      body: formData,
    }
  );

  onProgress?.(90);

  if (!response.ok) {
    throw new Error(
      "Failed to upload images."
    );
  }

  const result =
    await response.json();

  if (!result.success) {
    throw new Error(
      result.message ??
        "Upload failed."
    );
  }

  onProgress?.(100);

  return result.urls;
}