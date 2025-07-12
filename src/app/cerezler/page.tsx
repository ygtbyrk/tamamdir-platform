"use client";

import Link from "next/link";

export default function CerezPolitikasiPage() {
  return (
    <main className="min-h-screen bg-white text-[#212529] px-6 py-12 w-full max-w-none">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/"
          className="text-[#058d92] underline mb-6 inline-block font-semibold"
        >
          &larr; Ana Sayfa
        </Link>
        <h1 className="text-3xl font-bold mb-8 text-[#035e65]">Çerez Politikası</h1>

        <section className="space-y-6 text-base leading-relaxed text-justify">
          <p>
            <b>1. Çerez Nedir?</b><br />
            Çerezler, web sitelerinin ziyaretçilerin cihazlarına gönderdiği ve tarayıcılarında saklanan küçük metin dosyalarıdır. Bu dosyalar, kullanıcı deneyimini geliştirmek, site işlevselliğini sağlamak ve analiz yapmak gibi amaçlarla kullanılır.
          </p>

          <p>
            <b>2. Çerezlerin Kullanım Amaçları</b><br />
            Çerezler aşağıdaki amaçlarla kullanılır:
            <ul className="list-disc list-inside mt-2">
              <li>Site işlevselliğini ve oturum yönetimini sağlamak, kullanıcı giriş bilgilerini hatırlamak.</li>
              <li>Kullanıcı tercihlerini ve dil seçeneklerini kaydetmek.</li>
              <li>Site performansını ve kullanımını analiz ederek geliştirme yapmak.</li>
              <li>Kişiselleştirilmiş reklam ve pazarlama kampanyaları sunmak.</li>
              <li>Hukuki yükümlülüklerin yerine getirilmesi.</li>
            </ul>
          </p>

          <p>
            <b>3. Kullanılan Çerez Türleri</b><br />
            Platformumuzda aşağıdaki türlerde çerezler kullanılabilir:
            <ul className="list-disc list-inside mt-2">
              <li><b>Zorunlu Çerezler:</b> Sitenin temel işlevlerini destekler, kullanıcı onayı olmadan kullanılabilir.</li>
              <li><b>Performans ve Analitik Çerezleri:</b> Site trafiği ve kullanımını ölçer, site deneyimini iyileştirir.</li>
              <li><b>Fonksiyonel Çerezler:</b> Kullanıcı tercihlerini ve kişiselleştirmeleri hatırlar.</li>
              <li><b>Reklam ve Hedefleme Çerezleri:</b> İlgi alanlarına göre reklam sunmak ve pazarlama faaliyetlerini desteklemek için kullanılır.</li>
            </ul>
          </p>

          <p>
            <b>4. Üçüncü Taraf Çerezleri</b><br />
            Platform, Google Analytics, sosyal medya platformları ve reklam ağları gibi üçüncü taraf hizmet sağlayıcıların çerezlerini kullanabilir. Bu üçüncü taraflar, kendi gizlilik politikalarına tabi olup, kullanıcı davranışlarına ilişkin veriler toplayabilir.
          </p>

          <p>
            <b>5. Çerez Yönetimi ve Kontrolü</b><br />
            Kullanıcılar çerezleri tarayıcı ayarlarından yönetebilir, silebilir veya tamamen devre dışı bırakabilir. Ancak çerezlerin devre dışı bırakılması, platformumuzun bazı işlevlerinin çalışmamasına ve kullanıcı deneyiminin azalmasına neden olabilir.
          </p>

          <p>
            <b>6. Çerez Politikası Değişiklikleri</b><br />
            Platform, çerez politikalarında zaman zaman değişiklik yapabilir. Güncellemeler site üzerinde yayımlanır ve kullanıcıların periyodik olarak politikayı incelemesi önerilir.
          </p>

          <p>
            <b>7. İletişim</b><br />
            Çerez politikamız ile ilgili sorularınız veya talepleriniz için <a href="mailto:info@tamamdirapp.com" className="text-[#058d92] underline">info@tamamdirapp.com</a> adresinden bizimle iletişime geçebilirsiniz.
          </p>
        </section>

        <footer className="mt-16 text-xs text-[#607281] text-center pb-6">
          © {new Date().getFullYear()} Tamamdır | Powered by TamamdırApp
        </footer>
      </div>
    </main>
  );
}
