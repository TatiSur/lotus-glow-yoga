import { FC, SVGProps } from 'react';

import FacebookIcon from '@/shared/assets/icons/social/facebook.svg';
import XTwitterIcon from '@/shared/assets/icons/social/x-twitter.svg';
import LinkedinIcon from '@/shared/assets/icons/social/linkedin.svg';
import YoutubeIcon from '@/shared/assets/icons/social/youtube.svg';
import InstagramIcon from '@/shared/assets/icons/social/instagram.svg';
import PinterestIcon from '@/shared/assets/icons/social/pinterest.svg';

interface SocialLink {
  Icon: FC<SVGProps<SVGElement>>;
  link: string;
  label: string;
}

export const SOCIAL_LINKS: readonly SocialLink[] = [
  { Icon: FacebookIcon, link: 'https://facebook.com', label: 'Facebook' },
  { Icon: XTwitterIcon, link: 'https://twitter.com', label: 'X ex Twitter' },
  { Icon: LinkedinIcon, link: 'https://linkedin.com', label: 'Linkedin' },
  { Icon: YoutubeIcon, link: 'https://youtube.com', label: ' Youtube' },
  { Icon: InstagramIcon, link: 'https://instagram.com', label: 'Instagram' },
  { Icon: PinterestIcon, link: 'https://pinterest.com', label: 'Pinterest' },
] as const;
