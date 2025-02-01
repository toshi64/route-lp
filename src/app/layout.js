import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";  
import NavBar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Route LP",
  description: "教育サービスのランディングページ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja"> {/* 言語を日本語に変更 */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header /> {/* ここでヘッダーを適用 */}
        <NavBar /> {/* ここにメニューバーを追加 */}
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
