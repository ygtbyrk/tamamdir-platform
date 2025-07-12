"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Kayit() {
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");
  const [kullaniciAdi, setKullaniciAdi] = useState("");
  const [sifre, setSifre] = useState("");
  const [sifreTekrar, setSifreTekrar] = useState("");
  const [referansKodu, setReferansKodu] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !telefon.trim() || !kullaniciAdi.trim() || !sifre.trim() || !sifreTekrar.trim()) {
      setError("Lütfen tüm zorunlu alanları doldurun.");
      return;
    }

    // Basit telefon numarası kontrolü (sadece rakam ve 10-15 karakter)
    const telefonRegex = /^[0-9]{10,15}$/;
    if (!telefonRegex.test(telefon)) {
      setError("Geçerli bir telefon numarası girin.");
      return;
    }

    if (sifre !== sifreTekrar) {
      setError("Şifreler eşleşmiyor.");
      return;
    }

    if (sifre.length < 6) {
      setError("Şifre en az 6 karakter olmalı.");
      return;
    }

    setError("");
    alert(`Kayıt başarılı! Referans kodu: ${referansKodu || "Yok"}`);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#e7f2ff] to-[#f8fafc] px-6">
      <div className="w-full max-w-md mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#058d92] font-semibold hover:text-[#035e65] transition"
        >
          <ArrowLeft size={20} />
          Ana Sayfa
        </Link>
      </div>

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
          Üye Kayıt
        </h1>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 mb-5 rounded-lg text-center font-semibold">
            {error}
          </div>
        )}

        <label htmlFor="email" className="block mb-4 font-semibold text-[#058d92]">
          E-posta
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="email@ornek.com"
            className="mt-1 w-full border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-4 focus:ring-[#058d92] placeholder-gray-500 text-[#273042] transition"
            autoComplete="email"
          />
        </label>

        <label htmlFor="telefon" className="block mb-4 font-semibold text-[#058d92]">
          Telefon Numarası
          <input
            id="telefon"
            type="tel"
            value={telefon}
            onChange={(e) => setTelefon(e.target.value)}
            required
            placeholder="05XXXXXXXXX"
            className="mt-1 w-full border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-4 focus:ring-[#058d92] placeholder-gray-500 text-[#273042] transition"
            autoComplete="tel"
            maxLength={15}
          />
        </label>

        <label htmlFor="kullaniciAdi" className="block mb-4 font-semibold text-[#058d92]">
          Kullanıcı Adı
          <input
            id="kullaniciAdi"
            type="text"
            value={kullaniciAdi}
            onChange={(e) => setKullaniciAdi(e.target.value)}
            required
            placeholder="Kullanıcı adınız"
            className="mt-1 w-full border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-4 focus:ring-[#058d92] placeholder-gray-500 text-[#273042] transition"
            autoComplete="username"
          />
        </label>

        <label htmlFor="sifre" className="block mb-4 font-semibold text-[#058d92]">
          Şifre
          <input
            id="sifre"
            type="password"
            value={sifre}
            onChange={(e) => setSifre(e.target.value)}
            required
            minLength={6}
            placeholder="En az 6 karakter"
            className="mt-1 w-full border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-4 focus:ring-[#058d92] placeholder-gray-500 text-[#273042] transition"
            autoComplete="new-password"
          />
        </label>

        <label htmlFor="sifreTekrar" className="block mb-4 font-semibold text-[#058d92]">
          Şifre Tekrar
          <input
            id="sifreTekrar"
            type="password"
            value={sifreTekrar}
            onChange={(e) => setSifreTekrar(e.target.value)}
            required
            minLength={6}
            placeholder="Şifrenizi tekrar girin"
            className="mt-1 w-full border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-4 focus:ring-[#058d92] placeholder-gray-500 text-[#273042] transition"
            autoComplete="new-password"
          />
        </label>

        <label htmlFor="referansKodu" className="block mb-8 font-semibold text-[#058d92]">
          Referans Kodunuz (opsiyonel)
          <input
            id="referansKodu"
            type="text"
            value={referansKodu}
            onChange={(e) => setReferansKodu(e.target.value)}
            placeholder="Referans kodunuzu girin"
            className="mt-1 w-full border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-4 focus:ring-[#058d92] placeholder-gray-500 text-[#273042] transition"
          />
        </label>

        <button
          type="submit"
          className="w-full bg-[#058d92] hover:bg-[#035e65] text-white font-extrabold py-4 rounded-3xl transition-shadow shadow-md hover:shadow-lg"
        >
          Kayıt Ol
        </button>

        <p className="mt-6 text-center text-sm text-[#607281]">
          Zaten üye misin?{" "}
          <Link
            href="/giris"
            className="text-[#058d92] font-semibold hover:underline transition"
          >
            Giriş Yap
          </Link>
        </p>
      </form>
    </main>
  );
}
