import BeritaCard from "@/components/BeritaCard";
import SectionTitle from "@/components/SectionTitle";
import { beritaList } from "@/data/sekolah";

export const metadata = {
  title: "Berita | SMAN 3 Babelan",
};

export default function BeritaPage() {
  return (
    <main className="px-4 py-8 sm:px-6">
      <SectionTitle title="Berita Sekolah" />
      <p className="mb-6 text-sm text-gray-600">
        Kabar dan kegiatan terbaru dari SMAN 3 Babelan.
      </p>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {beritaList.map((berita) => (
          <BeritaCard key={berita.id} berita={berita} />
        ))}
      </div>
    </main>
  );
}