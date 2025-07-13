"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {
  Menu,
  X,
  User,
  LogIn as LogInIcon,
  PlusSquare as PlusSquareIcon,
} from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Dışarı tıklanınca menüyü kapat
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !(menuRef.current as any).contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="w-full flex justify-between items-center px-6 md:px-8 py-5 bg-white shadow-sm sticky top-0 z-30 relative">
      <Link href="/" className="flex items-center gap-3">
        <img src="/tamamdirlogo.png" alt="Tamamdır" className="w-14 h-14 rounded-xl border" />
        <span
          className="font-league font-light lowercase text-3xl md:text-4xl tracking-tight"
          style={{ color: "#008080", letterSpacing: "-0.03em", lineHeight: 1 }}
        >
          tamamdır
        </span>
      </Link>

      {/* WhatsApp Butonu (Mobil) */}
      <div className="md:hidden flex items-center ml-3">
        <a
          href="https://wa.me/905451164506?text=WhatsApp%20Üzerinden%20Devam%20Etmek%20İstiyorum!"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center px-3 py-[6px] rounded-xl shadow-md text-[11px] font-league font-extrabold bg-gradient-to-r from-[#005555] via-[#007a7a] to-[#00b3b3] hover:scale-105 transition-all duration-300"
          style={{ minWidth: "80px", maxWidth: "95px", lineHeight: "1.1" }}
        >
          <img
            src="/icons/whatsapp.png"
            alt="WhatsApp"
            className="w-4 h-4 mb-[2px] drop-shadow-[0_0_4px_rgba(255,255,255,0.4)]"
          />
          <span className="text-white leading-tight text-center">
            WhatsApp İle<br />
            <span className="text-[#ffb901]">Devam Et</span>
          </span>
        </a>
      </div>

      {/* Hamburger */}
      <button className="md:hidden text-[#008080]" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Masaüstü Menü */}
      <div className="hidden md:flex gap-3 items-center font-semibold text-sm">
        <a
          href="https://wa.me/905451164506?text=WhatsApp%20Üzerinden%20Devam%20Etmek%20İstiyorum!"
          target="_blank"
          className="bg-gradient-to-r from-[#005555] via-[#007a7a] to-[#00b3b3] text-white text-sm font-spartan font-bold px-5 py-3 rounded-xl shadow hover:opacity-90 transition-all flex flex-col items-center justify-center"
        >
          <img
            src="/icons/whatsapp.png"
            alt="WhatsApp"
            className="w-5 h-5 mb-1 drop-shadow-[0_0_5px_rgba(255,255,255,0.4)]"
          />
          <span className="leading-tight text-white">
            WhatsApp İle<br />
            <span className="text-[#ffb901]">Devam Et</span>
          </span>
        </a>

        <Link href="/giris" className="flex items-center gap-2 text-[#058d92] hover:bg-[#058d92] hover:text-white px-4 py-2 rounded-full">
          <LogInIcon size={18} /> Giriş
        </Link>
        <Link href="/kayit" className="flex items-center gap-2 text-[#ffb901] hover:bg-[#ffb901] hover:text-white px-4 py-2 rounded-full">
          <PlusSquareIcon size={18} /> Kayıt
        </Link>
        <Link href="/esnaf" className="flex items-center gap-2 text-[#303036] hover:bg-[#303036] hover:text-white px-4 py-2 rounded-full">
          <User size={18} /> Esnaf
        </Link>
      </div>

      {/* Mobil Menü */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="absolute top-full left-0 w-full bg-white shadow-md px-6 py-4 flex flex-col gap-3 text-sm font-medium md:hidden z-40"
        >
          <Link href="/giris" className="flex items-center gap-2 text-[#058d92] hover:text-white hover:bg-[#058d92] px-4 py-2 rounded-lg">
            <LogInIcon size={18} /> Giriş
          </Link>
          <Link href="/kayit" className="flex items-center gap-2 text-[#ffb901] hover:text-white hover:bg-[#ffb901] px-4 py-2 rounded-lg">
            <PlusSquareIcon size={18} /> Kayıt
          </Link>
          <Link href="/esnaf" className="flex items-center gap-2 text-[#303036] hover:text-white hover:bg-[#303036] px-4 py-2 rounded-lg">
            <User size={18} /> Esnaf
          </Link>
        </div>
      )}
    </nav>
  );
}
