import { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';

type PlaceholderCardProps = HTMLAttributes<HTMLDivElement>;

const PlaceholderCard: FC<PlaceholderCardProps> = ({ className, ...props }) => {
  return (
    <div
      className={clsx('pointer-events-none rounded-[10px] bg-ui-blocks bg-cover bg-center', className)}
      style={{ backgroundImage: 'url(/images/banner-bg.webp)' }}
      {...props}
    />
  );
};

export default PlaceholderCard;
