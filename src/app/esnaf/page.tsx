"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function EsnafGiris() {
  const [email, setEmail] = useState("");
  const [sifre, setSifre] = useState("");
  const [hata, setHata] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHata("");

    if (!email) {
      setHata("E-posta zorunludur");
      return;
    }
    if (!sifre) {
      setHata("Şifre zorunludur");
      return;
    }

    // TODO: Burada backend API çağrısı yapılabilir
    alert(`Esnaf girişi başarılı: ${email}`);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#f8fafc] px-4">
      {/* Logo ve Geri Dön Butonu */}
      <div className="w-full max-w-md mb-10 flex flex-col items-center">
        <img
          src="/tamamdirlogo.png"
          alt="Tamamdır Logo"
          className="w-20 h-20 rounded-xl border mb-4"
        />
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#058d92] font-semibold hover:text-[#035e65] transition"
        >
          <ArrowLeft size={20} />
          Ana Sayfaya Dön
        </Link>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full"
      >
        <h1 className="text-2xl font-bold text-[#035e65] mb-6 text-center">
          Esnaf Girişi
        </h1>

        {hata && (
          <div className="bg-red-100 text-red-700 p-2 mb-4 rounded font-semibold text-center">
            {hata}
          </div>
        )}

        <label htmlFor="email" className="block mb-1 font-semibold text-[#058d92]">
          E-posta
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#058d92] text-[#273042] placeholder:text-[#7a8a99]"
          placeholder="E-posta adresinizi girin"
        />

        <label htmlFor="sifre" className="block mb-1 font-semibold text-[#058d92]">
          Şifre
        </label>
        <input
          id="sifre"
          type="password"
          value={sifre}
          onChange={(e) => setSifre(e.target.value)}
          required
          className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#058d92] text-[#273042] placeholder:text-[#7a8a99]"
          placeholder="Şifrenizi girin"
        />

        <button
          type="submit"
          className="w-full bg-[#058d92] hover:bg-[#035e65] text-white font-bold py-3 rounded-md transition"
        >
          Giriş Yap
        </button>

        <p className="mt-4 text-center text-sm text-[#607281]">
          Hesabınız yok mu?{" "}
          <a
            href="https://forms.gle/fAbC1apUN2yrSAPC6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ffb901] font-semibold hover:underline"
          >
            Kayıt Ol
          </a>
        </p>
      </form>
    </main>
  );
}
