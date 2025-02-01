"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // 初回実行
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full">
      <Image
        src={isMobile ? "/hero-mobile.png" : "/hero-desktop.png"}
        alt="Hero Section"
        width={750} // 画像の元サイズ
        height={800} // 画像の元サイズ
        className="w-full h-auto" // 幅を親要素にフィットさせ、高さは自動調整
        priority
      />
    </div>
  );
}
