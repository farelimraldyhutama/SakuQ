# AI_LOGBOOK — SakuQ

Dokumen ini mencatat penggunaan AI selama proses pengembangan SakuQ. AI digunakan sebagai alat bantu ideasi, penyusunan kode awal, pemecahan masalah, dan pembelajaran. Hasil dari AI tetap perlu diperiksa, disesuaikan, dan diuji oleh pengembang.

## Identitas Proyek

- **Nama proyek:** SakuQ — Hemat & Nabung Seru
- **Tujuan:** membantu pelajar mengelola uang saku dan membangun kebiasaan menabung.
- **AI yang digunakan:** Gemini
- **Pengembang:**
  - M. Kheihan Alexandria Putra — XI-5, KKA
  - Farel Imraldy Hutama — XI-2, KKA
- **Sekolah:** SMAN 1 Pagak

---

## Tahap 1 — Ideasi dan Perancangan

### Tujuan tahap
Menentukan masalah yang ingin diselesaikan, sasaran pengguna, dan gagasan fitur aplikasi.

### Peran AI
Gemini diminta berperan sebagai ahli pemrograman web dan memberikan ide untuk mengatasi kesulitan remaja dalam mengatur keuangan serta menabung uang saku.

Dari diskusi tersebut, masalah yang diangkat meliputi:
- Kurangnya kesadaran terhadap arus kas harian.
- Kesulitan mengalokasikan uang untuk tabungan.
- Pengeluaran kecil atau impulsif yang membuat uang saku cepat habis.
- Aplikasi pencatat keuangan yang terasa rumit atau membosankan.

Diskusi kemudian diarahkan pada aplikasi yang dapat digunakan melalui mobile maupun desktop, memiliki interaksi ringan, dan mendukung penggunaan offline.

### Validasi & Modifikasi Mandiri
Ide dari AI dipakai sebagai bahan perancangan, bukan diterima tanpa pertimbangan. Fitur dipilih dan disesuaikan dengan tujuan proyek, yaitu pencatatan transaksi, target tabungan, anggaran, ringkasan keuangan, dan elemen interaktif.

---

## Tahap 2 — Penyusunan Kode Awal

### Tujuan tahap
Membangun kerangka aplikasi dan menerapkan fitur utama.

### Peran AI
Gemini membantu menyusun aplikasi web menggunakan HTML, CSS, dan Vanilla JavaScript. Dalam percakapan pengembangan, Gemini juga mengusulkan Tailwind CSS untuk membantu desain responsif.

Teknologi dan pendekatan yang dibahas meliputi:
- HTML untuk struktur halaman.
- CSS/Tailwind CSS untuk tampilan dan responsivitas.
- Vanilla JavaScript untuk logika dan interaksi.
- LocalStorage untuk menyimpan data pada browser.
- PWA dan Service Worker untuk kemampuan offline.
- Kalkulator anggaran dinamis dan penyimpanan otomatis.
- Streak, badge, dan deteksi status koneksi.

Pada pengembangan aplikasi juga terdapat fitur mini-game yang menggunakan Canvas API serta efek visual dengan library canvas-confetti.

### Validasi & Modifikasi Mandiri
Sebagian besar kode awal dibuat dengan bantuan Gemini. Pengembang tidak mengklaim menulis seluruh kode dari awal. Kode kemudian dicoba, diperiksa melalui penggunaan aplikasi, dan disesuaikan berdasarkan hasil percobaan. Penyesuaian yang dilakukan mencakup warna/tema serta desain tombol, kartu, dan navigasi.

---

## Tahap 3 — Debugging dan Pengujian

### Tujuan tahap
Menemukan masalah, mencoba solusi, dan memastikan fitur bekerja sesuai kebutuhan.

### Peran AI
Gemini digunakan untuk membantu menganalisis masalah dan memberikan saran perbaikan. Dalam percakapan pengembangan, topik debugging yang dibahas mencakup:
- Perhitungan saldo agar transaksi tidak terhitung ganda.
- Hubungan antara target tabungan dan saldo.
- Tampilan serta koordinat area Canvas.
- Masalah batas area permainan pada mini-game.
- Perilaku game ketika pengguna berpindah tab.
- Validasi atau sanitasi masukan pengguna.

Topik tersebut dicatat sebagai bagian dari proses diskusi dan bantuan debugging AI; pencantumannya tidak berarti setiap solusi diterapkan persis seperti saran AI.

### Validasi & Modifikasi Mandiri
Pengembang melakukan banyak percobaan dan trial and error serta menguji fitur-fitur aplikasi. Perbaikan dicoba berdasarkan masalah yang muncul ketika aplikasi digunakan. Pengembang memahami sebagian besar alur aplikasi, tetapi masih ada bagian kode yang belum sepenuhnya dipahami.

Pengujian akhir sebaiknya mencakup:
- Pencatatan setiap jenis transaksi.
- Perubahan saldo dan ringkasan dashboard.
- Pembuatan serta pembaruan target tabungan.
- Pengaturan dan pemantauan anggaran.
- Riwayat dan statistik.
- Mini-game serta kontrolnya.
- Tampilan pada layar mobile dan desktop.
- Penyimpanan setelah halaman dimuat ulang.
- Mode offline/PWA, jika fitur tersebut benar-benar telah diterapkan.

---

## Tahap 4 — Refleksi dan Pemahaman Kode

### Hal yang dipelajari
Proses ini memberikan pengalaman dalam memahami alur pembuatan aplikasi web, menghubungkan tampilan dengan logika JavaScript, menyimpan data di browser, serta melakukan pengujian dan perbaikan secara bertahap.

AI membantu mempercepat proses pencarian ide dan penyelesaian masalah, tetapi hasilnya tetap perlu diperiksa. Pengembang juga belajar bahwa kode yang terlihat berjalan belum tentu bebas dari kesalahan pada semua kondisi.

### Batasan pemahaman
Sebagian besar kode awal diperoleh dengan bantuan Gemini. Pengembang telah mencoba dan menguji fitur serta memahami sebagian besar bagian aplikasi, tetapi belum menguasai seluruh detail kode secara mandiri. Hal ini menjadi bagian dari refleksi dan bahan pembelajaran selanjutnya.

### Validasi & Modifikasi Mandiri
Pengembang melakukan penyesuaian tampilan, mencoba perubahan kode, menguji fitur, dan melakukan trial and error. Hasil AI tidak diperlakukan sebagai hasil akhir yang otomatis benar. Bagian yang belum dipahami perlu dipelajari kembali dan diverifikasi sebelum aplikasi dipublikasikan.

---

## Ringkasan Penggunaan AI

| Tahap | Bantuan AI | Keterlibatan pengembang |
|---|---|---|
| Ideasi | Memberikan gagasan masalah dan fitur | Memilih serta menyesuaikan konsep |
| Kode awal | Membantu menghasilkan sebagian besar kode | Mencoba kode dan mengubah tampilan |
| Debugging | Memberikan analisis dan saran perbaikan | Menguji, melakukan trial and error, dan mencoba solusi |
| Refleksi | Membantu menjelaskan konsep dan kode | Menilai pemahaman serta mencatat bagian yang perlu dipelajari |

**Pernyataan penggunaan AI:** Gemini digunakan secara terbuka sebagai alat bantu dalam proses pengembangan SakuQ. Pengembang melakukan penyesuaian dan pengujian, serta mengakui bahwa pemahaman terhadap seluruh kode masih terus dikembangkan.
