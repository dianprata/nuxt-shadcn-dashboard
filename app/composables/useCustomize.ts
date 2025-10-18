import type { ThemeColor, ThemeType } from '@/constants/themes'

interface Config {
  color?: ThemeColor
  type?: ThemeType
  radius?: number
}

export function useCustomize() {
  const config = useCookie<Config>('config', {
    default: () => ({
      color: 'default',
      type: 'default',
      radius: 0.5,
    }),
  })
  const type = useCookie<string>('theme_type', {
    default: () => 'default',
  })
  const color = useCookie<string>('theme_color', {
    default: () => 'default',
  })
  const radius = useCookie<number>('radius', {
    default: () => 0.5,
  })

  const colorClass = computed(() => `theme-${config.value.color}`)

  function setColor(colorName: ThemeColor) {
    config.value.color = colorName
    color.value = colorName
  }

  function setThemeType(themeType: ThemeType) {
    config.value.type = themeType
    type.value = themeType
  }

  function setRadius(newRadius: number) {
    config.value.radius = newRadius
    radius.value = newRadius
  }

  return {
    colorClass,
    setColor,
    setThemeType,
    setRadius,
    type: readonly(type),
    color: readonly(color),
    radius: readonly(radius),
  }
}
