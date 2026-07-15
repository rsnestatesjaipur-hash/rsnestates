import {
  ChangeEvent,
  DragEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  ImagePlus,
  Trash2,
} from "lucide-react";

import Card from "@/components/ui/Card";

interface ImageUploaderProps {
  title: string;

  description: string;

  files: File[];

  existingImages: string[];

  deletedImages: string[];

  onFilesChange: (files: File[]) => void;

  onExistingImagesChange: (
    images: string[]
  ) => void;

  onDeletedImagesChange: (
    images: string[]
  ) => void;
}

interface PreviewImage {
  id: string;
  file: File;
  preview: string;
}

export default function ImageUploader({
  title,
  description,
  files,
  existingImages,
  deletedImages,
  onFilesChange,
  onExistingImagesChange,
  onDeletedImagesChange,
}: ImageUploaderProps) {
  const [dragging, setDragging] = useState(false);

  const [previews, setPreviews] = useState<
    PreviewImage[]
  >([]);

  useEffect(() => {
    const nextPreviews = files.map((file) => ({
      id:
        crypto.randomUUID?.() ??
        `${file.name}-${file.size}-${file.lastModified}`,
      file,
      preview: URL.createObjectURL(file),
    }));

    setPreviews(nextPreviews);

    return () => {
      nextPreviews.forEach((image) => {
        URL.revokeObjectURL(image.preview);
      });
    };
  }, [files]);

const addFiles = useCallback(
  (
    incoming: FileList | File[]
  ) => {
    const selected = Array.from(
      incoming
    ).filter((file) =>
      file.type.startsWith("image/")
    );

    if (selected.length === 0) {
      return;
    }

    const updated = [...files];

    selected.forEach((file) => {
      const exists = updated.some(
        (item) =>
          item.name === file.name &&
          item.size === file.size &&
          item.lastModified ===
            file.lastModified
      );

      if (!exists) {
        updated.push(file);
      }
    });

    onFilesChange(updated);
  },
  [files, onFilesChange]
);

  const removeFile = useCallback(
    (index: number) => {
      const updated = files.filter(
        (_, i) => i !== index
      );

      onFilesChange(updated);
    },
    [files, onFilesChange]
  );

const removeExistingImage = useCallback(
  (index: number) => {
    const image = existingImages[index];

    const updated = existingImages.filter(
      (_, i) => i !== index
    );

    onExistingImagesChange(updated);

    onDeletedImagesChange([
      ...deletedImages,
      image,
    ]);
  },
  [
    existingImages,
    deletedImages,
    onExistingImagesChange,
    onDeletedImagesChange,
  ]
);

const handleChange = (
  event: ChangeEvent<HTMLInputElement>
) => {
  if (!event.target.files) {
    return;
  }

  addFiles(
    event.target.files
  );

  event.target.value = "";
};

  const handleDragEnter = (
    event: DragEvent<HTMLLabelElement>
  ) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragOver = (
    event: DragEvent<HTMLLabelElement>
  ) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (
    event: DragEvent<HTMLLabelElement>
  ) => {
    event.preventDefault();
    setDragging(false);
  };

const handleDrop = async (
  event: DragEvent<HTMLLabelElement>
) => {
  event.preventDefault();

  setDragging(false);

  if (!event.dataTransfer.files.length) {
    return;
  }

  await addFiles(
    event.dataTransfer.files
  );
};

  const totalImages = useMemo(
    () => files.length,
    [files]
  );

  return (
    <Card className="p-8">
    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
      {title}
    </h2>

    <p className="mt-2 text-slate-500 dark:text-slate-400">
      {description}
    </p>

      <label
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`mt-8 flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed px-8 py-16 transition-all ${
          dragging
            ? "border-blue-500 bg-blue-50 dark:bg-blue-950/20"
            : "border-slate-300 hover:border-slate-900 dark:border-slate-700 dark:hover:border-blue-500"
        }`}
      >
        <ImagePlus
          size={56}
          className="text-slate-400 dark:text-slate-500"
        />

        <h3 className="mt-6 text-xl font-semibold text-slate-900 dark:text-white">
          Upload Property Images
        </h3>

        <p className="mt-2 text-center text-slate-500 dark:text-slate-400">
          Drag & Drop images here
          <br />
          or click to browse your computer
        </p>

        <div className="mt-6 rounded-xl bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
          {totalImages} image
          {totalImages !== 1 ? "s" : ""} selected
        </div>

        <input
          type="file"
          multiple
          accept="image/*"
          className="hidden"
          onChange={handleChange}
        />
      </label>
      {existingImages.length > 0 && (
              <div className="mt-8">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Existing Images
                  </h3>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700 dark:bg-green-900/40 dark:text-green-300">
                    {existingImages.length} Saved
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {existingImages.map((url, index) => (
                    <div
                      key={url}
                      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
                    >
                      <div className="relative aspect-square overflow-hidden">
                        <img
                          src={url}
                          alt={`Property ${index + 1}`}
                          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                        />

                        <button
                          type="button"
                          onClick={() =>
                            removeExistingImage(index)
                          }
                          className="absolute right-2 top-2 rounded-full bg-red-600 p-2 text-white opacity-0 transition hover:bg-red-700 group-hover:opacity-100"
                          title="Remove Image"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                      <div className="p-3">
                        <p className="text-xs font-medium text-green-600 dark:text-green-400">
                          Already Uploaded
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {previews.length > 0 && (
        <div className="mt-8">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Selected Images
            </h3>

            <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
              {previews.length} Selected
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {previews.map((image, index) => (
              <div
                key={image.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={image.preview}
                    alt={image.file.name}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      removeFile(index)
                    }
                    className="absolute right-2 top-2 rounded-full bg-red-600 p-2 text-white opacity-0 transition hover:bg-red-700 group-hover:opacity-100"
                    title="Remove Image"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                <div className="space-y-1 p-3">
                  <p
                    className="truncate text-sm font-semibold text-slate-900 dark:text-white"
                    title={image.file.name}
                  >
                    {image.file.name}
                  </p>

                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {(image.file.size / 1024 / 1024).toFixed(
                      2
                    )}{" "}
                    MB
                  </p>

                  <p className="text-xs text-green-600 dark:text-green-400">
                    Ready to upload
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
}