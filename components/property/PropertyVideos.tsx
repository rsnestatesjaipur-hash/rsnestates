import type { PropertyVideo } from "@/types";

interface PropertyVideosProps {
  videos: PropertyVideo[];
}

// =====================================================
// Helpers
// =====================================================

function getEmbedUrl(url: string): string {
  // Standard YouTube
  if (url.includes("youtube.com/watch?v=")) {
    const videoId = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }

  // YouTube Shorts
  if (url.includes("youtube.com/shorts/")) {
    const videoId = url.split("shorts/")[1]?.split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }

  // Short URL
  if (url.includes("youtu.be/")) {
    const videoId = url.split("youtu.be/")[1]?.split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }

  // Vimeo
  if (url.includes("vimeo.com/")) {
    const videoId = url.split("vimeo.com/")[1]?.split("?")[0];
    return `https://player.vimeo.com/video/${videoId}`;
  }

  return url;
}

// =====================================================
// Component
// =====================================================

export default function PropertyVideos({
  videos,
}: PropertyVideosProps) {
  // ===================================================
  // Remove Empty / Invalid Entries
  // ===================================================

  const validVideos = (videos ?? []).filter(
    (video) =>
      video &&
      typeof video === "object" &&
      typeof video.url === "string" &&
      video.url.trim() !== ""
  );

  if (validVideos.length === 0) {
    return null;
  }

  return (
    <section className="mt-16">
      {/* ============================================
          Header
      ============================================ */}

      <div className="mb-10">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
          Property Video Tour
        </h2>

        <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
          Watch detailed walkthroughs, drone
          views and property showcase videos
          to get a better understanding of the
          property before scheduling a site
          visit.
        </p>
      </div>

      {/* ============================================
          Videos
      ============================================ */}

      <div className="space-y-12">
        {validVideos.map(
          (video, index) => {
            const isMp4 =
              video.url
                .toLowerCase()
                .endsWith(".mp4");

            return (
              <div
                key={`${video.title ?? "video"}-${index}`}
                className="overflow-hidden rounded-3xl bg-white shadow-xl dark:bg-slate-900"
              >
                <div className="relative h-[500px] w-full bg-red-200">
                  {isMp4 ? (
                    <video
                      controls
                      className="absolute inset-0 h-full w-full border-4 border-blue-600"
                    >
                      <source
                        src={video.url}
                        type="video/mp4"
                      />

                      Your browser does not
                      support the video tag.
                    </video>
                  ) : (
                    <>
                      <p className="bg-yellow-100 p-2 text-xs break-all">
                        Original: {video.url}
                      </p>

                      <p className="bg-green-100 p-2 text-xs break-all">
                        Embed: {getEmbedUrl(video.url)}
                      </p>

                      <iframe
                        src={getEmbedUrl(video.url)}
                      title={
                        video.title ??
                        `Video ${index + 1}`
                      }
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                  />
                </>
                  )}
                </div>

                {(video.title ?? "").trim() !==
                  "" && (
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {video.title}
                    </h3>
                  </div>
                )}
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}