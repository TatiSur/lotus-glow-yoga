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
}

export const SOCIAL_LINKS: readonly SocialLink[] = [
  { Icon: FacebookIcon, link: 'https://facebook.com' },
  { Icon: XTwitterIcon, link: 'https://twitter.com' },
  { Icon: LinkedinIcon, link: 'https://linkedin.com' },
  { Icon: YoutubeIcon, link: 'https://youtube.com' },
  { Icon: InstagramIcon, link: 'https://instagram.com' },
  { Icon: PinterestIcon, link: 'https://pinterest.com' },
] as const;
