'use client';

import { FC, useState } from 'react';
import { YogaTypeCard, yogaTypes } from '@/entities/yoga-types';
import { BookSessionModal } from '@/features/book-session';

const YogaTypeCardList: FC = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {yogaTypes.map(({ title, description, label }, index) => (
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
