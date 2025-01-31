import { FC } from 'react';
import { Button } from '@/shared/ui/button';
import { InputField } from '@/shared/ui/input-field';

const SubscriptionForm: FC = () => {
  return (
    <form className="flex w-full flex-col items-center justify-end gap-10 md:gap-x-4 md:gap-y-6 xl:flex-row">
      <InputField
        label="Your email"
        type="email"
        placeholder="Eg. Jane Done"
        required
        labelClassName="text-primary"
        wrapperClassName="max-w-[459px] w-full grow"
      />
      <Button variant="primary" className="xs:max-w-[230px]">
        Subscribe
      </Button>
    </form>
  );
};

export default SubscriptionForm;
