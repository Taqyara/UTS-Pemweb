import Link from "next/link";
import { notFound } from "next/navigation";
import BeritaCard from "@/components/BeritaCard";
import SectionTitle from "@/components/SectionTitle";
import { beritaList } from "@/data/sekolah";
import { isiBerita } from "@/data/isiBerita";

// Membuat halaman /berita/[id] untuk semua berita saat build
export function generateStaticParams() {
  return beritaList.map((berita) => ({ id: berita.id }));
}

// Di Next.js versi baru, params adalah Promise sehingga harus di-await
export default async function DetailBerita({ params }) {
  const { id } = await params;
  const berita = beritaList.find((b) => b.id === id);

  if (!berita) notFound();

  const isi = isiBerita[id] ?? [berita.ringkasan];
  const beritaLain = beritaList.filter((b) => b.id !== id).slice(0, 3);

  return (
    <main className="px-4 py-8 sm:px-6">
      <article className="mx-auto max-w-3xl">
        <p className="mb-2 text-sm font-semibold text-sky-600">{berita.tanggal}</p>
        <h1 className="mb-4 text-2xl font-bold leading-snug text-[#0b5a73] sm:text-3xl">
          {berita.judul}
        </h1>

        <img
          src={berita.gambar}
          alt={berita.judul}
          className="mb-6 w-full rounded-lg border border-gray-200 object-cover"
        />

        <div className="space-y-4 leading-relaxed text-gray-700">
          {isi.map((paragraf, i) => (
            <p key={i}>{paragraf}</p>
          ))}
        </div>

        <Link
          href="/berita"
          className="mt-8 inline-block rounded-lg bg-[#0b5a73] px-5 py-2 font-semibold text-white transition hover:bg-[#08455a]"
        >
          ← Kembali ke Berita
        </Link>
      </article>

      <section className="mt-12">
        <SectionTitle title="Berita Lainnya" href="/berita" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {beritaLain.map((b) => (
            <BeritaCard key={b.id} berita={b} />
          ))}
        </div>
      </section>
    </main>
  );
}