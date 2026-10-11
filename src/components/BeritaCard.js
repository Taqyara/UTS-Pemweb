import Link from "next/link";

export default function BeritaCard({ berita }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:shadow-lg">
      <img src={berita.gambar} alt={berita.judul} className="h-44 w-full object-cover" />
      <div className="flex flex-1 flex-col p-4">
        <p className="mb-1 text-xs font-semibold text-sky-600">{berita.tanggal}</p>
        <h3 className="mb-2 line-clamp-3 font-bold text-gray-800">{berita.judul}</h3>
        <p className="mb-4 line-clamp-3 flex-1 text-sm text-gray-600">{berita.ringkasan}</p>
        <Link
          href={`/berita/${berita.id}`}
          className="self-start rounded bg-[#0b5a73] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#08455a]"
        >
          Baca Selengkapnya
        </Link>
      </div>
    </article>
  );
}