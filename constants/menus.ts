import { Component, LayoutDashboard, LifeBuoy, LucideMail, SquareUser } from 'lucide-vue-next'
import type { NavMenuItems } from '~/types/nav'

export const navMenu: NavMenuItems = [
  {
    title: 'Dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
    link: '/',
    ariaLabel: 'Dashboard',
  },
  {
    title: 'Email',
    label: 'Email',
    icon: LucideMail,
    link: '/email',
    ariaLabel: 'Email',
  },
  {
    heading: 'Components',
  },
  {
    title: 'Accordion',
    label: 'Accordion',
    icon: Component,
    link: '/components/accordion',
    ariaLabel: 'Accordion',
  },
  {
    title: 'Alert',
    label: 'Alert',
    icon: Component,
    link: '/components/alert',
    ariaLabel: 'Alert',
  },
  {
    title: 'Alert Dialog',
    label: 'Alert Dialog',
    icon: Component,
    link: '/components/alert-dialog',
    ariaLabel: 'Alert Dialog',
  },
  {
    title: 'Aspect Ratio',
    label: 'Aspect Ratio',
    icon: Component,
    link: '/components/aspect-ratio',
    ariaLabel: 'Aspect Ratio',
  },
  {
    title: 'Avatar',
    label: 'Avatar',
    icon: Component,
    link: '/components/avatar',
    ariaLabel: 'Avatar',
  },
  {
    title: 'Badge',
    label: 'Badge',
    icon: Component,
    link: '/components/badge',
    ariaLabel: 'Badge',
  },
  {
    title: 'Breadcrumb',
    label: 'Breadcrumb',
    icon: Component,
    link: '/components/breadcrumb',
    ariaLabel: 'Breadcrumb',
  },
  {
    title: 'Button',
    label: 'Button',
    icon: Component,
    link: '/components/button',
    ariaLabel: 'Button',
  },
  {
    title: 'Calendar',
    label: 'Calendar',
    icon: Component,
    link: '/components/calendar',
    ariaLabel: 'Calendar',
  },
]

export const navMenuBottom: NavMenuItems = [
  {
    title: 'Help',
    label: 'Help',
    icon: LifeBuoy,
    link: '/help',
    ariaLabel: 'Help',
  },
  {
    title: 'Account',
    label: 'Account',
    icon: SquareUser,
    link: '/account',
    ariaLabel: 'Account',
  },
]
