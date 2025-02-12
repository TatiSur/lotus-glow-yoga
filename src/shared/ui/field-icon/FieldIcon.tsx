import { FC, ReactNode } from 'react';
import clsx from 'clsx';

interface FieldIconProps {
  icon: ReactNode;
  disabled?: boolean;
}

const FieldIcon: FC<FieldIconProps> = ({ icon, disabled }) => (
  <div
    className={clsx(
      'pointer-events-none absolute right-8 top-1/2 -translate-y-1/2',
      disabled ? 'text-gray-500' : 'text-light-text'
    )}
  >
    {icon}
  </div>
);

export default FieldIcon;
