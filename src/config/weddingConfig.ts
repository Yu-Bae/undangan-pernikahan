export interface WeddingConfig {
  couple: {
    groom: {
      nickname: string;
      fullName: string;
      childOf: string;
    };
    bride: {
      nickname: string;
      fullName: string;
      childOf: string;
    };
  };
  event: {
    date: string;
    day: string;
    formattedDate: string;
    time: string;
    location: {
      name: string;
      address: string;
      city: string;
    };
  };
  quote: {
    text: string;
    source: string;
  };
  openingGreeting: string;
  heroGreeting: string;
  heroPlaceholderImage: string;
}

export const weddingConfig: WeddingConfig = {
  couple: {
    groom: {
      nickname: "Abiyyu",
      fullName: "Abiyyu Dzamir Yunas",
      childOf: "Putra dari Bapak Nama Ayah dan Ibu Nama Ibu",
    },
    bride: {
      nickname: "Alda",
      fullName: "Kenti Feoni Alda Sari",
      childOf: "Putri dari Bapak Nama Ayah dan Ibu Nama Ibu",
    },
  },
  event: {
    date: "2026-10-24",
    day: "Sabtu",
    formattedDate: "24 Oktober 2026",
    time: "09.00 WIB - Selesai",
    location: {
      name: "Gedung Pernikahan Bahagia",
      address: "Jl. Utama No. 12, Teluk Kuantan",
      city: "Teluk Kuantan",
    },
  },
  quote: {
    text: "Dan di antara tanda-tanda (kebesaran-Nya) ialah Dia menciptakan pasangan-pasangan untukmu dari sejenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.",
    source: "QS. Ar-Rum: 21",
  },
  openingGreeting: "Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri momen bahagia pernikahan kami.",
  heroGreeting: "Momen membahagiakan ketika dua insan mengikat janji suci untuk saling melengkapi dan menyayangi selamanya.",
  heroPlaceholderImage: "/images/couple.png",
};
