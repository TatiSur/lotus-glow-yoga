import AddressIcon from '@/shared/assets/icons/address.svg';
import PhoneOutlineIcon from '@/shared/assets/icons/phone-outline.svg';
import EmailIcon from '@/shared/assets/icons/email.svg';
import { FC, SVGProps } from 'react';

interface ContactInfo {
  Icon: FC<SVGProps<SVGElement>>;
  text: string;
}

export const CONTACT_INFO: readonly ContactInfo[] = [
  { Icon: AddressIcon, text: '432 Evergreen Terrace \n Springfield, IL 62704' },
  { Icon: PhoneOutlineIcon, text: '(312) 555-7890' },
  { Icon: EmailIcon, text: 'Contact@lotusglow.com' },
] as const;
