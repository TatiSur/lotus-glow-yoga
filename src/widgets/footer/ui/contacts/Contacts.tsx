import { FC } from 'react';
import { CONTACT_INFO } from '@/shared/config';
import { Title } from '@/shared/ui/title';

const Contacts: FC = () => {
  return (
    <div>
      <Title size="h6" type="h2" className="mb-[26px]">
        PAY US A VISIT
      </Title>
      <div className="flex flex-col gap-[22px]">
        {CONTACT_INFO.map(({ Icon, text, href, label }, index) => {
          return (
            <div key={index} className="flex items-center gap-[13px]">
              <a
                className="flex h-[22px] w-[34px] shrink-0 items-center justify-center rounded-r-full bg-primary"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon aria-hidden="true" />
              </a>
              <p className="whitespace-pre-line text-sm text-light-text">
                {text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contacts;
