import { FC } from 'react';
import type { SessionType } from '@/entities/session-types';

interface SessionTypeListProps {
  sessionTypes: SessionType[];
}

const SessionTypeList: FC<SessionTypeListProps> = ({ sessionTypes }) => {
  return (
    <ul className="mb-4 flex flex-col gap-1">
      {sessionTypes.map(({ id, label }) => (
        <li
          key={id}
          className="ml-3 list-disc text-xs font-medium uppercase text-hover"
        >
          {label}
        </li>
      ))}
    </ul>
  );
};

export default SessionTypeList;
