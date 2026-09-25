# Product Requirements Document
## Personal Portfolio Website — Muhammad Yusril Islam

## 1. Tujuan Website

Website ini merupakan personal portfolio milik **Muhammad Yusril Islam** yang digunakan untuk memperkenalkan profil profesional, pengalaman, kemampuan teknis, dan project yang pernah dibuat.

Website ditujukan terutama untuk:

- Recruiter / HR.
- Perusahaan.
- Calon client.
- Developer lain.
- Pengguna yang ingin melihat hasil project.

Tujuan utama website:

- Memperkenalkan Muhammad Yusril Islam sebagai Front-End Web Developer.
- Menampilkan pengalaman profesional dan magang.
- Menampilkan teknologi yang dikuasai.
- Menampilkan project portfolio.
- Memberikan akses menuju GitHub dan live website dari setiap project.
- Memudahkan recruiter atau calon client menghubungi pemilik portfolio.
- Memberikan akses untuk melihat atau mengunduh CV.

Website menggunakan konsep **single-page portfolio** dengan tampilan minimal, modern, profesional, dan mengikuti struktur website referensi.

---

# 2. Fitur Utama

## 2.1 Profile / Hero Section

Bagian paling atas website menampilkan identitas utama pemilik portfolio.

Konten:

- Foto profil.
- Nama:
  **Muhammad Yusril Islam**
- Lokasi:
  **Malang, Indonesia**
- Deskripsi profesional singkat.
- Link LinkedIn.
- Link GitHub.

Contoh informasi:

**Muhammad Yusril Islam**

**Malang, Indonesia**

Fresh Graduate Informatics graduate with an interest in Front-End Web Development, focused on building responsive, clean, and user-friendly web applications.

Social links:

- LinkedIn
- GitHub

---

## 2.2 Collaboration / CTA Section

Setelah informasi profil, terdapat call-to-action untuk menghubungi pemilik portfolio.

Headline:

**Open for collaboration and new opportunities**

Tersedia dua aksi utama:

### Contact Me

Ketika ditekan, pengguna diarahkan menuju bagian Contact atau membuka form untuk menghubungi pemilik portfolio.

### Download CV

Ketika ditekan, pengguna dapat membuka atau mengunduh CV.

---

## 2.3 Working Experience

Menampilkan pengalaman profesional secara ringkas.

Setiap experience terdiri dari:

- Nama perusahaan / instansi.
- Posisi.
- Periode.
- Link perusahaan jika tersedia.

Contoh:

### Dinas Tenaga Kerja Kota Batu

**Web Development Intern**

Menampilkan periode magang.

Pengalaman dapat mencakup:

- Membantu pengembangan website.
- Melakukan pemeliharaan website.
- Membantu pengelolaan data peserta pelatihan.

Format experience dibuat sederhana seperti website referensi dan tidak menggunakan deskripsi panjang pada halaman utama.

---

# 2.4 Tech Stack

Menampilkan teknologi yang pernah digunakan atau dikuasai.

Tech Stack dibagi berdasarkan kategori.

## Languages

- JavaScript
- PHP

## Frontend

- Blade
- Tailwind CSS

## Backend

- Laravel

## Database

- MySQL

## Tools / DevOps

- Git
- GitHub

Setiap teknologi dapat ditampilkan menggunakan:

- Icon teknologi.
- Nama teknologi.

Tampilan dibuat sederhana dan mudah dipindai seperti website referensi.

---

# 2.5 Latest Projects

Menampilkan project utama yang ingin ditunjukkan kepada recruiter atau pengguna.

Setiap project ditampilkan dalam bentuk project card.

Project card terdiri dari:

- Preview / screenshot project.
- Nama project.
- Deskripsi singkat.
- GitHub link.
- Website / Live Demo link jika tersedia.

Project tidak membutuhkan halaman detail terpisah pada versi awal.

Informasi project langsung ditampilkan pada halaman utama.

Setiap project menggunakan format:

**Project Image**

**Project Name**

Deskripsi singkat mengenai fungsi project.

**GitHub**

**Website**

Jumlah project tidak dibatasi dan dapat ditambahkan melalui data project tanpa mengubah struktur UI.

---

# 2.6 Contact

Pengguna dapat menghubungi pemilik portfolio melalui tombol:

**Contact Me**

Contact dapat menggunakan modal atau section khusus.

Form terdiri dari:

### Name

Nama pengirim.

### Email

Email pengirim.

### Message

Pesan yang ingin dikirimkan.

Opsional:

### Subject

Subjek pesan.

Tombol:

**Send Message**

Setelah dikirim:

Frontend

→ Contact API / Email Service

→ Email Muhammad Yusril Islam

Website menampilkan feedback:

**Message sent successfully.**

Jika terjadi kesalahan:

**Failed to send message. Please try again.**

Pesan tidak wajib disimpan dalam database.

---

# 2.7 Footer

Bagian paling bawah website menampilkan copyright.

Format:

**© 2026 Muhammad Yusril Islam. All Rights Reserved.**

Footer dibuat sederhana seperti website referensi.

---

# 3. User Flow

## Main Flow

User membuka website.

↓

Website menampilkan Profile / Hero Section.

↓

User melihat:

- Foto.
- Nama.
- Lokasi.
- Professional description.
- LinkedIn.
- GitHub.

↓

User melihat CTA:

**Open for collaboration and new opportunities**

↓

User dapat memilih:

**Contact Me**

