import { Circle, Component, LayoutDashboard, LifeBuoy, LucideMail, SquareUser } from 'lucide-vue-next'
import type { NavMenuItems } from '~/types/nav'

export const navMenu: NavMenuItems = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    link: '/',
  },
  {
    title: 'Email',
    icon: LucideMail,
    link: '/email',
  },
  {
    heading: 'Components',
  },
  {
    title: 'Components',
    icon: Component,
    children: [
      {
        title: 'Accordion',
        icon: Circle,
        link: '/components/accordion',
      },
      {
        title: 'Alert',
        icon: Circle,
        link: '/components/alert',
      },
      {
        title: 'Alert Dialog',
        icon: Circle,
        link: '/components/alert-dialog',
      },
      {
        title: 'Aspect Ratio',
        icon: Circle,
        link: '/components/aspect-ratio',
      },
      {
        title: 'Avatar',
        icon: Circle,
        link: '/components/avatar',
      },
      {
        title: 'Badge',
        icon: Circle,
        link: '/components/badge',
      },
      {
        title: 'Breadcrumb',
        icon: Circle,
        link: '/components/breadcrumb',
      },
      {
        title: 'Button',
        icon: Circle,
        link: '/components/button',
      },
      {
        title: 'Calendar',
        icon: Circle,
        link: '/components/calendar',
      },
      {
        title: 'Card',
        icon: Circle,
        link: '/components/card',
      },
      {
        title: 'Carousel',
        icon: Circle,
        link: '/components/carousel',
      },
      {
        title: 'Checkbox',
        icon: Circle,
        link: '/components/checkbox',
      },
      {
        title: 'Collapsible',
        icon: Circle,
        link: '/components/collapsible',
      },
      {
        title: 'Combobox',
        icon: Circle,
        link: '/components/combobox',
      },
      {
        title: 'Command',
        icon: Circle,
        link: '/components/command',
      },
      {
        title: 'Context Menu',
        icon: Circle,
        link: '/components/context-menu',
      },
      {
        title: 'Dialog',
        icon: Circle,
        link: '/components/dialog',
      },
      {
        title: 'Drawer',
        icon: Circle,
        link: '/components/drawer',
      },
    ],
  },
]

export const navMenuBottom: NavMenuItems = [
  {
    title: 'Help',
    icon: LifeBuoy,
    link: '/help',
  },
  {
    title: 'Account',
    icon: SquareUser,
    link: '/account',
  },
]
