import { WeddingData } from "@/types/wedding";

export const weddingData: WeddingData = {
  couple: {
    groom: {
      name: "Abiyyu",
      fullName: "Abiyyu Dzamir Yunas",
      parents: "Putra dari Bapak Nama Ayah dan Ibu Nama Ibu",
      instagram: "@i.am_aii",
      instagramUrl: "https://instagram.com/i.am_aii",
      image: "/images/groom.png",
    },
    bride: {
      name: "Alda",
      fullName: "Kenti Feoni Alda Sari",
      parents: "Putri dari Bapak Nama Ayah dan Ibu Nama Ibu",
      instagram: "@kentifeoni8",
      instagramUrl: "https://instagram.com/kentifeoni8",
      image: "/images/bride.png",
    },
  },
  eventDate: {
    isoDate: "2028-07-24T08:00:00+07:00",
    day: "Senin",
    dateFormatted: "24 Juli 2028",
  },
  akad: {
    title: "Akad Nikah",
    date: "Senin, 24 Juli 2028",
    formattedDate: "24 Juli 2028",
    time: "08.00 – 10.00 WIB",
    venue: "Gedung Pernikahan Bahagia",
    city: "Teluk Kuantan",
    address: "Lokasi: -0.532818, 101.532890, Teluk Kuantan, Kuantan Singingi",
    googleMapsUrl: "https://www.google.com/maps?q=-0.532818,101.532890",
  },
  resepsi: {
    title: "Resepsi Pernikahan",
    date: "Senin, 24 Juli 2028",
    formattedDate: "24 Juli 2028",
    time: "11.00 – 14.00 WIB",
    venue: "Gedung Pernikahan Bahagia",
    city: "Teluk Kuantan",
    address: "Lokasi: -0.532818, 101.532890, Teluk Kuantan, Kuantan Singingi",
    googleMapsUrl: "https://www.google.com/maps?q=-0.532818,101.532890",
  },
  loveStory: [
    {
      id: "1",
      title: "Awal Pertemuan",
      date: "2026",
      description:
        "Kisah ini bermula dari obrolan sederhana yang awalnya hanya dipenuhi candaan dan tawa. Tidak ada yang menyangka, percakapan ringan itu perlahan membawa kami untuk saling mengenal lebih dalam.",
    },
    {
      id: "2",
      title: "Saling Mengenal & Bertumbuh",
      date: "2027",
      description:
        "Dari pembahasan tentang masa lalu, rasa takut, kepastian, hingga impian tentang masa depan, kami menemukan banyak kesamaan dalam cara memandang cinta dan kehidupan. Kami belajar bahwa hubungan bukan tentang menemukan seseorang yang sempurna, melainkan tentang dua orang yang mau saling menerima, bertumbuh, dan memperbaiki diri bersama.",
    },
    {
      id: "3",
      title: "Menuju Janji Suci",
      date: "2028",
      description:
        "Kami tidak memulai semuanya dengan tergesa-gesa. Kami memilih berjalan perlahan, membangun rasa percaya melalui komunikasi, kejujuran, dan konsistensi. Hingga akhirnya, perjalanan yang dahulu dimulai dengan tawa membawa kami pada sebuah keyakinan untuk melangkah menuju kehidupan yang sama. Kini, dengan memohon rida Allah Swt., kami memilih untuk menyatukan dua hati dalam ikatan pernikahan.",
    },
  ],
  gallery: [
    {
      id: "1",
      title: "Prewedding Moment 1",
      src: "/images/gallery-1.jpg",
      alt: "Foto Prewedding Abiyyu dan Alda 1",
    },
    {
      id: "2",
      title: "Prewedding Moment 2",
      src: "/images/gallery-2.jpg",
      alt: "Foto Prewedding Abiyyu dan Alda 2",
    },
    {
      id: "3",
      title: "Prewedding Moment 3",
      src: "/images/gallery-3.jpg",
      alt: "Foto Prewedding Abiyyu dan Alda 3",
    },
    {
      id: "4",
      title: "Prewedding Moment 4",
      src: "/images/gallery-4.jpg",
      alt: "Foto Prewedding Abiyyu dan Alda 4",
    },
    {
      id: "5",
      title: "Prewedding Moment 5",
      src: "/images/gallery-5.jpg",
      alt: "Foto Prewedding Abiyyu dan Alda 5",
    },
    {
      id: "6",
      title: "Prewedding Moment 6",
      src: "/images/gallery-6.jpg",
      alt: "Foto Prewedding Abiyyu dan Alda 6",
    },
  ],
  bankAccounts: [
    {
      bankName: "Bank BCA",
      accountNumber: "1234567890",
      accountName: "Abiyyu Dzamir Yunas",
      logoText: "BCA",
    },
    {
      bankName: "Bank Mandiri",
      accountNumber: "0987654321",
      accountName: "Kenti Feoni Alda Sari",
      logoText: "MANDIRI",
    },
  ],
  openingGreeting:
    "Bismillahirrahmānirrahīm. Kayu pulai di Koto Alam, batangnyo tinggi daunnyo rimbun. Baralek kito jo galak sanang, mamintak do'a jo restu kaum. Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri pesta pernikahan (Baralek Nikah) kami.",
  quote: {
    text: "Dan di antara tanda-tanda (kebesaran-Nya) ialah Dia menciptakan pasangan-pasangan untukmu dari sejenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.",
    source: "QS. Ar-Rum: 21",
  },
  audio: {
    title: "Lagu Pernikahan (YouTube)",
    youtubeUrl: "https://youtu.be/ZeFpigRaXbI?si=5HnsFAgmtJkiwblb",
    src: "/music/wedding-song.webm",
  },
};
