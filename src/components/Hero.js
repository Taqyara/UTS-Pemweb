import Jam from "@/components/Jam";
import { sekolah } from "@/data/sekolah";

export default function Hero() {
  return (
    <section className="relative">
      <img
        src={sekolah.banner}
        alt={`Gedung ${sekolah.nama}`}
        className="block h-64 w-full object-cover sm:h-80 md:h-[390px]"
      />

      {/* Bar gelap di bawah banner: foto kepala sekolah, nama, alamat, jam */}
      <div className="absolute inset-x-0 bottom-0 flex items-end gap-4 bg-black/70 px-4 py-3 text-white sm:px-6">
        <img
          src={sekolah.kepsek.foto}
          alt={sekolah.kepsek.nama}
          className="-mb-8 h-28 w-24 shrink-0 border-4 border-white bg-red-600 object-cover object-top sm:h-36 sm:w-32"
        />
        <div className="flex-1 pb-1">
          <h1 className="text-xl font-bold tracking-wide sm:text-3xl">{sekolah.nama}</h1>
          <p className="text-xs text-gray-200 sm:text-sm">📍 {sekolah.alamat}</p>
          <p className="mt-1 text-sm italic text-sky-300">{sekolah.tagline}</p>
        </div>
        <div className="hidden border-2 border-white px-4 py-2 text-3xl font-bold md:block">
          <Jam mode="waktu" />
        </div>
      </div>
    </section>
  );
}