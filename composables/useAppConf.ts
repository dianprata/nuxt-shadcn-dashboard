export const useAppConf = defineStore('appConf', () => {
  const bgAppCookie = useCookie<string>('bgApp', {
    default: () => 'bg-muted/50',
  })
  const backgroundApp = computed(() => bgAppCookie.value)

  function changeBackground(value: string) {
    bgAppCookie.value = value
  }

  function resetBackground() {
    bgAppCookie.value = 'bg-muted/50'
  }

  return { backgroundApp, changeBackground, resetBackground }
})
