import { sekolah } from "@/data/sekolah";

export default function Footer() {
  return (
    <footer className="bg-[#0b5a73] text-white">
      <div className="grid gap-6 px-6 py-8 md:grid-cols-2">
        <div>
          <h3 className="mb-2 text-lg font-bold">{sekolah.nama}</h3>
          <p className="text-sm">{sekolah.alamat}</p>
          <p className="mt-1 text-sm">Telepon {sekolah.telepon} | NPSN {sekolah.npsn}</p>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-bold">Didukung Oleh</h3>
          <div className="flex items-center gap-3">
            <img src={sekolah.logoJabar} alt="Logo Provinsi Jawa Barat" className="h-14 w-14" />
            <p className="text-sm">
              Cabang Dinas Pendidikan Wil. III
              <br />
              Dinas Pendidikan Provinsi Jawa Barat
            </p>
          </div>
        </div>
      </div>
      <p className="bg-black/20 py-3 text-center text-xs">© 2026 {sekolah.nama}</p>
    </footer>
  );
}