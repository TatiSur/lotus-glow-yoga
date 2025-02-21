export interface SocialLink {
  id: string;
  name: string;
  url: string;
}

export interface Instructor {
  id: string;
  name: string;
  photo: string;
  description: string;
  socialLinks: SocialLink[];
  sessionTypeIds: string[];
}
