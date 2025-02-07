import { FC, HTMLAttributes } from 'react';
import Image from 'next/image';
import InstagramIcon from '@/shared/assets/icons/social/instagram.svg';
import YoutubeIcon from '@/shared/assets/icons/social/youtube.svg';
import PinterestIcon from '@/shared/assets/icons/social/pinterest.svg';
import { Title } from '@/shared/ui/title';
import clsx from 'clsx';

interface InstructorCardProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  photo: string;
  description: string;
  socialLinks: {
    instagram?: string;
    youtube?: string;
    pinterest?: string;
  };
}

const InstructorCard: FC<InstructorCardProps> = ({
  name,
  photo,
  description,
  socialLinks,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        'flex flex-col rounded-[10px] bg-ui-blocks px-9 pb-10 pt-7',
        className
      )}
      {...props}
    >
      <Image
        src={photo}
        alt={name}
        width={195}
        height={143}
        className="smax-w-[195px] mb-9 h-auto object-cover"
      />
      <Title
        type="h3"
        size="h5"
        className="mb-7 !text-start uppercase text-primary"
      >
        {name}
      </Title>
      <p className="mb-auto pb-9 text-sm text-light-text md:pb-[46px]">
        {description}
      </p>

      <div className="mt-auto flex gap-5">
        {socialLinks.instagram && (
          <a
            href={socialLinks.instagram}
            target="_blank"
            aria-label="Instagram"
          >
            <InstagramIcon
              className="transition-all hover:opacity-80"
              aria-hidden="true"
            />
          </a>
        )}
        {socialLinks.youtube && (
          <a href={socialLinks.youtube} target="_blank" aria-label="Youtube">
            <YoutubeIcon
              className="transition-all hover:opacity-80"
              aria-hidden="true"
            />
          </a>
        )}
        {socialLinks.pinterest && (
          <a
            href={socialLinks.pinterest}
            target="_blank"
            aria-label="Pinterest"
          >
            <PinterestIcon
              className="transition-all hover:opacity-80"
              aria-hidden="true"
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default InstructorCard;
