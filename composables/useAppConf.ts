export const useAppConf = defineStore('appConf', () => {
  const isBgWhiteCookie = useCookie<boolean>('isBgWhite', {
    default: () => false,
  })
  const isBgWhite = computed(() => isBgWhiteCookie.value)

  function backgroundIsWhite(value: boolean = true) {
    isBgWhiteCookie.value = value
  }

  return { isBgWhite, backgroundIsWhite }
})
