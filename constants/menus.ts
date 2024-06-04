import type { NavMenuItems } from '~/types/nav'

export const navMenu: NavMenuItems = [
  {
    title: 'Dashboard',
    icon: 'i-lucide-layout-dashboard',
    link: '/',
  },
  {
    title: 'Email',
    icon: 'i-lucide-mail',
    link: '/email',
  },
  {
    heading: 'Components',
  },
  {
    title: 'Components',
    icon: 'i-lucide-component',
    children: [
      {
        title: 'Accordion',
        icon: 'i-lucide-circle',
        link: '/components/accordion',
      },
      {
        title: 'Alert',
        icon: 'i-lucide-circle',
        link: '/components/alert',
      },
      {
        title: 'Alert Dialog',
        icon: 'i-lucide-circle',
        link: '/components/alert-dialog',
      },
      {
        title: 'Aspect Ratio',
        icon: 'i-lucide-circle',
        link: '/components/aspect-ratio',
      },
      {
        title: 'Avatar',
        icon: 'i-lucide-circle',
        link: '/components/avatar',
      },
      {
        title: 'Badge',
        icon: 'i-lucide-circle',
        link: '/components/badge',
      },
      {
        title: 'Breadcrumb',
        icon: 'i-lucide-circle',
        link: '/components/breadcrumb',
      },
      {
        title: 'Button',
        icon: 'i-lucide-circle',
        link: '/components/button',
      },
      {
        title: 'Calendar',
        icon: 'i-lucide-circle',
        link: '/components/calendar',
      },
      {
        title: 'Card',
        icon: 'i-lucide-circle',
        link: '/components/card',
      },
      {
        title: 'Carousel',
        icon: 'i-lucide-circle',
        link: '/components/carousel',
      },
      {
        title: 'Checkbox',
        icon: 'i-lucide-circle',
        link: '/components/checkbox',
      },
      {
        title: 'Collapsible',
        icon: 'i-lucide-circle',
        link: '/components/collapsible',
      },
      {
        title: 'Combobox',
        icon: 'i-lucide-circle',
        link: '/components/combobox',
      },
      {
        title: 'Command',
        icon: 'i-lucide-circle',
        link: '/components/command',
      },
      {
        title: 'Context Menu',
        icon: 'i-lucide-circle',
        link: '/components/context-menu',
      },
      {
        title: 'Dialog',
        icon: 'i-lucide-circle',
        link: '/components/dialog',
      },
      {
        title: 'Drawer',
        icon: 'i-lucide-circle',
        link: '/components/drawer',
      },
      {
        title: 'Dropdown Menu',
        icon: 'i-lucide-circle',
        link: '/components/dropdown-menu',
      },
      {
        title: 'Hover Card',
        icon: 'i-lucide-circle',
        link: '/components/hover-card',
      },
      {
        title: 'Input',
        icon: 'i-lucide-circle',
        link: '/components/input',
      },
      {
        title: 'Label',
        icon: 'i-lucide-circle',
        link: '/components/label',
      },
      {
        title: 'Menubar',
        icon: 'i-lucide-circle',
        link: '/components/menubar',
      },
      {
        title: 'Navigation Menu',
        icon: 'i-lucide-circle',
        link: '/components/navigation-menu',
      },
      {
        title: 'Number Field',
        icon: 'i-lucide-circle',
        link: '/components/number-field',
      },
      {
        title: 'Pagination',
        icon: 'i-lucide-circle',
        link: '/components/pagination',
      },
    ],
  },
]

export const navMenuBottom: NavMenuItems = [
  {
    title: 'Help',
    icon: 'i-lucide-life-buoy',
    link: '/help',
  },
  {
    title: 'Account',
    icon: 'i-lucide-square-user',
    link: '/account',
  },
]
