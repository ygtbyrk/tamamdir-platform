"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function GirisPage() {
  const [email, setEmail] = useState("");
  const [sifre, setSifre] = useState("");
  const [hata, setHata] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHata("");

    if (!email) {
      setHata("Email zorunludur");
      return;
    }
    if (!sifre) {
      setHata("Şifre zorunludur");
      return;
    }

    // TODO: API çağrısı veya login işlemi
    alert(`Giriş yapıldı: ${email}`);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#e7f2ff] to-[#f8fafc] px-6">
      {/* Geri Dön Butonu */}
      <div className="w-full max-w-md mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#058d92] font-semibold hover:text-[#035e65] transition"
        >
          <ArrowLeft size={20} />
          Ana Sayfa
        </Link>
      </div>

      {/* Logo */}
      <div className="mb-8">
        <img
          src="/tamamdirlogo.png"
          alt="Tamamdır Logo"
          className="mx-auto w-24 h-24 rounded-xl border border-[#058d92]"
        />
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full"
      >
        <h1 className="text-3xl font-extrabold text-[#035e65] mb-8 text-center tracking-wide">
          Üye Girişi
        </h1>

        {hata && (
          <div className="bg-red-100 text-red-700 p-3 mb-5 rounded-lg text-center font-semibold">
            {hata}
          </div>
        )}

        <label htmlFor="email" className="block mb-2 font-semibold text-[#058d92]">
          E-posta
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-6 px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#058d92] text-[#273042] placeholder:text-[#7a8a99] transition"
          placeholder="Email adresinizi girin"
          autoComplete="email"
        />

        <label htmlFor="sifre" className="block mb-2 font-semibold text-[#058d92]">
          Şifre
        </label>
        <input
          id="sifre"
          type="password"
          value={sifre}
          onChange={(e) => setSifre(e.target.value)}
          className="w-full mb-2 px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#058d92] text-[#273042] placeholder:text-[#7a8a99] transition"
          placeholder="Şifrenizi girin"
          autoComplete="current-password"
        />

        {/* Şifremi Unuttum Linki */}
        <div className="text-right mb-8 mt-1">
          <Link
            href="/sifremi-unuttum"
            className="text-sm text-[#058d92] hover:underline font-semibold transition"
          >
            Şifremi Unuttum?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full bg-[#058d92] hover:bg-[#035e65] text-white font-extrabold py-4 rounded-3xl transition-shadow shadow-md hover:shadow-lg"
        >
          Giriş Yap
        </button>

        <p className="mt-6 text-center text-sm text-[#607281]">
          Üye değil misiniz?{" "}
          <Link
            href="/kayit"
            className="text-[#ffb901] hover:underline font-semibold transition"
          >
            Kayıt Ol
          </Link>
        </p>
      </form>
    </main>
  );
}
