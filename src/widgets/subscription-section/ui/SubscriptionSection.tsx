import { FC } from 'react';
import { Title } from '@/shared/ui/title';
import { SubscriptionForm } from '@/features/subscription';
import clsx from 'clsx';

const SubscriptionSection: FC = () => {
  return (
    <section className="main-container">
      <div
        className={clsx(
          'flex flex-col items-center gap-14 lg:flex-row lg:justify-between',
          'overflow-hidden rounded-3xl bg-cover bg-center',
          'px-7 py-28 sm:py-24 lg:px-12'
        )}
        style={{ backgroundImage: 'url(/images/subscribe-bg.webp)' }}
      >
        <Title type="h4" className="shrink-0 md:text-center lg:text-start">
          STAY IN TOUCH
          <br className="hidden xs:inline" /> WITH
          <span className="text-primary"> THE LOTUS</span>
        </Title>

        <SubscriptionForm />
      </div>
    </section>
  );
};

export default SubscriptionSection;
