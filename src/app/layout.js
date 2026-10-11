import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SMAN 3 Babelan",
  description: "Website profil SMAN 3 Babelan - Terdepan untuk Masa Depan",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="bg-gray-200 text-gray-800">
        <div className="mx-auto max-w-[1100px] bg-white shadow-[0_0_20px_rgba(0,0,0,0.15)]">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
