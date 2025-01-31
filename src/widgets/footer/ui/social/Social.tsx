import { FC } from 'react';
import { SOCIAL_LINKS } from '@/shared/config';
import clsx from 'clsx';

interface FooterSocialProps {
  className?: string;
}

const Social: FC<FooterSocialProps> = ({ className }) => {
  return (
    <div className={clsx('flex flex-wrap items-center gap-[18px]', className)}>
      {SOCIAL_LINKS.map(({ Icon, link }) => {
        return (
          <a
            key={link}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
};

export default Social;
