import { Master, PortfolioItem } from '../types';

import heroWomanImage from '../assets/images/hero_woman_tattoo_1786280724704.jpg';
import studioInteriorImage from '../assets/images/tattoo_studio_interior_1786280739106.jpg';

import p1 from '../assets/images/portfolio_tattoo_1_1786280755233.jpg';
import p2 from '../assets/images/portfolio_tattoo_2_1786280772931.jpg';
import p3 from '../assets/images/portfolio_tattoo_3_1786280789376.jpg';
import p4 from '../assets/images/portfolio_tattoo_4_1786280805697.jpg';
import p5 from '../assets/images/portfolio_tattoo_5_1786280822828.jpg';

export const STUDIO_IMAGES = {
  hero: heroWomanImage,
  heroVideo: 'https://www.image2url.com/r2/default/videos/1786287173401-634416fa-3372-4bcd-870e-e7e8c456ad6f.mp4',
  interior: studioInteriorImage,
  portfolio: [p1, p2, p3, p4, p5],
};

export const MASTERS_DATA: Master[] = [
  {
    id: 'master-1',
    name: 'Александр Громов',
    alias: 'NOX',
    specialty: 'Черно-белая графика & Анатомический узор',
    experience: '9 лет опыта',
    image: p1,
    bio: 'Специализируется на масштабных гравировальных проектах, цветочных мотивах и филигранной детализации на коже.',
    portfolio: [p1, p3],
  },
  {
    id: 'master-2',
    name: 'Мария Ветрова',
    alias: 'AURA',
    specialty: 'Микро-реализм & Орнаментал',
    experience: '7 лет опыта',
    image: p3,
    bio: 'Создает элегантные, воздушные композиции, точно учитывая анатомию тела и персональные пожелания клиента.',
    portfolio: [p3, p4],
  },
  {
    id: 'master-3',
    name: 'Виктор Морозов',
    alias: 'BLACKOUT',
    specialty: 'Японский стиль & Блэкворк',
    experience: '12 лет опыта',
    image: p2,
    bio: 'Мастер крупной формы и мощных контрастов. Манифест индивидуальности без компромиссов.',
    portfolio: [p2, p5],
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'p-1',
    title: 'Ботаническая композиция на спине',
    style: 'Графика',
    master: 'Александр Громов',
    image: p1,
    placement: 'Спина',
    hoursSpent: 14,
  },
  {
    id: 'p-2',
    title: 'Дракон и органические волны',
    style: 'Японский стиль',
    master: 'Виктор Морозов',
    image: p2,
    placement: 'Рука (рукав)',
    hoursSpent: 22,
  },
  {
    id: 'p-3',
    title: 'Орнаментальный узор на шее',
    style: 'Микро-реализм',
    master: 'Мария Ветрова',
    image: p3,
    placement: 'Шея / Воротник',
    hoursSpent: 8,
  },
  {
    id: 'p-4',
    title: 'Геометрический орнамент кисти',
    style: 'Блэкворк',
    master: 'Виктор Морозов',
    image: p4,
    placement: 'Кисть и пальцы',
    hoursSpent: 6,
  },
  {
    id: 'p-5',
    title: 'Графический рукав с фауной',
    style: 'Черно-белая графика',
    master: 'Александр Громов',
    image: p5,
    placement: 'Предплечье',
    hoursSpent: 12,
  },
];

export const TATTOO_STYLES = [
  'Черно-белая графика',
  'Микро-реализм',
  'Орнаментал',
  'Японский стиль',
  'Блэкворк',
  'Минимализм',
  'Индивидуальный эскиз',
];

export const STUDIO_INFO = {
  name: 'СКУЛЬПТУРА',
  subtitle: 'ТАТУ-СТУДИЯ • МОСКВА',
  heroTag: 'ТАТУ-СТУДИЯ • МОСКВА',
  tagline: 'Искусство. Индивидуальность. Без компромиссов.',
  aboutTitle: 'Место, где тату — не тренд, а часть тебя.',
  aboutDesc: 'Работаем в разных стилях. Слушаем идею, создаём эскиз, воплощаем в коже.',
  address: 'Москва, ул. Покровка, 21',
  phone: '+7 (999) 123-45-67',
  email: 'info@skulptura-tattoo.ru',
  workingHours: 'Ежедневно с 12:00 до 22:00',
  telegram: '@skulptura_tattoo',
  instagram: '@skulptura.moscow',
  year: '2024',
};
