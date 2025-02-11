'use client';

import { FC, useState } from 'react';
import { YogaType, YogaTypeCard } from '@/entities/yoga-types';
import { BookSessionModal } from '@/features/book-session';
import clsx from 'clsx';

interface YogaTypeCardListProps {
  data: [] | YogaType[];
}

const YogaTypeCardList: FC<YogaTypeCardListProps> = ({ data }) => {
  const [selectedSessionType, setSelectedSessionType] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (sessionType: string) => {
    setSelectedSessionType(sessionType);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      {data.map(({ title, description, label, sessionType }, index) => (
        <YogaTypeCard
          key={title}
          title={title}
          description={description}
          label={label}
          onClick={() => handleCardClick(sessionType)}
          className={clsx('row-span-1', { 'order-first': !index })}
        />
      ))}
      {showModal && (
        <BookSessionModal
          sessionType={selectedSessionType}
          onClose={handleModalClose}
        />
      )}
    </>
  );
};

export default YogaTypeCardList;
