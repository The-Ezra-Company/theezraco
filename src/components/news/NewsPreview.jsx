import { useEffect, useRef, useState } from "react";

export default function NewsPreview({ title, text }) {
  return (
    <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-gray-600 to-gray-500 shadow-lg backdrop-blur-md">
      {/* Top Half - Image Placeholder */}
      <div className="h-1/2 bg-blue-300 lg:h-2/3" />

      {/* Bottom Half - Text */}
      <div className="flex h-1/2 flex-col p-4 lg:h-1/3">
        {/* Title with right-edge fade */}
        <div className="relative w-full overflow-hidden">
          <h1
            className="text-[32px] font-bold whitespace-nowrap text-white"
            style={{
              maskImage:
                "linear-gradient(to right, black 80%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, black 80%, transparent 100%)",
            }}
          >
            {title}
          </h1>
        </div>

        {/* Body text with bottom fade */}
        <p className="leading-[1.5] relative mt-2 flex-1 overflow-hidden text-sm text-ellipsis text-gray-200">
          {text}
        </p>
      </div>
    </div>
  );
}
