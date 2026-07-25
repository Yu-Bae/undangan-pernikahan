export interface GroomBrideInfo {
  name: string;
  fullName: string;
  parents: string;
  instagram: string;
  instagramUrl: string;
  image: string;
}

export interface EventDetail {
  title: string;
  date: string;
  formattedDate: string;
  time: string;
  venue: string;
  city: string;
  address: string;
  googleMapsUrl: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  date: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  src: string;
  alt: string;
}

export interface BankAccount {
  bankName: string;
  accountNumber: string;
  accountName: string;
  logoText?: string;
}

export interface WeddingData {
  couple: {
    groom: GroomBrideInfo;
    bride: GroomBrideInfo;
  };
  eventDate: {
    isoDate: string; // e.g. "2026-12-12T08:00:00+07:00"
    day: string;
    dateFormatted: string;
  };
  akad: EventDetail;
  resepsi: EventDetail;
  loveStory: TimelineItem[];
  gallery: GalleryItem[];
  bankAccounts: BankAccount[];
  openingGreeting: string;
  quote: {
    text: string;
    source: string;
  };
  audio?: {
    title?: string;
    youtubeUrl?: string;
    src?: string;
  };
}

export type AttendanceStatus = "Hadir" | "Tidak Hadir" | "Masih Ragu";

export interface GuestWish {
  id: string;
  name: string;
  status: AttendanceStatus;
  message: string;
  createdAt: string;
}
