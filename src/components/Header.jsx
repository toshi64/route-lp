import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        {/* ロゴとキャッチフレーズ */}
        <div className="flex items-center space-x-4">
          <Link href="/" passHref>
            <Image src="/logo.svg" alt="Route" width={200} height={80} className="cursor-pointer" />
          </Link>
          <p className="text-gray-600 text-sm">
            英弱高校生の苦手克服と学習習慣化に特化したオンライン塾
          </p>
        </div>
      </div>
    </header>
  );
}

