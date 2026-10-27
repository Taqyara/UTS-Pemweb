// Satu konfigurasi untuk 4 halaman admin. Mau tambah kolom? Cukup tambah di "fields".
// judul = kolom yang jadi judul di daftar, sub = kolom yang jadi keterangan kecil.
export const adminConfig = {
  berita: {
    label: "Berita",
    judul: "judul",
    sub: "tanggal",
    fields: [
      { name: "judul", label: "Judul", type: "text" },
      { name: "tanggal", label: "Tanggal", type: "date" },
      { name: "gambar", label: "URL / path gambar", type: "text", opsional: true, placeholder: "/berita1.jpg atau https://..." },
      { name: "ringkasan", label: "Ringkasan", type: "textarea" },
      { name: "isi", label: "Isi berita", type: "textarea", rows: 5 },
    ],
  },
  prestasi: {
    label: "Prestasi",
    judul: "judul",
    sub: "tingkat",
    fields: [
      { name: "judul", label: "Nama prestasi", type: "text" },
      { name: "tingkat", label: "Tingkat", type: "select", options: ["Sekolah", "Kecamatan", "Kabupaten", "Provinsi", "Nasional"] },
      { name: "tahun", label: "Tahun", type: "number" },
      { name: "gambar", label: "URL / path gambar", type: "text", opsional: true, placeholder: "/prestasi1.jpg atau https://..." },
      { name: "deskripsi", label: "Deskripsi", type: "textarea" },
    ],
  },
  guru: {
    label: "Guru",
    judul: "nama",
    sub: "mapel",
    fields: [
      { name: "nama", label: "Nama guru", type: "text" },
      { name: "mapel", label: "Mata pelajaran", type: "text" },
      { name: "nip", label: "NIP", type: "text", opsional: true },
      { name: "foto", label: "URL / path foto", type: "text", opsional: true, placeholder: "/guru1.jpg atau https://..." },
    ],
  },
  ekstrakurikuler: {
    label: "Ekstrakurikuler",
    judul: "nama",
    sub: "jadwal",
    fields: [
      { name: "nama", label: "Nama ekstrakurikuler", type: "text" },
      { name: "pembina", label: "Pembina", type: "text" },
      { name: "jadwal", label: "Jadwal", type: "text", placeholder: "Contoh: Jumat, 14.00 WIB" },
      { name: "gambar", label: "URL / path gambar", type: "text", opsional: true, placeholder: "/ekskul1.jpg atau https://..." },
      { name: "deskripsi", label: "Deskripsi", type: "textarea" },
    ],
  },
};