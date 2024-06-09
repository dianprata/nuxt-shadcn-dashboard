export const useNavbar = defineStore('navbar', () => {
  const isOpenCookie = useCookie<boolean>('isOpen', {
    default: () => true,
  })

  function toggle() {
    isOpenCookie.value = !isOpenCookie.value
  }

  return {
    isOpen: computed(() => isOpenCookie.value),
    toggle,
  }
})
