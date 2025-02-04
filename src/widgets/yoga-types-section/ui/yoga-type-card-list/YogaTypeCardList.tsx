'use client';

import { FC, useState } from 'react';
import { YogaType, YogaTypeCard } from '@/entities/yoga-types';
import { BookSessionModal } from '@/features/book-session';

interface YogaTypeCardListProps {
  data: [] | YogaType[];
}

const YogaTypeCardList: FC<YogaTypeCardListProps> = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {data.map(({ title, description, label }, index) => (
        <YogaTypeCard
          key={title}
          title={title}
          description={description}
          label={label}
          onClick={toggleModal}
          className={`row-span-1 ${index ? '' : 'order-first'}`}
        />
      ))}
      {showModal && <BookSessionModal onClose={toggleModal} />}
    </>
  );
};

export default YogaTypeCardList;
