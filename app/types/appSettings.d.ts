export interface AppSettings {
  sidebar?: {
    collapsible?: 'offcanvas' | 'icon' | 'none'
    side?: 'left' | 'right'
    variant?: 'sidebar' | 'floating' | 'inset'
  }
  theme?: {
    color?: ThemeColor
    type?: ThemeType
  }
}
