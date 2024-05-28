export const useNavbar = defineStore('navbar', () => {
	const isOpenCookie = useCookie<boolean>('isOpen', {
		default: () => true,
	})
	const isOpen = computed(() => isOpenCookie.value)

	function toggle () {
		isOpenCookie.value = !isOpenCookie.value
	}

	return {
		isOpenCookie,
		isOpen,
		toggle,
	}
})
