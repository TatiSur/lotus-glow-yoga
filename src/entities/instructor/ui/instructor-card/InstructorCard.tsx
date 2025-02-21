import { FC, HTMLAttributes } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import type { Instructor } from '@/entities/instructor';
import type { SessionType } from '@/entities/session-types';
import { Title } from '@/shared/ui/title';
import SocialLinks from '../social-links/SocialLinks';
import SessionTypeList from '../session-type-list/SessionTypeList';

interface InstructorCardProps
  extends Omit<Instructor, 'id' | 'sessionTypeIds'>,
    HTMLAttributes<HTMLDivElement> {
  sessionTypes: SessionType[];
}

const InstructorCard: FC<InstructorCardProps> = ({
  name,
  photo,
  description,
  socialLinks,
  sessionTypes,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        'flex flex-col rounded-[10px] bg-ui-blocks px-9 pb-10 pt-7',
        className
      )}
      {...props}
    >
      <div className="flex flex-wrap gap-x-5">
        <div className="mb-7">
          <Image
            src={photo}
            alt={name}
            width={195}
            height={143}
            className="h-auto w-full max-w-[195px] object-cover"
          />
        </div>
        <div className="min-w-[188px]">
          <Title
            type="h3"
            size="h5"
            className="mb-5 !text-start uppercase text-primary"
          >
            {name}
          </Title>
          <SessionTypeList sessionTypes={sessionTypes} />
        </div>
      </div>
      <p className="grow pb-9 text-sm text-light-text md:pb-[46px]">
        {description}
      </p>
      <SocialLinks links={socialLinks} />
    </div>
  );
};

export default InstructorCard;
