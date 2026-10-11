// Semua data sekolah ada di sini supaya mudah diganti.
// Gambar masih memakai URL dari website asli. Sesuai tugas, sebaiknya
// download gambarnya ke folder public/ lalu ganti jadi "/nama-file.jpg".
const IMG = "https://s3-websites-blogs.dcds.my.id/smanegeri3babelan.sch.id";

export const sekolah = {
  nama: "SMAN 3 BABELAN",
  tagline: "Terdepan untuk Masa Depan",
  alamat:
    "Perum Pondok Ungu Permai Sektor V Blok G RT. 006/030, Babelan, Bekasi, Jawa Barat 17610",
  npsn: "69823285",
  kecamatan: "Babelan",
  kabupaten: "Bekasi",
  provinsi: "Jawa Barat",
  kodePos: "17610",
  telepon: "02188383738",
  logo: `${IMG}/2023/05/Logo-Website-SMAN-3-BABELAN-New.png`,
  logoJabar: `${IMG}/2025/02/Logo-Prov-Jawa-Barat-150x150-1.png`,
  banner: `${IMG}/2023/05/Sarpras-Gedung-Bangunan-3-SMAN-3-BABELAN.jpg`,
  kepsek: {
    nama: "Usman, S.Pd., M.Pd.",
    foto: `${IMG}/2023/05/Pak-Usman-S.Pd_.M.Pd_.jpg`,
  },
  // Teks contoh, ganti dengan sambutan asli dari website sekolah.
  sambutan:
    '"...Terdepan Dalam Peningkatan Ilmu Pengetahuan Dan Teknologi Yang Berwawasan Lingkungan, Berwawasan Kebangsaan, Berdasarkan Iman Dan Taqwa..."',
  visi: "Terdepan untuk Masa Depan",
  misi: [
    "Menerapkan kurikulum berbasis kompetensi yang mengacu pada kurikulum nasional dan kearifan lokal.",
    "Menumbuhkan semangat untuk unggul dalam berkompetisi.",
    "Menanamkan 18 nilai karakter bangsa dalam perilaku sehari-hari.",
    "Memberikan layanan pendidikan prima sesuai 8 Standar Nasional Pendidikan.",
  ],
};

export const beritaList = [
  {
    id: "spmb-2026",
    judul: "SPMB SMAN 3 Babelan 2026",
    tanggal: "20 Mei 2026",
    gambar: `${IMG}/2026/05/SPMB-SMAN-3-BABELAN-2026.jpg`,
    ringkasan:
      "Informasi Seleksi Penerimaan Murid Baru (SPMB) SMAN 3 Babelan tahun ajaran 2026.",
  },
  {
    id: "spmb-2025",
    judul: "SPMB SMAN 3 Babelan 2025",
    tanggal: "9 Juni 2025",
    gambar: `${IMG}/2025/06/1.png`,
    ringkasan:
      "Informasi Seleksi Penerimaan Murid Baru (SPMB) SMAN 3 Babelan tahun ajaran 2025.",
  },
  {
    id: "pmr-jumanji-2024",
    judul: "Tim PMR SMAN 3 Babelan Raih Juara Harapan 1 dan 3 di JUMANJI II 2024",
    tanggal: "5 November 2024",
    gambar: `${IMG}/2024/11/IMG-20241104-WA0061.jpg`,
    ringkasan:
      "Tim PMR SMAN 3 Babelan meraih Juara Harapan 1 dan Juara Harapan 3 pada Jumpa Aksi Relawan Muda PMI (JUMANJI) II 2024.",
  },
  {
    id: "pengibar-bendera-kab-bekasi",
    judul: "Siswa SMAN 3 Babelan Terpilih Jadi Petugas Pengibar Bendera Tingkat Kabupaten Bekasi",
    tanggal: "5 November 2024",
    gambar: `${IMG}/2024/11/IMG-20241104-WA0062.jpg`,
    ringkasan:
      "Siswa SMAN 3 Babelan terpilih menjadi petugas pengibar bendera di tingkat Kabupaten Bekasi.",
  },
  {
    id: "liga-1-esports-2024",
    judul: "SMAN 3 Babelan Raih Peringkat 3 Liga 1 Esports Nasional 2024 Group Stage",
    tanggal: "5 November 2024",
    gambar: `${IMG}/2024/11/IMG-20241104-WA0060.jpg`,
    ringkasan:
      "Tim esports SMAN 3 Babelan berhasil meraih peringkat 3 pada Liga 1 Esports Nasional 2024 babak group stage.",
  },
  {
    id: "pencak-silat-panglima-tni-2024",
    judul: "SMAN 3 Babelan Raih Kejuaraan Pencak Silat Piala Panglima TNI Tingkat Nasional 2024",
    tanggal: "30 Oktober 2024", // perkiraan, cek lagi di website asli
    gambar: `${IMG}/2024/10/IMG-20241030-WA0009-scaled.jpg`,
    ringkasan:
      "Siswa-siswi SMAN 3 Babelan meraih kejuaraan pencak silat Piala Panglima TNI tingkat nasional tahun 2024.",
  },
];

export const galeri = [
  { judul: "Visi, Misi dan Tujuan SMAN 3 Babelan", gambar: `${IMG}/2023/05/Visi-dan-Misi-SMAN-3-BABELAN.jpg` },
  { judul: "Peringatan Hari Pendidikan Nasional 2023", gambar: `${IMG}/2023/05/Peringatan-Hari-Pendidikan-Nasional-SMAN-3-BABELAN-Tahun-2023.jpeg` },
  { judul: "Bakti Sosial untuk Bencana Gempa Cianjur", gambar: `${IMG}/2023/05/Bakti-Sosial-SMAN-3-BABELAN-untuk-Bencana-Gempa-Cianjur.jpeg` },
  { judul: "Seminar Kiat Sukses Lolos PTN 2023", gambar: `${IMG}/2023/05/Seminar-Kiat-Sukses-Lolos-PTN-2023-SMAN-3-BABELAN-3-Desember-2022.jpeg` },
];