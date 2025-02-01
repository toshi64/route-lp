import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-yellow-600 shadow-md">
      <ul className="flex justify-center">
        {[
          { name: "Routeとは", path: "/about" },
          { name: "言語教育の方針", path: "/concept" },
          { name: "指導システム", path: "/services" },
          { name: "対象生徒", path: "/students" },
          { name: "指導料金", path: "/pricing" },
          { name: "よくある質問", path: "/faq" },
        ].map((item, index) => (
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
    </nav>
  );
}
