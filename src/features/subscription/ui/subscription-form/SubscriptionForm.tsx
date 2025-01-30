import { FC } from 'react';
import { Button } from '@/shared/ui/button';
import { InputField } from '@/shared/ui/input-field';

const SubscriptionForm: FC = () => {
  return (
    <form className="flex w-full flex-col items-center justify-end gap-[40px] md:flex-row md:gap-4">
      <InputField
        label="Your email"
        type="email"
        placeholder="Eg. Jane Done"
        required
        labelClassName="text-primary"
        wrapperClassName="max-w-[459px] w-full sm:w-3/4 grow"
      />
      <Button variant="primary" className="xs:max-w-[230px]">
        Subscribe
      </Button>
    </form>
  );
};

export default SubscriptionForm;
