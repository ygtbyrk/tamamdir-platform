import React from "react";

export default function MarketHeader() {
  return (
    <section
      className="max-w-4xl mx-auto rounded-xl p-8 my-10 shadow-lg"
      style={{
        background: "linear-gradient(135deg, #FFF9E5 0%, #FFE6A7 100%)",
        boxShadow: "0 8px 24px rgba(247, 201, 72, 0.3)",
      }}
    >
      <h1
        className="text-4xl font-semibold mb-3"
        style={{ color: "#3A3A3A", fontFamily: "'Poppins', sans-serif" }}
      >
        Ankara’nın En İyi Marketleri
      </h1>
      <p
        className="text-lg font-medium"
        style={{ color: "#7A7A7A", fontFamily: "'Inter', sans-serif" }}
      >
        Mahallenize en yakın, taze ve güvenilir marketler burada.  
        Hızlı teslimat ve kaliteli ürün garantisi.
      </p>
    </section>
  );
}
