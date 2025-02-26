'use client';

import { FC } from 'react';
import { Title } from '@/shared/ui/title';
import { SubscriptionForm } from '@/features/subscription';
import clsx from 'clsx';
import { useLazyBackground } from '@/shared/hooks/useLazyBackground';

const SubscriptionSection: FC = () => {
  const { ref, loaded } = useLazyBackground();

  return (
    <section className="main-container">
      <div
        ref={ref}
        className={clsx(
          'flex flex-col items-center gap-14 lg:flex-row lg:justify-between',
          'overflow-hidden rounded-3xl bg-cover bg-center',
          'px-7 py-28 sm:py-24 lg:px-12'
        )}
        style={{
          backgroundImage: loaded ? 'url(/images/subscribe-bg.webp)' : 'none',
          opacity: loaded ? 1 : 0,
        }}
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
