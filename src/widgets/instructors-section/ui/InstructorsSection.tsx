import { FC } from 'react';
import { Title } from '@/shared/ui/title';
import { SECTION_IDS } from '@/shared/config';
import InstructorCardList from '@/widgets/instructors-section/ui/instructor-card-list/InstructorCardList';
import { getInstructors } from '@/entities/instructor';

const InstructorsSection: FC = async () => {
  const { data: instructors, error } = await getInstructors();

  return (
    <section
      id={SECTION_IDS.INSTRUCTORS}
      className="py-14 text-light-text md:py-20"
    >
      <div className="main-container">
        <div className="mb-12 flex items-center justify-center gap-20 md:mb-14 md:justify-between">
          <Title type="h2" className="shrink-0">
            MEET THE LOTUS
            <br />
            <span className="text-primary">INSTRUCTORS</span>
          </Title>
          <hr className="hidden h-px w-full max-w-[719px] border-primary md:block" />
        </div>

        <InstructorCardList
          className="mt-10"
          instructors={instructors}
          error={error}
        />
      </div>
    </section>
  );
};

export default InstructorsSection;
