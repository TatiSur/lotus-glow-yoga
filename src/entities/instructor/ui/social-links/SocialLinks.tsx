import { FC } from 'react';
import InstagramIcon from '@/shared/assets/icons/social/instagram.svg';
import YoutubeIcon from '@/shared/assets/icons/social/youtube.svg';
import PinterestIcon from '@/shared/assets/icons/social/pinterest.svg';
import { SocialLink } from '@/entities/instructor';

const ICONS: Record<string, FC<{ className?: string }>> = {
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
  pinterest: PinterestIcon,
};

interface SocialLinksProps {
  links: SocialLink[];
}

const SocialLinks: FC<SocialLinksProps> = ({ links }) => {
  return (
    <div className="flex gap-5">
      {links.map(({ id, name, url }) => {
        const Icon = ICONS[name.toLowerCase()];

        return Icon ? (
          <a key={id} href={url} target="_blank" aria-label={name}>
            <Icon
              className="transition-all hover:opacity-80"
              aria-hidden="true"
            />
          </a>
        ) : null;
      })}
    </div>
  );
};

export default SocialLinks;
