'use client';

import { FC } from 'react';
import { YogaType, YogaTypeCard } from '@/entities/yoga-types';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

interface YogaTypeCardListProps {
  data: [] | YogaType[];
}

const YogaTypeCardList: FC<YogaTypeCardListProps> = ({ data }) => {
  const router = useRouter();

  const handleCardClick = (sessionTypeIds: string[]) => {
    sessionStorage.setItem('sessionTypeIds', JSON.stringify(sessionTypeIds));

    router.push('/?modal=book-session', {
      scroll: false,
    });
  };

  return data.map(({ title, description, label, sessionTypeIds }, index) => (
    <YogaTypeCard
      key={title}
      title={title}
      description={description}
      label={label}
      onClick={() => handleCardClick(sessionTypeIds)}
      className={clsx('row-span-1', { 'order-first': !index })}
    />
  ));
};

export default YogaTypeCardList;
