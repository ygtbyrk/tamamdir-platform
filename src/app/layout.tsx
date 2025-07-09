import { League_Spartan } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["900"],    // En kalını kullanıyoruz
  variable: "--font-league-spartan"
});

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${leagueSpartan.variable} font-sans antialiased bg-[#f8fafc]`}>
        {children}
      </body>
    </html>
  );
}
