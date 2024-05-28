export const useNavbar = defineStore('navbar', () => {
	const isOpenCookie = useCookie<boolean>('isOpen', {
		default: () => false,
	})
	const isOpen = computed(() => isOpenCookie.value)
	console.log('isOpen', isOpen.value)

	function toggle () {
		isOpenCookie.value = !isOpenCookie.value
	}

	return {
		isOpen,
		toggle,
	}
})
