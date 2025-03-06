import { FC } from 'react';
import { Title } from '@/shared/ui/title';
import Image from 'next/image';
import YogaTypeCardList from './yoga-type-card-list/YogaTypeCardList';
import { SECTION_IDS } from '@/shared/config';
import { getYogaTypes } from '@/entities/yoga-types';
import womanMeditatingImg from '@/shared/assets/images/woman-meditating.webp';
import womanStretchingImg from '@/shared/assets/images/woman-stretching.webp';

const YogaTypesSection: FC = async () => {
  const { data: yogaTypes, error } = await getYogaTypes();

  return (
    <section
      className="py-14 text-light-text md:py-20"
      id={SECTION_IDS.YOGA_TYPES}
    >
      <div className="main-container">
        <div className="mb-12 flex items-center justify-center gap-20 md:mb-14 md:justify-between">
          <Title type="h2" className="shrink-0">
            DISCOVER <br /> THE LOTUS{' '}
            <span className="text-primary">TYPES</span>
          </Title>
          <hr className="hidden h-px w-full max-w-[719px] rounded-full border border-primary md:block" />
        </div>

        {error ? (
          <div className="flex min-h-[300px] items-center justify-center rounded-[10px] bg-ui-blocks p-5 text-center text-lg text-light-text">
            {error}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-5 md:gap-y-[30px] xl:grid-cols-4">
            <div className="relative overflow-hidden xl:col-span-2">
              <Image
                src={womanMeditatingImg}
                alt="Woman meditating"
                className="absolute left-0 top-0 size-full rounded-[10px] object-cover object-center"
                placeholder="blur"
              />
            </div>

            <YogaTypeCardList data={yogaTypes} />
            <div className="relative overflow-hidden xl:col-span-2">
              <Image
                src={womanStretchingImg}
                alt="Woman stretching"
                className="absolute left-0 top-0 size-full rounded-[10px] object-cover object-center"
                placeholder="blur"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default YogaTypesSection;
