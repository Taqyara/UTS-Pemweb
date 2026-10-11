import Link from "next/link";
import Hero from "@/components/Hero";
import BeritaCard from "@/components/BeritaCard";
import SectionTitle from "@/components/SectionTitle";
import { sekolah, beritaList, galeri } from "@/data/sekolah";

const dataSekolah = [
  ["NPSN", sekolah.npsn],
  ["Kecamatan", sekolah.kecamatan],
  ["Kabupaten", sekolah.kabupaten],
  ["Provinsi", sekolah.provinsi],
  ["Kode Pos", sekolah.kodePos],
  ["Telepon", sekolah.telepon],
];

export default function Home() {
  const beritaTerbaru = beritaList.slice(0, 3);

  return (
    <main>
      <Hero />

      {/* Sambutan kepala sekolah + visi misi */}
      <section className="grid gap-6 px-4 pb-8 pt-14 sm:px-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <SectionTitle title="Sambutan Kepala Sekolah" />
          <div className="flex flex-col gap-4 rounded-lg border border-gray-200 p-4 sm:flex-row">
            <img
              src={sekolah.kepsek.foto}
              alt={sekolah.kepsek.nama}
              className="h-48 w-40 shrink-0 self-center rounded-lg object-cover object-top sm:self-start"
            />
            <div>
              <h3 className="text-lg font-bold text-[#0b5a73]">{sekolah.kepsek.nama}</h3>
              <p className="mb-2 text-sm text-gray-500">Kepala Sekolah</p>
              <p className="text-sm leading-relaxed text-gray-700">{sekolah.sambutan}</p>
              <Link
                href="/about"
                className="mt-3 inline-block rounded bg-[#0b5a73] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#08455a]"
              >
                Tentang Sekolah
              </Link>
            </div>
          </div>
        </div>

        <aside className="rounded-lg bg-[#0b5a73] p-5 text-white">
          <h2 className="text-lg font-bold">Visi</h2>
          <p className="mb-4 italic text-sky-200">“{sekolah.visi}”</p>
          <h2 className="mb-2 text-lg font-bold">Misi</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm">
            {sekolah.misi.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </aside>
      </section>

      {/* Berita terbaru */}
      <section className="px-4 py-8 sm:px-6">
        <SectionTitle title="Berita Terbaru" href="/berita" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {beritaTerbaru.map((berita) => (
            <BeritaCard key={berita.id} berita={berita} />
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/berita"
            className="inline-block rounded-lg bg-[#0b5a73] px-6 py-2 font-semibold text-white transition hover:bg-[#08455a]"
          >
            Lihat Semua Berita
          </Link>
        </div>
      </section>

      {/* Galeri kegiatan */}
      <section className="px-4 py-8 sm:px-6">
        <SectionTitle title="Galeri Kegiatan" />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {galeri.map((foto) => (
            <figure key={foto.judul} className="group overflow-hidden rounded-lg border border-gray-200">
              <img
                src={foto.gambar}
                alt={foto.judul}
                className="h-32 w-full object-cover transition group-hover:scale-105 sm:h-40"
              />
              <figcaption className="p-2 text-xs font-semibold text-gray-700">{foto.judul}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Data sekolah */}
      <section className="bg-gray-50 px-4 py-8 sm:px-6">
        <SectionTitle title="Data Sekolah" />
        <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {dataSekolah.map(([label, nilai]) => (
            <div key={label} className="rounded-lg border border-gray-200 bg-white p-3">
              <dt className="text-xs font-semibold text-gray-500">{label}</dt>
              <dd className="font-bold text-gray-800">{nilai}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-sm text-gray-600">📍 {sekolah.alamat}</p>
      </section>
    </main>
  );
}