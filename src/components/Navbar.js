"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Jam from "@/components/Jam";
import { sekolah } from "@/data/sekolah";

const menu = [
  { label: "Beranda", href: "/" },
  { label: "Visi, Misi & Tujuan", href: "/about" },
  { label: "Berita", href: "/berita" },
];

const sosmed = [
  { label: "X", bg: "bg-sky-400", href: "https://twitter.com/sman3babelan_" },
  { label: "IG", bg: "bg-pink-500", href: "https://www.instagram.com/sman3babelan.id/" },
  { label: "YT", bg: "bg-red-600", href: "https://www.youtube.com/@sman3babelan" },
  { label: "@", bg: "bg-lime-500", href: "https://smanegeri3babelan.sch.id" },
  { label: "RSS", bg: "bg-orange-500", href: "https://smanegeri3babelan.sch.id/feed/" },
];

export default function Navbar() {
  const pathname = usePathname();
  const aktif = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header>
      {/* Menu */}
      <nav className="flex flex-wrap items-center justify-between gap-2 border-t-[6px] border-[#0b5a73] bg-white pr-3">
        <ul className="flex flex-wrap items-center text-xs font-bold uppercase sm:text-sm">
          {menu.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block px-4 py-3 transition ${
                  aktif(item.href)
                    ? "rounded-r-full bg-[#0b5a73] text-white"
                    : "text-gray-700 hover:text-[#0b5a73]"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden items-center bg-[#0b5a73] text-white sm:flex">
          <input
            type="text"
            placeholder="KETIK SESUATU.."
            className="w-44 bg-transparent px-3 py-2 text-xs placeholder-white/80 outline-none"
          />
          <span className="px-3">🔍</span>
        </div>
      </nav>

      {/* Logo + sosial media */}
      <div className="flex flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <Link href="/">
          <img src={sekolah.logo} alt={`Logo ${sekolah.nama}`} className="h-20 w-auto sm:h-24" />
        </Link>
        <div className="flex gap-2">
          {sosmed.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className={`flex h-11 w-11 items-center justify-center rounded-full text-xs font-bold text-white transition hover:opacity-80 ${s.bg}`}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* Sekilas info */}
      <div className="flex flex-wrap items-center justify-between gap-x-4 bg-[#0b5a73] px-3 py-2 text-xs font-semibold text-white sm:text-sm">
        <span className="font-bold uppercase">Sekilas Info ›</span>
        <span className="hidden md:block">
          <span className="text-sky-300">3 tahun yang lalu</span> / Selamat Datang di Website Resmi {sekolah.nama}
        </span>
        <Jam mode="tanggal" className="font-bold uppercase" />
      </div>
    </header>
  );
}