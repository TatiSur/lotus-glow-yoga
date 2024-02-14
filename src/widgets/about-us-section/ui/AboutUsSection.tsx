import { FC } from 'react';
import Image from 'next/image';

import { Title } from '@/shared/ui/title';
import { SECTION_IDS } from '@/shared/config';
import aboutUsImg from '@/shared/assets/images/about-us.webp';

const AboutUsSection: FC = () => {
  return (
    <section className="bg-ui-blocks py-14 md:py-20" id={SECTION_IDS.ABOUT_US}>
      <div className="main-container flex flex-col items-center justify-center gap-8 md:flex-row md:justify-between md:gap-14 xl:items-start">
        <div className="flex grow flex-col items-center gap-8 md:items-start md:justify-between xl:flex-row xl:gap-14">
          <Title type="h2">
            THE LOTUS <br />
            <span className="text-primary">CLUB</span>
          </Title>
          <div className="max-w-full text-center text-base text-light-text md:text-start md:text-xl xl:max-w-[386px]">
            At Lotus Glow, we believe in the power of mindful movement and inner
            peace. Our organic yoga practices are designed to nurture your body,
            calm your mind, and elevate your spirit. Join our community to
            experience a holistic approach to wellness in a serene and
            supportive environment. Discover your path to balance and
            tranquility with us.
          </div>
        </div>
        <div className="max-h-[188px] max-w-[336px] shrink-0 lg:h-[238px] lg:w-[427px]">
          <Image
            src={aboutUsImg}
            alt="Woman in yoga pose"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
