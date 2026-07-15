import type { Metadata } from "next";
import "./globals.css";


import { Toaster } from "sonner";
import ThemeProvider from "@/components/providers/ThemeProvider";
import GlobalSchema from "@/components/seo/GlobalSchema";

export const metadata: Metadata = {
  title: "RSN Estates",
  description: "RSN Estates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>

        <GlobalSchema />

        <ThemeProvider>

          {children}

          <Toaster
            richColors
            position="bottom-center"
            closeButton
            duration={2500}
          />

        </ThemeProvider>

      </body>
    </html>
  );
}