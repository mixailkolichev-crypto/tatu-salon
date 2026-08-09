export interface Master {
  id: string;
  name: string;
  alias?: string;
  specialty: string;
  experience: string;
  image: string;
  bio: string;
  instagram?: string;
  portfolio: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  style: string;
  master: string;
  image: string;
  placement: string;
  hoursSpent: number;
}

export interface BookingFormData {
  masterId: string;
  style: string;
  placement: string;
  size: string;
  name: string;
  phone: string;
  telegramOrWhatsapp: string;
  comment: string;
  preferredDate: string;
}

export type ActiveSection = '01' | '02' | '03' | '04';
