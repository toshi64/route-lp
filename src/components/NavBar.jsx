"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // react-icons のアイコン

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Routeとは", path: "/about" },
    { name: "言語教育の方針", path: "/concept" },
    { name: "指導システム", path: "/services" },
    { name: "対象生徒", path: "/students" },
    { name: "指導料金", path: "/pricing" },
    { name: "よくある質問", path: "/faq" },
  ];

  return (
    <nav className="bg-yellow-600 shadow-md relative">
      {/* PC表示（通常メニュー） */}
      <ul className="hidden md:flex justify-center">
        {menuItems.map((item, index) => (
          <li key={index} className="border-r border-white last:border-r-0">
            <Link
              href={item.path}
              className="block px-6 py-3 text-white font-semibold hover:bg-yellow-500 transition"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* スマホ表示（ハンバーガーメニュー） */}
      <div className="md:hidden flex justify-between items-center p-4">
        {/* ハンバーガーボタン */}
        <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* メニューのドロップダウン（スマホ用） */}
      {isOpen && (
        <>
          {/* メニュー背景（クリックで閉じる） */}
          <div
            className="fixed inset-0 bg-black opacity-50 z-10"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* メニュー内容 */}
          <ul className="md:hidden bg-yellow-600 absolute w-full top-16 left-0 shadow-md z-20">
            {menuItems.map((item, index) => (
              <li key={index} className="border-b border-white last:border-b-0">
                <Link
                  href={item.path}
                  className="block px-6 py-4 text-white font-semibold hover:bg-yellow-500 transition"
                  onClick={() => setIsOpen(false)} // メニュークリックで閉じる
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </nav>
  );
}
