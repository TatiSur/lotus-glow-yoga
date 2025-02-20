import { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';
import Logo from '@/shared/assets/icons/logo.svg';

interface PlaceholderCardProps extends HTMLAttributes<HTMLDivElement> {
  text?: string;
}

const PlaceholderCard: FC<PlaceholderCardProps> = ({
  text = '',
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        'pointer-events-none flex items-center justify-center rounded-[10px] bg-ui-blocks bg-cover bg-center p-5 text-center text-lg text-light-text',
        className
      )}
      style={{ backgroundImage: 'url(/images/banner-bg.webp)' }}
      {...props}
    >
      {text || <Logo className="m-auto max-w-[200px]" />}
    </div>
  );
};

export default PlaceholderCard;
