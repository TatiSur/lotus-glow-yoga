import { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';

import { Instructor, InstructorCard } from '@/entities/instructor';
import PlaceholderCard from '../placeholder-card/PlaceholderCard';

const getPlaceholders = (length: number, columns: number) => {
  if (!length) {
    return new Array(columns).fill(null);
  }

  const remainder = length % columns;
  return remainder ? new Array(columns - remainder).fill(null) : [];
};

interface InstructorCardListProps extends HTMLAttributes<HTMLDivElement> {
  instructors: [] | Instructor[];
  error: string | null;
}

const InstructorCardList: FC<InstructorCardListProps> = ({ instructors, error, className, ...props }) => {
  const totalInstructors = instructors.length;
  const placeholders3 = getPlaceholders(totalInstructors, 3);
  const placeholders2 = getPlaceholders(totalInstructors, 2);

  const placeholderText = totalInstructors ? '' : error || 'The information is temporarily missing';

  return (
    <div
      className={clsx(
        'grid min-h-[300px] grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-5 md:gap-y-[30px] xl:grid-cols-3',
        className
      )}
      {...props}
    >
      {instructors.map((instructor, index) => (
        <InstructorCard key={instructor.name} {...instructor} style={{ order: index || '-9999' }} />
      ))}

      {placeholders3.map((_, index) => (
        <PlaceholderCard
          key={`placeholder-3-${index}`}
          text={placeholderText}
          className={clsx('hidden xl:flex', index ? 'order-last' : 'order-0')}
        />
      ))}

      {placeholders2.map((_, index) => (
        <PlaceholderCard
          key={`placeholder-2-${index}`}
          text={placeholderText}
          className="order-last hidden md:flex xl:hidden"
        />
      ))}

      {!!totalInstructors || <PlaceholderCard text={placeholderText} className="flex md:hidden" />}
    </div>
  );
};

export default InstructorCardList;
