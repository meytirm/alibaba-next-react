import { MenuItem } from '@/types/menu-items';

export const menuItems: MenuItem[] = [
  {
    label: 'بلیط',
    href: '/',
    subMenuItems: [
      {
        label: 'پرواز داخلی',
        href: '/',
      },
      {
        label: 'پرواز خارجی',
        href: 'iranout',
      },
      {
        label: 'قطار',
        href: 'train-ticket',
      },
      {
        label: 'اتوبوس',
        href: 'bus-ticket',
      },
    ],
  },
  {
    label: 'اقامت',
    href: '/',
    subMenuItems: [
      {
        label: 'هتل',
        href: '/hotel',
      },
      {
        label: 'ویلا و اقامتگاه',
        href: '/accommodation',
      },
    ],
  },
  {
    label: 'تور',
    href: '/tour',
  },
  {
    label: 'ویزا',
    href: '/visa',
  },
  {
    label: 'پنل آژانسی',
    href: '/',
  },
  {
    label: 'بیشتر',
    href: '/',
    subMenuItems: [
      {
        label: 'علی بابا پلاس',
        href: '/alibaba-plus',
      },
    ],
  },
];
