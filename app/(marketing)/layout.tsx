import type { Metadata } from "next";
import type { ReactNode } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// =====================================================
// Global Marketing Metadata
// =====================================================
//
// metadataBase provides the absolute base URL Next.js uses
// when resolving relative URLs for:
// - Open Graph images
// - Twitter images
// - Other metadata URL fields
//
// This removes the build warning:
// "metadataBase property in metadata export is not set..."
//
// IMPORTANT:
// - Existing layout structure is preserved.
// - Navbar remains unchanged.
// - Footer remains unchanged.
// - All child marketing pages continue to render normally.
// - Page-specific metadata can still override these values.
// =====================================================

export const metadata: Metadata = {
  metadataBase:
    new URL("https://www.rsnestates.com"),
};

// =====================================================
// Types
// =====================================================

interface MarketingLayoutProps {
  children: ReactNode;
}

// =====================================================
// Marketing Layout
// =====================================================

export default function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  );
}