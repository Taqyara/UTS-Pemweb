"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { adminConfig } from "@/data/adminConfig";
import { getData } from "@/lib/storage";

export default function AdminDashboard() {
  const [jumlah, setJumlah] = useState({});

  useEffect(() => {
    setJumlah(
      Object.fromEntries(Object.keys(adminConfig).map((j) => [j, getData(j).length]))
    );
  }, []);

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold text-[#0b5a73]">Ringkasan</h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Object.entries(adminConfig).map(([jenis, c]) => (
          <div key={jenis} className="rounded-lg bg-white p-4 shadow">
            <p className="text-sm font-semibold text-gray-500">{c.label}</p>
            <p className="my-1 text-3xl font-bold text-[#0b5a73]">{jumlah[jenis] ?? 0}</p>
            <Link href={`/admin/${jenis}`} className="text-sm font-semibold text-sky-600 hover:underline">
              Kelola →
            </Link>
          </div>
        ))}
      </div>

      <p className="mt-6 rounded-lg bg-yellow-50 p-4 text-sm text-yellow-800">
        Data disimpan di localStorage browser ini, jadi hanya terlihat di browser dan perangkat yang sama.
      </p>
    </div>
  );
}