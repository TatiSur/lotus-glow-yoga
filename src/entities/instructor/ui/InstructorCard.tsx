import { FC } from 'react';
import Image from 'next/image';
import InstagramIcon from '@/shared/assets/icons/social/instagram.svg';
import YoutubeIcon from '@/shared/assets/icons/social/youtube.svg';
import PinterestIcon from '@/shared/assets/icons/social/pinterest.svg';
import { Title } from '@/shared/ui/title';

interface InstructorCardProps {
  name: string;
  photo: string;
  description: string;
  socialLinks: {
    instagram?: string;
    youtube?: string;
    pinterest?: string;
  };
}

const InstructorCard: FC<InstructorCardProps> = ({ name, photo, description, socialLinks }) => {
  return (
    <div className="flex flex-col rounded-[10px] bg-ui-blocks px-9 pb-10 pt-7">
      <Image src={photo} alt={name} width={195} height={143} className="smax-w-[195px] mb-9 h-auto object-cover" />
      <Title type="h5" className="mb-7 !text-start uppercase text-primary">
        {name}
      </Title>
      <p className="mb-auto pb-9 text-sm text-light-text md:pb-[46px]">{description}</p>

      <div className="mt-auto flex gap-5">
        {socialLinks.instagram && (
          <a href={socialLinks.instagram} target="_blank">
            <InstagramIcon className="transition-all hover:opacity-80" />
          </a>
        )}
        {socialLinks.youtube && (
          <a href={socialLinks.youtube} target="_blank">
            <YoutubeIcon className="transition-all hover:opacity-80" />
          </a>
        )}
        {socialLinks.pinterest && (
          <a href={socialLinks.pinterest} target="_blank">
            <PinterestIcon className="transition-all hover:opacity-80" />
          </a>
        )}
      </div>
    </div>
  );
};

export default InstructorCard;
