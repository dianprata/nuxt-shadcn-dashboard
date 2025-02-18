declare module 'nuxt/schema' {
  interface AppConfigInput {
    /** Sidebar configuration */
    sidebar: {
      collapsible: 'offcanvas' | 'icon' | 'none'
      side: 'left' | 'right'
      variant: 'sidebar' | 'floating' | 'inset'
    }
  }
}

// It is always important to ensure you import/export something when augmenting a type
export {}
