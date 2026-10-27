"use client";

import { useEffect, useState } from "react";
import { adminConfig } from "@/data/adminConfig";
import { getData, saveData } from "@/lib/storage";

const buatKosong = (config) =>
  Object.fromEntries(config.fields.map((f) => [f.name, ""]));

const inputClass =
  "w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#0b5a73] focus:ring-1 focus:ring-[#0b5a73]";

export default function AdminCrud({ jenis }) {
  const config = adminConfig[jenis];
  const [daftar, setDaftar] = useState([]);
  const [form, setForm] = useState(() => buatKosong(config));
  const [pesan, setPesan] = useState("");

  useEffect(() => {
    setDaftar(getData(jenis));
  }, [jenis]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const baru = [{ id: Date.now().toString(), ...form }, ...daftar];
    saveData(jenis, baru);
    setDaftar(baru);
    setForm(buatKosong(config));
    setPesan(`${config.label} berhasil ditambahkan.`);
  }

  function handleHapus(id) {
    if (!confirm("Hapus data ini?")) return;
    const sisa = daftar.filter((item) => item.id !== id);
    saveData(jenis, sisa);
    setDaftar(sisa);
    setPesan("");
  }

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold text-[#0b5a73]">Kelola {config.label}</h2>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Form tambah */}
        <form onSubmit={handleSubmit} className="space-y-3 rounded-lg bg-white p-4 shadow lg:col-span-1">
          <h3 className="font-bold text-gray-800">Tambah {config.label}</h3>

          {config.fields.map((f) => (
            <div key={f.name}>
              <label htmlFor={f.name} className="mb-1 block text-xs font-semibold text-gray-600">
                {f.label}
              </label>
              {f.type === "textarea" ? (
                <textarea
                  id={f.name}
                  name={f.name}
                  rows={f.rows ?? 3}
                  value={form[f.name]}
                  onChange={handleChange}
                  required={!f.opsional}
                  className={inputClass}
                />
              ) : f.type === "select" ? (
                <select
                  id={f.name}
                  name={f.name}
                  value={form[f.name]}
                  onChange={handleChange}
                  required={!f.opsional}
                  className={inputClass}
                >
                  <option value="">Pilih...</option>
                  {f.options.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              ) : (
                <input
                  id={f.name}
                  name={f.name}
                  type={f.type}
                  placeholder={f.placeholder}
                  value={form[f.name]}
                  onChange={handleChange}
                  required={!f.opsional}
                  className={inputClass}
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full rounded bg-[#0b5a73] py-2 text-sm font-semibold text-white transition hover:bg-[#08455a]"
          >
            Simpan
          </button>
          {pesan && <p className="text-sm text-green-600">{pesan}</p>}
        </form>

        {/* Daftar data */}
        <section className="lg:col-span-2">
          <h3 className="mb-3 font-bold text-gray-800">
            Daftar {config.label} ({daftar.length})
          </h3>

          {daftar.length === 0 ? (
            <p className="rounded-lg bg-white p-6 text-center text-sm text-gray-500 shadow">
              Belum ada data. Tambahkan lewat form di samping.
            </p>
          ) : (
            <ul className="space-y-3">
              {daftar.map((item) => (
                <li key={item.id} className="flex items-center gap-3 rounded-lg bg-white p-3 shadow">
                  {(item.gambar || item.foto) && (
                    <img
                      src={item.gambar || item.foto}
                      alt={item[config.judul]}
                      onError={(e) => (e.currentTarget.style.display = "none")}
                      className="h-14 w-14 shrink-0 rounded object-cover"
                    />
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold text-gray-800">{item[config.judul]}</p>
                    <p className="truncate text-xs text-gray-500">{item[config.sub]}</p>
                  </div>
                  <button
                    onClick={() => handleHapus(item.id)}
                    className="rounded border border-red-300 px-3 py-1 text-xs font-semibold text-red-600 transition hover:bg-red-50"
                  >
                    Hapus
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}