"use client";

import { usePathname } from "next/navigation";

// Halaman publik dibungkus Navbar + Footer, sedangkan halaman /admin
// memakai layout dashboard sendiri (tanpa Navbar/Footer sekolah).
export default function SiteShell({ navbar, footer, children }) {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) return children;

  return (
    <div className="mx-auto max-w-[1100px] bg-white shadow-[0_0_20px_rgba(0,0,0,0.15)]">
      {navbar}
      {children}
      {footer}
    </div>
  );
}