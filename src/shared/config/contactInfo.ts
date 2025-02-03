import AddressIcon from '@/shared/assets/icons/address.svg';
import PhoneOutlineIcon from '@/shared/assets/icons/phone-outline.svg';
import EmailIcon from '@/shared/assets/icons/email.svg';
import { FC, SVGProps } from 'react';

interface ContactItem {
  Icon: FC<SVGProps<SVGElement>>;
  text: string;
  href: string;
  label: string;
}

export const CONTACT_INFO: readonly ContactItem[] = [
  {
    Icon: AddressIcon,
    text: '432 Evergreen Terrace \n Springfield, IL 62704',
    href: 'https://maps.google.com/?q=432+Evergreen+Terrace+Springfield+IL+62704',
    label: 'Address',
  },
  {
    Icon: PhoneOutlineIcon,
    text: '(312) 555-7890',
    href: 'tel:+13125557890',
    label: 'Phone',
  },
  {
    Icon: EmailIcon,
    text: 'Contact@lotusglow.com',
    href: 'mailto:Contact@lotusglow.com',
    label: 'Email',
  },
] as const;
