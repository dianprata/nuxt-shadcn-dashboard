export const useNavbar = defineStore('navbar', () => {
  const isOpenCookie = useCookie<boolean>('isOpen', {
    default: () => true,
  })
  const showSidebarCookie = useCookie<boolean>('showSidebar', {
    default: () => false,
  })
  const isOpen = computed(() => isOpenCookie.value)
  const showSidebar = computed(() => showSidebarCookie.value)

  function toggle() {
    isOpenCookie.value = !isOpenCookie.value
  }

  return {
    isOpenCookie,
    isOpen,
    showSidebarCookie,
    showSidebar,
    toggle,
  }
})
