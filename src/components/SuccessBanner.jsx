"use client";

import Image from "next/image";

export default function SuccessBanner() {
  return (
    <div className="w-full flex justify-center">
      <Image
        src="/SuccessBanner.png"
        alt="成功事例バナー"
        width={1200}  // 画像の適切なサイズを指定
        height={300}  // 画像の比率を維持するために指定
        className="w-full h-auto max-w-4xl"
        priority
      />
    </div>
  );
}
