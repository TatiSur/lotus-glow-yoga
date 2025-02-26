import { FC, HTMLAttributes } from 'react';
import { SOCIAL_LINKS } from '@/shared/config';
import clsx from 'clsx';

type FooterSocialProps = HTMLAttributes<HTMLDivElement>;

const Social: FC<FooterSocialProps> = ({ className, ...props }) => {
  return (
    <div
      className={clsx('flex flex-wrap items-center gap-[18px]', className)}
      {...props}
    >
      {SOCIAL_LINKS.map(({ Icon, link, label }) => {
        return (
          <a
            key={link}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
            aria-label={label}
          >
            <Icon aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
};

export default Social;
