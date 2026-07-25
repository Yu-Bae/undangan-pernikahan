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
      fullName: "Abiyyu Dzamir Yunas S.Kom",
      childOf: "Putra dari Bapak Syafrullah dan Ibu Eka Susanti",
    },
    bride: {
      nickname: "Alda",
      fullName: "Kenti Feoni Alda Sari S.Pi",
      childOf: "Putri dari Bapak Masrikan dan Ibu Miskartini",
    },
  },
  event: {
    date: "2028-07-24",
    day: "Senin",
    formattedDate: "24 Juli 2028",
    time: "08.00 WIB - Selesai",
    location: {
      name: "Rumah Mempelai Wanita",
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