atau

**Download CV**

↓

User scroll ke bagian:

**Working Experience**

↓

User melihat pengalaman kerja / magang.

↓

User scroll ke:

**Tech Stack**

↓

User melihat teknologi berdasarkan kategori.

↓

User scroll ke:

**Latest Projects**

↓

User melihat daftar project.

↓

User dapat menekan:

**GitHub**

untuk membuka repository project.

atau:

**Website**

untuk membuka live project.

↓

User dapat menggunakan **Contact Me** untuk mengirim pesan.

↓

User mengisi contact form.

↓

Sistem melakukan validasi.

↓

Jika valid:

Pesan dikirim ke email pemilik portfolio.

↓

Website menampilkan notifikasi bahwa pesan berhasil dikirim.

---

# 4. Kebutuhan Sistem

## 4.1 Functional Requirements

Sistem harus dapat:

- Menampilkan informasi profil.
- Menampilkan foto profil.
- Menampilkan lokasi.
- Menampilkan professional description.
- Menampilkan LinkedIn.
- Menampilkan GitHub.
- Menampilkan tombol Contact Me.
- Menampilkan tombol Download CV.
- Menampilkan working experience.
- Menampilkan tech stack.
- Mengelompokkan tech stack berdasarkan kategori.
- Menampilkan daftar project.
- Menampilkan gambar project.
- Menampilkan nama dan deskripsi project.
- Membuka repository GitHub project.
- Membuka live website project.
- Menampilkan contact form.
- Memvalidasi contact form.
- Mengirim pesan dari contact form ke email pemilik portfolio.
- Memberikan feedback success/error.
- Menampilkan website secara responsif.

---

# 4.2 Responsive Requirements

Website harus responsive pada:

### Mobile

375px

### Tablet

768px

### Laptop

1024px

### Desktop

1440px

### Large Desktop

1920px

Tidak diperbolehkan:

- Horizontal overflow.
- Text terpotong.
- Project image keluar container.
- Layout bertumpuk secara tidak teratur.
- Button sulit ditekan pada mobile.

---

# 4.3 Performance Requirements

Website harus:

- Memiliki loading cepat.
- Menggunakan optimized image.
- Menggunakan lazy loading jika diperlukan.
- Meminimalkan JavaScript yang tidak dibutuhkan.
- Menghindari dependency yang tidak diperlukan.
- Mengoptimalkan font dan static assets.

---

# 4.4 Accessibility Requirements

Website menggunakan:

- Semantic HTML.
- Alt text untuk gambar.
- Keyboard navigation.
- Accessible button.
- Accessible form label.
- Kontras teks yang memadai.
- Focus state yang terlihat.

Contoh title:

**Muhammad Yusril Islam | Front-End Web Developer**

---

# 4.6 Security Requirements

Contact form harus memiliki:

- Input validation.
- Email validation.
- Input sanitization.
- Protection terhadap spam sederhana.
- Environment variable untuk credential.

Credential seperti API key tidak boleh disimpan langsung di source code.

File:

`.env`

tidak boleh di-push ke GitHub.

---

# 5. Technical Overview

## 5.1 Architecture

Website menggunakan konsep:

**Single Page Portfolio**

Mayoritas content tersedia dalam satu halaman.

Struktur:

Home

├── Profile / Hero  
├── CTA  
├── Working Experience  
├── Tech Stack  
├── Latest Projects  
├── Contact  
└── Footer

Tidak diperlukan dashboard admin pada versi awal.

---

# 5.2 Frontend

Framework:

**Next.js**

Language:

**TypeScript**

Styling:

**Tailwind CSS**

Architecture:

**Reusable Component-Based Architecture**

Contoh struktur component:

- ProfileSection
- SocialLinks
- CollaborationCTA
- ExperienceSection
- ExperienceItem
- TechStackSection
- TechStackCategory
- ProjectsSection
- ProjectCard
- ContactForm
- Footer

---

# 5.3 Data

Data portfolio tidak membutuhkan database.

# 5.4 Backend

Backend hanya digunakan jika diperlukan untuk Contact Form.

Backend menangani:

- Menerima request contact.
- Validasi input.
- Mengirim email.
- Mengembalikan response sukses atau gagal.

Tidak diperlukan CRUD project.

Tidak diperlukan authentication.

Tidak diperlukan admin dashboard.

Tidak diperlukan database pada versi awal.

---

# 5.5 Contact Architecture

Flow:

User

↓

Contact Form

↓

API Endpoint

↓

Email Service

↓

Email Pemilik Portfolio

↓

Success / Error Response

↓

Notification pada website

Email service dapat menggunakan layanan yang kompatibel dengan deployment Next.js.

---

# 5.8 Design Direction

Design website mengikuti konsep visual website referensi:

- Minimal.
- Clean.
- Content-focused.
- Banyak whitespace.
- Typography sederhana.
- Tidak menggunakan navigation bar kompleks.
- Profile langsung terlihat saat website dibuka.
- Informasi disusun secara vertikal.
- Section dipisahkan dengan spacing/divider.
- Project menggunakan preview image berukuran besar.
- Tidak menggunakan dekorasi berlebihan.
- Animasi hanya digunakan secara subtle.
- Responsive untuk desktop dan mobile.

Urutan konten utama:

**Profile**

↓

**Open for Collaboration**

↓

**Working Experience**

↓

**Tech Stack**

↓

**Latest Projects**

↓

**Footer**