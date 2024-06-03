import type { NavMenuItems } from '~/types/nav'

export const navMenu: NavMenuItems = [
  {
    title: 'Dashboard',
    icon: 'lucide:layout-dashboard',
    link: '/',
  },
  {
    title: 'Email',
    icon: 'lucide:mail',
    link: '/email',
  },
  {
    heading: 'Components',
  },
  {
    title: 'Components',
    icon: 'lucide:component',
    children: [
      {
        title: 'Accordion',
        icon: 'lucide:circle',
        link: '/components/accordion',
      },
      {
        title: 'Alert',
        icon: 'lucide:circle',
        link: '/components/alert',
      },
      {
        title: 'Alert Dialog',
        icon: 'lucide:circle',
        link: '/components/alert-dialog',
      },
      {
        title: 'Aspect Ratio',
        icon: 'lucide:circle',
        link: '/components/aspect-ratio',
      },
      {
        title: 'Avatar',
        icon: 'lucide:circle',
        link: '/components/avatar',
      },
      {
        title: 'Badge',
        icon: 'lucide:circle',
        link: '/components/badge',
      },
      {
        title: 'Breadcrumb',
        icon: 'lucide:circle',
        link: '/components/breadcrumb',
      },
      {
        title: 'Button',
        icon: 'lucide:circle',
        link: '/components/button',
      },
      {
        title: 'Calendar',
        icon: 'lucide:circle',
        link: '/components/calendar',
      },
      {
        title: 'Card',
        icon: 'lucide:circle',
        link: '/components/card',
      },
      {
        title: 'Carousel',
        icon: 'lucide:circle',
        link: '/components/carousel',
      },
      {
        title: 'Checkbox',
        icon: 'lucide:circle',
        link: '/components/checkbox',
      },
      {
        title: 'Collapsible',
        icon: 'lucide:circle',
        link: '/components/collapsible',
      },
      {
        title: 'Combobox',
        icon: 'lucide:circle',
        link: '/components/combobox',
      },
      {
        title: 'Command',
        icon: 'lucide:circle',
        link: '/components/command',
      },
      {
        title: 'Context Menu',
        icon: 'lucide:circle',
        link: '/components/context-menu',
      },
      {
        title: 'Dialog',
        icon: 'lucide:circle',
        link: '/components/dialog',
      },
      {
        title: 'Drawer',
        icon: 'lucide:circle',
        link: '/components/drawer',
      },
      {
        title: 'Dropdown Menu',
        icon: 'lucide:circle',
        link: '/components/dropdown-menu',
      },
      {
        title: 'Hover Card',
        icon: 'lucide:circle',
        link: '/components/hover-card',
      },
    ],
  },
]

export const navMenuBottom: NavMenuItems = [
  {
    title: 'Help',
    icon: 'lucide:life-buoy',
    link: '/help',
  },
  {
    title: 'Account',
    icon: 'lucide:square-user',
    link: '/account',
  },
]
