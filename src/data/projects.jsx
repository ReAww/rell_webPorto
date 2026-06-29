import { FiActivity, FiBriefcase, FiPieChart, FiCpu, FiEye } from "react-icons/fi";

export const categoryConfig = {
  IoT: {
    label: "IoT",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  AI: {
    label: "AI / ML",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  Web: {
    label: "Web",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
};

export const projects = [
  // ─── IoT ───────────────────────────────────────────────────────────────────
  {
    id: "smart-environment-monitor",
    title: "Smart Environment Monitor",
    category: "IoT",
    desc: "Sistem monitoring lingkungan berbasis Arduino & NodeMCU — memantau suhu, kelembapan, dan intensitas cahaya secara real-time dengan dashboard web dan notifikasi Telegram.",
    fullDesc: `Smart Environment Monitor adalah proyek IoT yang dibangun untuk memantau kondisi lingkungan ruangan secara real-time menggunakan mikrokontroler Arduino Uno dan NodeMCU ESP8266 sebagai modul Wi-Fi.

Data dari sensor DHT22 (suhu & kelembapan) dan sensor LDR (intensitas cahaya) dikirimkan via protokol MQTT ke broker lokal, lalu divisualisasikan pada dashboard web yang dibuat dengan Python Flask dan Chart.js.

Sistem ini dilengkapi dengan fitur notifikasi otomatis melalui Telegram Bot ketika nilai sensor melampaui ambang batas yang ditentukan, serta penyimpanan data historis ke database SQLite untuk analisis tren jangka panjang.`,
    tags: ["Arduino", "NodeMCU ESP8266", "MQTT", "Python", "Flask", "Chart.js", "SQLite", "DHT22", "Telegram API"],
    role: "IoT Engineer",
    status: "In Development",
    year: "2024",
    liveUrl: "#",
    repo: "https://github.com/ReAww",
    icon: <FiCpu />,
    images: [
      // Taruh foto di: public/projects/smart-environment-monitor/
      // Contoh: '/projects/smart-environment-monitor/circuit.jpg'
    ],
    features: [
      "Sensor DHT22 — pembacaan suhu & kelembapan setiap 5 detik",
      "Sensor LDR — deteksi intensitas cahaya ruangan",
      "Komunikasi via protokol MQTT dengan broker Mosquitto lokal",
      "Dashboard web real-time dengan grafik Chart.js & auto-refresh",
      "Notifikasi Telegram Bot otomatis saat nilai melampaui threshold",
      "Penyimpanan data historis ke SQLite + fitur export CSV",
      "Kontrol relay jarak jauh untuk kipas/lampu via toggle di dashboard",
    ],
    documentation: `Hardware:
  - Arduino Uno R3
  - NodeMCU ESP8266 (Wi-Fi module)
  - Sensor DHT22 (suhu & kelembapan)
  - Sensor LDR + resistor 10kΩ
  - Relay 5V 2-channel
  - Breadboard & jumper wires

Software Stack:
  - Firmware: Arduino IDE (C++)
  - MQTT Broker: Eclipse Mosquitto (local)
  - Backend: Python 3.11 + Flask + paho-mqtt
  - Database: SQLite3
  - Frontend: HTML + Chart.js + AJAX polling
  - Bot: python-telegram-bot library

Pin Mapping (Arduino):
  DHT22 → Pin D4
  LDR   → Pin A0
  Relay → Pin D7, D8

Status: Sirkuit & firmware selesai. Dashboard 70% selesai.
Next: Integrasi Telegram alert + UI responsif mobile.`,
  },

  // ─── AI ────────────────────────────────────────────────────────────────────
  {
    id: "hand-gesture-recognition",
    title: "Hand Gesture Recognition",
    category: "AI",
    desc: "Sistem pengenalan gestur tangan real-time berbasis computer vision — menggunakan MediaPipe & TensorFlow untuk mengontrol antarmuka komputer tanpa menyentuh keyboard.",
    fullDesc: `Hand Gesture Recognition adalah proyek AI / Computer Vision yang memungkinkan pengguna mengontrol antarmuka komputer menggunakan gestur tangan yang ditangkap via kamera webcam secara real-time.

Sistem menggunakan MediaPipe Hands untuk mendeteksi 21 landmark titik tangan, kemudian model TensorFlow Lite yang terlatih mengklasifikasikan gestur menjadi perintah spesifik (scroll, klik, volume control, dll).

Proyek ini dikembangkan dalam konteks penelitian Human-Computer Interaction (HCI) dan berhasil mencapai akurasi klasifikasi hingga 94% pada dataset pengujian dengan latensi inferensi < 30ms.`,
    tags: ["Python", "OpenCV", "MediaPipe", "TensorFlow Lite", "NumPy", "scikit-learn", "Flask"],
    role: "ML Engineer / Researcher",
    status: "In Development",
    year: "2024",
    liveUrl: "#",
    repo: "https://github.com/ReAww",
    icon: <FiEye />,
    images: [
      // Taruh foto di: public/projects/hand-gesture-recognition/
      // Contoh: '/projects/hand-gesture-recognition/demo.png'
    ],
    features: [
      "Deteksi 21 landmark titik tangan via MediaPipe Hands secara real-time",
      "Klasifikasi 10+ gestur tangan menggunakan model TensorFlow Lite custom",
      "Akurasi klasifikasi 94% pada dataset pengujian 2.000+ sampel",
      "Latensi inferensi < 30ms pada hardware standar (CPU only)",
      "Mapping gestur ke perintah OS: scroll, zoom, volume, screenshot",
      "Mode kalibrasi — user dapat melatih gestur kustom baru",
      "Overlay visualisasi landmark & confidence score di video feed",
    ],
    documentation: `Environment:
  Python 3.10 + virtual environment (venv)
  
Dependencies:
  mediapipe==0.10.x
  tensorflow-lite-runtime
  opencv-python
  numpy
  scikit-learn
  pyautogui (OS control)
  flask (web demo UI)

Model Architecture:
  Input: 63 features (21 landmarks × 3 koordinat xyz)
  Hidden: Dense(128, ReLU) → Dense(64, ReLU)
  Output: Dense(10, Softmax) → 10 kelas gestur
  
Training:
  Dataset: 2.000+ sampel self-collected (5 orang × 10 gestur × 40 repetisi)
  Split: 80% train / 20% test
  Accuracy: 94.3% test accuracy

Gesture Classes:
  0: Fist (closed hand)
  1: Open palm (stop)
  2: Thumbs up
  3: Peace sign
  4: Pointing finger
  5: Scroll up
  6: Scroll down
  7: Pinch zoom in/out
  8: Volume up
  9: Volume down

Status: Model training selesai. Integrasi pyautogui 80%.
Next: Packaging menjadi executable + mode multi-tangan.`,
  },

  // ─── Web ───────────────────────────────────────────────────────────────────
  {
    id: "link-tracker-dashboard",
    title: "Link Tracker Dashboard",
    category: "Web",
    desc: "Platform analitik link full-stack dengan peta pengunjung interaktif, tracking real-time, dan visualisasi data geo-location.",
    fullDesc: `Link Tracker Dashboard adalah platform analitik link berbasis web yang dibangun untuk melacak kunjungan URL secara real-time.

Sistem menangkap metadata pengunjung termasuk alamat IP, negara, kota, jenis perangkat, dan browser — memvisualisasikan semua data pada peta dunia interaktif yang ditenagai oleh Leaflet.js.

Backend menggunakan REST API Python Flask yang memproses request redirect dan menyimpan data analitik, sementara frontend React menyediakan dashboard yang bersih dan real-time.`,
    tags: ["Flask", "Python", "Leaflet.js", "REST API", "SQLite", "React", "Chart.js"],
    role: "Fullstack Developer",
    status: "In Development",
    year: "2024",
    liveUrl: "#",
    repo: "https://github.com/ReAww",
    icon: <FiActivity />,
    images: [
      // Taruh foto di: public/projects/link-tracker-dashboard/
    ],
    features: [
      "Tracking pengunjung real-time dengan data geolokasi (negara, kota, ISP)",
      "Peta dunia interaktif dengan pin kunjungan via Leaflet.js",
      "Breakdown analitik perangkat & browser dalam bentuk chart",
      "Short-link generator kustom dengan hitungan klik",
      "REST API backend Flask dengan persistensi data SQLite",
      "Dashboard React dengan auto-refresh setiap 10 detik",
    ],
    documentation: `Stack: Python Flask (backend) + React (frontend) + SQLite
Map Library: Leaflet.js dengan OpenStreetMap tiles
IP Geolocation: ip-api.com (free tier)

API Endpoints:
  GET  /api/links          → list semua tracked links
  POST /api/links          → buat tracked link baru
  GET  /api/links/:id/hits → ambil data kunjungan
  GET  /track/:code        → redirect + catat kunjungan

Status: Dashboard UI selesai. Backend API ~80% selesai.
Next: Layer autentikasi + fitur export CSV.`,
  },
  {
    id: "web-portfolio-v3",
    title: "Web Portfolio v3",
    category: "Web",
    desc: "Iterasi ketiga portofolio personal — dengan fisika tilt 3D, tema dark premium, dan codebase yang dioptimalkan menggunakan React + Framer Motion.",
    fullDesc: `Web Portfolio v3 adalah versi ketiga dari portofolio personal saya — yang sedang Anda lihat sekarang.

Dibangun dari nol dengan fokus pada kualitas visual, micro-interactions, dan performa. Desain terinspirasi dari produk SaaS dark-mode premium, menampilkan glassmorphism UI, kartu tilt 3D interaktif, dan animasi fluid di seluruh halaman.

Proyek ini juga berfungsi sebagai personal challenge untuk mendorong batas dari apa yang bisa dirasakan oleh sebuah situs portofolio statis.`,
    tags: ["React", "TailwindCSS", "Framer Motion", "Vite", "react-router-dom"],
    role: "Designer & Developer",
    status: "Live",
    year: "2025",
    liveUrl: "#",
    repo: "https://github.com/ReAww/rell_webPorto",
    icon: <FiBriefcase />,
    images: [
      // Taruh foto di: public/projects/web-portfolio-v3/
    ],
    features: [
      "Fisika tilt 3D pada kartu proyek menggunakan react-parallax-tilt",
      "Efek glow interaktif dengan mouse-tracking pada hero photo card",
      "Header hide/show berdasarkan scroll + active section highlighting",
      "Animasi typewriter pada hero section",
      "UI glassmorphism premium dengan palet warna dark-mode",
      "Fully responsive dari mobile hingga layar 4K",
      "Halaman detail project full-page dengan React Router",
    ],
    documentation: `Stack: React 18 + Vite 5 + TailwindCSS 3 + Framer Motion 11 + react-router-dom 6
Icons: react-icons (Feather Icons)
Tilt: react-parallax-tilt
Typewriter: typewriter-effect

Build: Vite (production bundle ~400KB gzipped)
Deploy: Static hosting (GitHub Pages / Vercel)

Design Tokens (TailwindCSS):
  Background: #0D0D0D
  Surface:    white/[0.02–0.05]
  Text:       #E5E5E5, #A6A6A6
  Border:     white/5 → white/15 on hover
  IoT accent: emerald-400
  AI accent:  purple-400
  Web accent: blue-400`,
  },
  {
    id: "smartspend-dashboard",
    title: "SmartSpend Dashboard",
    category: "Web",
    desc: "Aplikasi pelacak keuangan personal minimalis dengan chart visual, pengaturan tujuan, dan analitik transaksi bulanan yang detail.",
    fullDesc: `SmartSpend adalah dashboard keuangan personal berbasis client-side yang dibangun sepenuhnya di React tanpa memerlukan backend.

Semua data disimpan di localStorage, menjadikannya fully offline-capable. Pengguna dapat mencatat transaksi pemasukan dan pengeluaran, mengkategorikan pengeluaran, menetapkan tujuan tabungan bulanan, dan memvisualisasikan kebiasaan keuangan melalui chart interaktif Chart.js.

UI mengikuti estetika dark minimal yang bersih dengan fokus pada keterbacaan dan kejelasan data.`,
    tags: ["React", "Chart.js", "Tailwind", "LocalStorage", "react-chartjs-2"],
    role: "Frontend Developer",
    status: "In Development",
    year: "2024",
    liveUrl: "#",
    repo: "https://github.com/ReAww",
    icon: <FiPieChart />,
    images: [
      // Taruh foto di: public/projects/smartspend-dashboard/
    ],
    features: [
      "CRUD transaksi pemasukan/pengeluaran dengan tag kategori",
      "Bar chart bulanan dan pie chart kategori via Chart.js",
      "Tracker tujuan tabungan dengan progress indicator visual",
      "Persistensi localStorage — tanpa login atau backend",
      "Kartu ringkasan bulanan (total income, expenses, net balance)",
      "Layout responsif dengan daftar transaksi mobile-friendly",
    ],
    documentation: `Stack: React 18 + TailwindCSS + Chart.js + react-chartjs-2
Persistensi: localStorage (JSON serialized)

Data Schema (localStorage key: "smartspend_data"):
  {
    transactions: [ { id, type, amount, category, note, date } ],
    goals:        [ { id, label, target, current } ]
  }

Status: CRUD transaksi & tampilan chart selesai.
Next: Import/export CSV + otomasi transaksi berulang.`,
  },
];
