export interface Instructor {
  id: string;
  name: string;
  photo: string;
  description: string;
  socialLinks: {
    instagram?: string;
    youtube?: string;
    pinterest?: string;
  };
  sessionTypeIds: string[];
}
