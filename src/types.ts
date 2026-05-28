export type Language = 'ja' | 'en';

export interface Service {
  id: string;
  icon: string;
  title: { ja: string; en: string };
  description: { ja: string; en: string };
  details: { ja: string[]; en: string[] };
}

export interface Project {
  id: string;
  title: { ja: string; en: string };
  category: { ja: string; en: string };
  image: string;
  description: { ja: string; en: string };
  tags: string[];
}

export interface Job {
  id: string;
  title: { ja: string; en: string };
  department: { ja: string; en: string };
  location: { ja: string; en: string };
  type: { ja: string; en: string };
  salary: { ja: string; en: string };
}
