"use client";

import { useEffect, useState } from "react";

const pad = (n) => String(n).padStart(2, "0");

// mode="waktu"   -> 16:27 58 (detik berwarna biru)
// mode="tanggal" -> Senin, 05-10-2026
export default function Jam({ mode = "waktu", className = "" }) {
  const [now, setNow] = useState(null);

  useEffect(() => {
    setNow(new Date());
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Sebelum client siap, tampilkan placeholder agar tidak hydration error
  if (!now) {
    return <span className={className}>{mode === "waktu" ? "--:-- --" : ""}</span>;
  }

  if (mode === "tanggal") {
    const hari = now.toLocaleDateString("id-ID", { weekday: "long" });
    const tgl = `${pad(now.getDate())}-${pad(now.getMonth() + 1)}-${now.getFullYear()}`;
    return <span className={className}>{hari}, {tgl}</span>;
  }

  return (
    <span className={className}>
      {pad(now.getHours())}:{pad(now.getMinutes())}{" "}
      <span className="text-sky-400">{pad(now.getSeconds())}</span>
    </span>
  );
}