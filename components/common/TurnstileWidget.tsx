"use client";

import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

// =====================================================
// Props
// =====================================================

interface TurnstileWidgetProps {
  onVerify: (
    token: string
  ) => void;

  onExpire?: () => void;

  onError?: () => void;
}

// =====================================================
// Component
// =====================================================

export default function TurnstileWidget({
  onVerify,
  onExpire,
  onError,
}: TurnstileWidgetProps) {
  const [widgetKey] =
    useState(() => Date.now());

  return (
    <div className="flex justify-center">
      <Turnstile
        key={widgetKey}
        siteKey={
          process.env
            .NEXT_PUBLIC_TURNSTILE_SITE_KEY!
        }
        options={{
          theme: "auto",
          size: "normal",
        }}
        onSuccess={(
          token: string
        ) => {
          onVerify(token);
        }}
        onExpire={() => {
          onExpire?.();
        }}
        onError={() => {
          onError?.();
        }}
      />
    </div>
  );
}