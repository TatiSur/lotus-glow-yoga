import { FC } from 'react';
import { CONTACT_INFO } from '@/shared/config';
import { Title } from '@/shared/ui/title';

const FooterContacts: FC = () => {
  return (
    <div>
      <Title type="h6" className="mb-[26px]">
        PAY US A VISIT
      </Title>
      <div className="flex flex-col gap-[22px]">
        {CONTACT_INFO.map(({ Icon, text }, index) => {
          return (
            <div key={index} className="flex items-center gap-[13px]">
              <div className="flex h-[22px] w-[34px] shrink-0 items-center justify-center rounded-r-full bg-primary">
                <Icon />
              </div>
              <p className="whitespace-pre-line text-sm text-light-text">{text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FooterContacts;
