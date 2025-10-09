import type { ThemeColor } from '@/constants/themes'

interface Config {
  theme?: ThemeColor
  radius: number
}

export function useCustomize() {
  const config = useCookie<Config>('config', {
    default: () => ({
      theme: 'zinc',
      radius: 0.5,
    }),
  })
  const activeTheme = useCookie<string>('active_theme', {
    default: () => 'default',
  })
  const radiusTheme = useCookie<number>('radius', {
    default: () => 0.5,
  })

  const themeClass = computed(() => `theme-${config.value.theme}`)

  const theme = computed(() => config.value.theme)
  const radius = computed(() => config.value.radius)

  function setTheme(themeName: ThemeColor) {
    config.value.theme = themeName
    activeTheme.value = themeName
  }

  function setRadius(newRadius: number) {
    config.value.radius = newRadius
    radiusTheme.value = newRadius
  }

  return {
    themeClass,
    theme,
    activeTheme: readonly(activeTheme),
    radiusTheme: readonly(radiusTheme),
    setTheme,
    radius,
    setRadius,
  }
}
