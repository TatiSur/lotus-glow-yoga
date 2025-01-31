import { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';

import { InstructorCard, instructors } from '@/entities/instructor';
import PlaceholderCard from '../placeholder-card/PlaceholderCard';

const getPlaceholders = (length: number, columns: number) => {
  const remainder = length % columns;
  return remainder ? new Array(columns - remainder).fill(null) : [];
};

type InstructorCardListProps = HTMLAttributes<HTMLDivElement>;

const InstructorCardList: FC<InstructorCardListProps> = ({ className, ...props }) => {
  const totalInstructors = instructors.length;
  const placeholders3 = getPlaceholders(totalInstructors, 3);
  const placeholders2 = getPlaceholders(totalInstructors, 2);

  return (
    <div
      className={clsx('grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-5 md:gap-y-[30px] xl:grid-cols-3', className)}
      {...props}
    >
      {instructors.map((instructor, index) => (
        <InstructorCard key={instructor.name} {...instructor} style={{ order: index || '-9999' }} />
      ))}

      {placeholders3.map((_, index) => (
        <PlaceholderCard
          key={`placeholder-3-${index}`}
          className={clsx('hidden xl:flex', index ? 'order-last' : 'order-0')}
        />
      ))}

      {placeholders2.map((_, index) => (
        <PlaceholderCard key={`placeholder-2-${index}`} className="order-last hidden md:flex xl:hidden" />
      ))}
    </div>
  );
};

export default InstructorCardList;
