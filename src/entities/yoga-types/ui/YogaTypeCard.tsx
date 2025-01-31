import { FC } from 'react';
import clsx from 'clsx';
import { Title } from '@/shared/ui/title';
import ArrowIcon from '@/shared/assets/icons/arrow.svg';
import { Button } from '@/shared/ui/button';

interface YogaTypeCardProps {
  title: string;
  description: string;
  label: string;
  onClick: () => void;
  className?: string;
}

const YogaTypeCard: FC<YogaTypeCardProps> = ({ title, description, label, onClick, className }) => {
  return (
    <div
      className={clsx(
        'relative flex flex-col justify-between gap-7 rounded-[10px] bg-ui-blocks px-6 pb-7 pt-10 shadow has-[button:hover]:shadow-primary md:px-7',
        'after:absolute after:right-7 after:top-0 after:h-[61px] after:w-[33px] after:rounded-b-full after:bg-primary md:after:right-5',
        className
      )}
    >
      <div>
        <Title type="h5" className="mb-8 pr-10 !text-left text-primary">
          {title}
        </Title>
        <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-taupe-dark md:mb-3">{label}</p>
        <p className="text-sm text-light-text">{description}</p>
      </div>
      <Button
        onClick={onClick}
        variant="text"
        className="max-w-fit gap-5 text-sm font-bold uppercase tracking-[0.23em] text-primary"
      >
        <ArrowIcon /> START NOW!
      </Button>
    </div>
  );
};

export default YogaTypeCard;
