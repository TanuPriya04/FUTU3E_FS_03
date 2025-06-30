import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-red-600 text-white px-8 py-4 shadow-lg">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Amul</Link>
        <div className="space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`hover:underline ${
                router.pathname === link.path
                  ? "underline text-yellow-300 font-semibold"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
