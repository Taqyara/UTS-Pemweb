"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/storage";
import { sekolah } from "@/data/sekolah";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (login(form.username, form.password)) {
      router.replace("/admin");
    } else {
      setError("Username atau password salah.");
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4 rounded-lg bg-white p-6 shadow-lg">
        <img src={sekolah.logo} alt={`Logo ${sekolah.nama}`} className="mx-auto h-16 w-auto" />
        <h1 className="text-center text-xl font-bold text-[#0b5a73]">Login Admin</h1>

        <div>
          <label htmlFor="username" className="mb-1 block text-xs font-semibold text-gray-600">Username</label>
          <input
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
            className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#0b5a73] focus:ring-1 focus:ring-[#0b5a73]"
          />
        </div>
        <div>
          <label htmlFor="password" className="mb-1 block text-xs font-semibold text-gray-600">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#0b5a73] focus:ring-1 focus:ring-[#0b5a73]"
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          className="w-full rounded bg-[#0b5a73] py-2 font-semibold text-white transition hover:bg-[#08455a]"
        >
          Masuk
        </button>
        <p className="text-center text-xs text-gray-500">Demo: username admin, password admin123</p>
      </form>
    </main>
  );
}