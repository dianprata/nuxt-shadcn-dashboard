export const useAppConf = defineStore('appConf', () => {
  const isBgWhiteCookie = useCookie<boolean>('isBgWhite', {
    default: () => false,
  })

  function backgroundIsWhite(value: boolean = true) {
    isBgWhiteCookie.value = value
  }

  return {
    isBgWhite: computed(() => isBgWhiteCookie.value),
    backgroundIsWhite,
  }
})
