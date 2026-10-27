"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { adminConfig } from "@/data/adminConfig";
import { sekolah } from "@/data/sekolah";
import { isLoggedIn, logout } from "@/lib/storage";

const menu = [
  { label: "Dashboard", href: "/admin" },
  ...Object.entries(adminConfig).map(([jenis, c]) => ({
    label: c.label,
    href: `/admin/${jenis}`,
  })),
];

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [siap, setSiap] = useState(false);
  const halamanLogin = pathname === "/admin/login";

  // Penjaga: belum login -> ke /admin/login, sudah login -> jangan tampilkan form login
  useEffect(() => {
    const sudahLogin = isLoggedIn();
    if (!sudahLogin && !halamanLogin) {
      setSiap(false);
      router.replace("/admin/login");
    } else if (sudahLogin && halamanLogin) {
      setSiap(false);
      router.replace("/admin");
    } else {
      setSiap(true);
    }
  }, [pathname, halamanLogin, router]);

  function handleKeluar() {
    logout();
    router.replace("/admin/login");
  }

  if (!siap) {
    return <div className="min-h-screen bg-gray-100 p-8 text-sm text-gray-500">Memuat...</div>;
  }

  // Halaman login tampil sendiri tanpa sidebar
  if (halamanLogin) return children;

  return (
    <div className="flex min-h-screen flex-col bg-gray-100 md:flex-row">
      <aside className="bg-[#0b5a73] text-white md:w-60 md:shrink-0">
        <div className="px-5 py-4">
          <p className="text-xs uppercase tracking-wide text-sky-200">Panel Admin</p>
          <p className="text-lg font-bold">{sekolah.nama}</p>
        </div>
        <nav className="flex gap-1 overflow-x-auto px-3 pb-3 md:flex-col md:pb-0">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap rounded px-3 py-2 text-sm font-semibold transition ${
                pathname === item.href ? "bg-white text-[#0b5a73]" : "hover:bg-white/20"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="flex items-center justify-between bg-white px-4 py-3 shadow sm:px-6">
          <h1 className="font-bold text-[#0b5a73]">Dashboard Admin</h1>
          <div className="flex gap-2">
            <Link
              href="/"
              className="rounded border border-gray-300 px-3 py-1 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
            >
              Lihat Website
            </Link>
            <button
              onClick={handleKeluar}
              className="rounded bg-red-600 px-3 py-1 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Keluar
            </button>
          </div>
        </header>
        <main className="flex-1 p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}