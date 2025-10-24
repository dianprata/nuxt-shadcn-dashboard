import type { AppSettings } from '~/types/appSettings'

declare module 'nuxt/schema' {
  interface AppConfigInput {
    /** App settings */
    appSettings: AppSettings
  }
}

// It is always important to ensure you import/export something when augmenting a type
export {}
