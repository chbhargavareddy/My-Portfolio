export interface Education {
  institute: string;
  course: string;
  place:string;
  duration: string;
}
export interface Certifications {
  list:string;
  link:string;
  date:string;
  image:string,
}

export interface Project {
  title: string;
  date: string;
  technologies: string;
  description: string[];
}

export interface ProfessionalExperience {
  title: string;
  techStack:string;
  date: string;
  role:string,
  description: string[];

}

export interface Skill {
  name: string;
  level:string;
  rating: number;

}

export interface Volunteering {
  list:string;
  logo:string;
  date:string;
  images: string[];
}