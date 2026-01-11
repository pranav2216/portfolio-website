
export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  details: string[];
  url?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
  grade: string;
}