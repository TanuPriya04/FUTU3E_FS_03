import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-red-600 text-white py-6 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">© {new Date().getFullYear()} Amul. All rights reserved.</p>

        <div className="space-x-4 mb-4 md:mb-0">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/products" className="hover:underline">Products</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>

        <div className="space-x-4 text-lg">
  <a href="https://www.facebook.com/amul.coop" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
    <FaFacebook />
  </a>
  <a href="https://www.instagram.com/amul_india" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
    <FaInstagram />
  </a>
  <a href="https://twitter.com/Amul_Coop" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
    <FaTwitter />
  </a>
</div>

      </div>
    </footer>
  );
}
