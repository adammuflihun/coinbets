"use client";

import { useEffect, useRef } from "react";

export function UnicornBackground({ projectId = "rTFMVHVPW11hOtgodJhX" }: { projectId?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const u = window.UnicornStudio;
    if (u && u.init) {
      u.init();
    } else {
      window.UnicornStudio = { isInitialized: false };
      const existing = document.querySelector(
        'script[src*="unicornStudio"]',
      ) as HTMLScriptElement | null;
      if (!existing) {
        const script = document.createElement("script");
        script.src =
          "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.5/dist/unicornStudio.umd.js";
        script.onload = () => {
          window.UnicornStudio?.init?.();
        };
        (document.head || document.body).appendChild(script);
      } else {
        setTimeout(() => window.UnicornStudio?.init?.(), 100);
      }
    }
  }, []);

  return (
    <div
      ref={ref}
      data-name="unicorn-bg"
      className="absolute min-h-[800px] scale-[1.1] inset-0 z-0 overflow-hidden pointer-events-none"
    >
      <div
        data-us-project={projectId}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
