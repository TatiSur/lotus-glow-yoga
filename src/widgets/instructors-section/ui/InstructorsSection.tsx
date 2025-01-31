import { FC } from 'react';
import { Title } from '@/shared/ui/title';
import { InstructorCard, instructors } from '@/entities/instructor';
import { SECTION_IDS } from '@/shared/config';

const InstructorsSection: FC = () => {
  return (
    <section id={SECTION_IDS.INSTRUCTORS} className="py-14 text-light-text md:py-20">
      <div className="main-container">
        <div className="mb-12 flex items-center justify-center gap-20 md:mb-14 md:justify-between">
          <Title type="h2" className="shrink-0">
            MEET THE LOTUS
            <br />
            <span className="text-primary">INSTRUCTORS</span>
          </Title>
          <hr className="hidden h-px w-full max-w-[719px] border-primary md:block" />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-5 md:gap-y-[30px] xl:grid-cols-3">
          {instructors.map((instructor) => (
            <InstructorCard key={instructor.name} {...instructor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
