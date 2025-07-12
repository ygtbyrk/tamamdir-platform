"use client";

import Link from "next/link";

export default function KvkkPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-6 py-12 text-[#232832] w-full">
      <div className="max-w-4xl mx-auto">
        {/* Geri dön butonu */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-block text-[#058d92] font-semibold hover:underline"
          >
            &larr; Ana Sayfa
          </Link>
        </div>

        <h1 className="text-4xl font-extrabold mb-10 text-[#035e65]">
          Kişisel Verilerin Korunması Kanunu (KVKK) Aydınlatma Metni
        </h1>

        <section className="space-y-6 text-sm leading-relaxed">
          <article>
            <h2 className="font-bold text-[#035e65] text-xl mb-2">1. Veri Sorumlusu</h2>
            <p>
              Bu aydınlatma metni, Tamamdır Teknoloji A.Ş. (“Platform”) tarafından kişisel verilerinizin işlenme amaçları, yöntemleri ve haklarınız hakkında bilgi vermek amacıyla hazırlanmıştır.
            </p>
          </article>

          <article>
            <h2 className="font-bold text-[#035e65] text-xl mb-2">2. İşlenen Kişisel Veriler</h2>
            <p>
              Platformumuzda; adınız, soyadınız, iletişim bilgileriniz (e-posta, telefon), konum bilgileriniz, sipariş bilgileriniz ve hizmet kullanımınıza ilişkin diğer veriler işlenmektedir.
            </p>
          </article>

          <article>
            <h2 className="font-bold text-[#035e65] text-xl mb-2">3. Kişisel Verilerin İşlenme Amaçları</h2>
            <p>
              Kişisel verileriniz, hizmetlerin sunulması, sipariş ve ödeme süreçlerinin yönetilmesi, müşteri destek hizmetlerinin sağlanması, yasal yükümlülüklerin yerine getirilmesi ve platformun iyileştirilmesi amaçlarıyla işlenmektedir.
            </p>
          </article>

          <article>
            <h2 className="font-bold text-[#035e65] text-xl mb-2">4. Kişisel Verilerin Aktarılması</h2>
            <p>
              Kişisel verileriniz, hizmetlerin yerine getirilmesi için iş ortaklarımız, ödeme sağlayıcıları ve yasal zorunluluk halinde ilgili resmi kurumlarla paylaşılabilir.
            </p>
          </article>

          <article>
            <h2 className="font-bold text-[#035e65] text-xl mb-2">5. Kişisel Veri Sahibinin Hakları</h2>
            <p>
              KVKK kapsamında; kişisel verilerinize erişim, düzeltme, silme, işlenmesini kısıtlama, veri taşınabilirliği, itiraz etme ve otomatik karar süreçlerine itiraz hakkınız bulunmaktadır. Bu haklarınızı Platformumuza başvurarak kullanabilirsiniz.
            </p>
          </article>

          <article>
            <h2 className="font-bold text-[#035e65] text-xl mb-2">6. Başvuru Yöntemleri</h2>
            <p>
              Hak taleplerinizi yazılı olarak info@tamamdirapp.com adresine e-posta göndererek ya da Platformumuz üzerinden başvuru yaparak gerçekleştirebilirsiniz.
            </p>
          </article>

          <article>
            <h2 className="font-bold text-[#035e65] text-xl mb-2">7. Veri Güvenliği</h2>
            <p>
              Kişisel verilerinizin korunması için gerekli teknik ve idari tedbirler alınmaktadır. Verileriniz güvenli altyapımızda saklanmaktadır.
            </p>
          </article>

          <article>
            <h2 className="font-bold text-[#035e65] text-xl mb-2">8. Veri Saklama Süresi</h2>
            <p>
              Kişisel verileriniz, hizmetlerin sunulması ve yasal yükümlülüklerin yerine getirilmesi için gerekli olduğu sürece saklanmaktadır.
            </p>
          </article>

          <article>
            <h2 className="font-bold text-[#035e65] text-xl mb-2">9. İletişim</h2>
            <p>
              Her türlü veri koruma ile ilgili soru ve talepleriniz için info@tamamdirapp.com adresinden bize ulaşabilirsiniz.
            </p>
          </article>
        </section>

        <footer className="mt-12 text-xs text-[#607281] text-center pb-6">
          © {new Date().getFullYear()} Tamamdır | Powered by TamamdırApp
        </footer>
      </div>
    </main>
  );
}
