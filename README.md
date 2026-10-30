# SakuQ — Hemat & Nabung Seru

SakuQ adalah aplikasi web pengelolaan uang saku yang ditujukan untuk membantu pelajar mengatur pemasukan, pengeluaran, anggaran, dan target tabungan dengan cara yang lebih praktis dan menarik.

## Latar Belakang

Remaja, khususnya pelajar SMA/SMK, sering menghadapi beberapa kesulitan dalam mengelola uang saku, seperti:
- Kurang menyadari arus kas harian sehingga uang saku habis tanpa perencanaan.
- Kesulitan menentukan alokasi uang untuk ditabung.
- Pengeluaran kecil dan pembelian impulsif yang tidak tercatat.
- Kurang tertarik menggunakan pencatat keuangan yang rumit atau membosankan.

SakuQ dikembangkan sebagai alternatif pencatatan keuangan sederhana dengan tampilan yang ramah pelajar dan fitur interaktif.

## Tujuan

1. Membantu pengguna mencatat pemasukan, pengeluaran, serta aktivitas menabung.
2. Membantu pengguna menetapkan target tabungan dan mengatur anggaran.
3. Menyajikan ringkasan aktivitas keuangan agar pengguna lebih mudah memantau kebiasaan belanjanya.
4. Membuat kegiatan mengelola uang saku terasa lebih menarik melalui elemen gamifikasi.

## Fitur Utama

- **Dashboard:** menampilkan ringkasan saldo, tabungan, anggaran, dan aktivitas.
- **Transaksi:** pencatatan pemasukan, pengeluaran, menabung, dan penarikan tabungan.
- **Target tabungan:** membantu pengguna menetapkan dan memantau tujuan menabung.
- **Anggaran:** pengaturan batas pengeluaran harian, mingguan, atau bulanan.
- **Statistik dan riwayat:** melihat catatan serta ringkasan aktivitas keuangan.
- **Mini-game:** permainan Snake dan Brick Breaker sebagai elemen hiburan.
- **Gamifikasi:** streak dan badge untuk mendorong konsistensi pengguna.
- **Tema tampilan:** pilihan tema terang dan gelap.

> Ketersediaan fitur dapat bergantung pada versi aplikasi yang dipublikasikan. Pastikan semua fitur diuji pada versi final sebelum penilaian.

## Teknologi

| Teknologi | Penggunaan |
|---|---|
| HTML5 | Struktur halaman aplikasi |
| CSS3 | Pengaturan tampilan dan tata letak |
| Tailwind CSS | Membantu penyusunan desain responsif |
| Vanilla JavaScript | Logika aplikasi dan interaksi pengguna |
| LocalStorage | Menyimpan data aplikasi pada browser |
| Canvas API | Area gambar dan mekanisme mini-game |
| canvas-confetti | Efek visual perayaan |

Percakapan pengembangan juga membahas penggunaan **Progressive Web App (PWA)**, **Service Worker**, penyimpanan otomatis, kalkulator anggaran dinamis, dan deteksi status koneksi untuk mendukung pengalaman offline. Pastikan implementasi dan perilaku offline benar-benar diuji pada versi final sebelum menyatakan dukungan offline sebagai fitur aktif.

## Akses dan Cara Menjalankan

### Menjalankan secara lokal
1. Unduh atau clone repository.
2. Buka folder proyek.
3. Jalankan file utama HTML melalui browser atau gunakan server lokal jika diperlukan oleh fitur browser.
4. Gunakan aplikasi melalui browser desktop atau perangkat mobile.

### Website publik
- **Link website:** ` [Tambahkan URL website setelah deployment] `
- **Repository GitHub:** ` [Tambahkan URL repository] `

Untuk publikasi, proyek dapat di-deploy melalui GitHub Pages, Vercel, atau Netlify. Jika menggunakan GitHub Pages, aktifkan melalui menu **Settings → Pages** dan pilih branch serta folder publikasi yang sesuai.

## Penyimpanan Data

Data aplikasi yang disimpan melalui LocalStorage berada pada browser dan perangkat yang digunakan. Data tersebut tidak otomatis tersinkronisasi ke perangkat lain. Menghapus data situs atau penyimpanan browser dapat menghilangkan data aplikasi.

## Penggunaan AI

Dalam proses pengembangan, Gemini digunakan sebagai alat bantu untuk:
- Mengembangkan ide dan menentukan kebutuhan aplikasi.
- Membantu menyusun struktur serta menghasilkan sebagian besar kode awal.
- Memberikan saran perbaikan ketika ditemukan masalah.
- Membantu menjelaskan bagian kode dan alternatif implementasi.

Kode yang dihasilkan AI tidak langsung dianggap benar. Pengembang melakukan penyesuaian tampilan, mencoba perubahan, menguji fitur, dan melakukan trial and error. Modifikasi yang dilakukan antara lain penyesuaian warna/tema, desain tombol, kartu, navigasi, serta perbaikan berdasarkan hasil pengujian.

Penggunaan AI dicantumkan secara terbuka. Pemahaman terhadap kode masih dalam proses; tidak semua bagian kode telah dikuasai sepenuhnya. Karena itu, dokumentasi ini tidak mengklaim bahwa seluruh kode ditulis secara mandiri.

## Pengembang

| Nama | Kelas | Konsentrasi |
|---|---|---|
| M. Kheihan Alexandria Putra | XI-5 | KKA |
| Farel Imraldy Hutama | XI-2 | KKA |

**Sekolah:** SMAN 1 Pagak  
**Nama proyek:** SakuQ — Hemat & Nabung Seru

## Catatan

Sebelum pengumpulan, lengkapi tautan repository dan website, lalu lakukan pengujian akhir pada browser desktop dan mobile. Uji pula penyimpanan data setelah halaman dimuat ulang serta perilaku offline jika fitur PWA/Service Worker memang sudah diterapkan.
