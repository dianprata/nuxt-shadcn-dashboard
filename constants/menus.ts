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
        title: 'Form',
        icon: 'i-lucide-circle',
        link: '/components/form',
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
      {
        title: 'PIN Input',
        icon: 'i-lucide-circle',
        link: '/components/pin-input',
      },
      {
        title: 'Popover',
        icon: 'i-lucide-circle',
        link: '/components/popover',
      },
      {
        title: 'Progress',
        icon: 'i-lucide-circle',
        link: '/components/progress',
      },
      {
        title: 'Radio Group',
        icon: 'i-lucide-circle',
        link: '/components/radio-group',
      },
      {
        title: 'Range Calendar',
        icon: 'i-lucide-circle',
        link: '/components/range-calendar',
      },
      {
        title: 'Resizable',
        icon: 'i-lucide-circle',
        link: '/components/resizable',
      },
      {
        title: 'Scroll Area',
        icon: 'i-lucide-circle',
        link: '/components/scroll-area',
      },
      {
        title: 'Select',
        icon: 'i-lucide-circle',
        link: '/components/select',
      },
      {
        title: 'Separator',
        icon: 'i-lucide-circle',
        link: '/components/separator',
      },
      {
        title: 'Sheet',
        icon: 'i-lucide-circle',
        link: '/components/sheet',
      },
      {
        title: 'Skeleton',
        icon: 'i-lucide-circle',
        link: '/components/skeleton',
      },
      {
        title: 'Slider',
        icon: 'i-lucide-circle',
        link: '/components/slider',
      },
      {
        title: 'Sonner',
        icon: 'i-lucide-circle',
        link: '/components/sonner',
      },
      {
        title: 'Switch',
        icon: 'i-lucide-circle',
        link: '/components/switch',
      },
      {
        title: 'Table',
        icon: 'i-lucide-circle',
        link: '/components/table',
      },
      {
        title: 'Tabs',
        icon: 'i-lucide-circle',
        link: '/components/tabs',
      },
      {
        title: 'Tags Input',
        icon: 'i-lucide-circle',
        link: '/components/tags-input',
      },
      {
        title: 'Textarea',
        icon: 'i-lucide-circle',
        link: '/components/textarea',
      },
      {
        title: 'Toast',
        icon: 'i-lucide-circle',
        link: '/components/toast',
      },
      {
        title: 'Toggle',
        icon: 'i-lucide-circle',
        link: '/components/toggle',
      },
      {
        title: 'Toggle Group',
        icon: 'i-lucide-circle',
        link: '/components/toggle-group',
      },
      {
        title: 'Tooltip',
        icon: 'i-lucide-circle',
        link: '/components/tooltip',
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
