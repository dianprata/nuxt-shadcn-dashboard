import type { AppSettings } from '~/types/appSettings'

import { createDefu } from 'defu'

const customDefu = createDefu((obj, key, value) => {
  if (Array.isArray(value) && value.every((x: any) => typeof x === 'string')) {
    obj[key] = value
    return true
  }
})

const defaultAppSettings: AppSettings = {
  sidebar: {
    collapsible: 'offcanvas',
    side: 'left',
    variant: 'sidebar',
  },
  theme: {
    color: 'default',
    type: 'default',
  },
}

export function useAppSettings() {
  const { appSettings } = useAppConfig()

  const processedConfig = customDefu(appSettings, defaultAppSettings)

  const cookieAppSettings = useCookie<AppSettings>('app_settings', {
    default: () => processedConfig,
  })

  const updateAppSettings = (settings: AppSettings) => {
    cookieAppSettings.value = customDefu(settings, cookieAppSettings.value)
  }

  return {
    updateAppSettings,
    sidebar: computed(() => cookieAppSettings.value.sidebar),
    theme: computed(() => cookieAppSettings.value.theme),
  }
}
