import { FC } from 'react';
import { Title } from '@/shared/ui/title';
import Image from 'next/image';
import YogaTypeCardList from './yoga-type-card-list/YogaTypeCardList';
import { SECTION_IDS } from '@/shared/config';

const YogaTypesSection: FC = () => {
  return (
    <section className="py-14 text-light-text md:py-20" id={SECTION_IDS.YOGA_TYPES}>
      <div className="main-container">
        <div className="mb-12 flex items-center justify-center gap-20 md:mb-14 md:justify-between">
          <Title type="h2" className="shrink-0">
            DISCOVER <br /> THE LOTUS <span className="text-primary">TYPES</span>
          </Title>
          <hr className="hidden h-px w-full max-w-[719px] border-primary md:block" />
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-5 md:gap-y-[30px] xl:grid-cols-4">
          <div className="xl:col-span-2">
            <Image
              src="/images/woman-meditating.webp"
              alt="Woman meditating"
              width={650}
              height={325}
              className="h-full rounded-[10px] object-cover"
            />
          </div>
          <YogaTypeCardList />
          <div className="xl:col-span-2">
            <Image
              src="/images/woman-stretching.webp"
              alt="Woman stretching"
              width={647}
              height={325}
              className="h-full rounded-[10px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default YogaTypesSection;
