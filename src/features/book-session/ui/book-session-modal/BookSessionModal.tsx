import { FC } from 'react';

import { Modal } from '@/shared/ui/modal';
import { getSessionTypes } from '@/entities/session-types/api/getSessionTypes';
import BookSessionForm from '../book-session-form/BookSessionForm';

interface BookSessionModalProps {
  onClose?: () => void;
  className?: string;
}

const BookSessionModal: FC<BookSessionModalProps> = async ({
  onClose,
  className,
}) => {
  const { data: sessionTypes } = await getSessionTypes();

  return (
    <Modal onClose={onClose} className={className}>
      <BookSessionForm sessionTypes={sessionTypes} />
    </Modal>
  );
};

export default BookSessionModal;
