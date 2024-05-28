import type { Component } from 'vue'

export interface NavMenuItem {
	title: string
	label: string
	icon: Component
	link: string
	ariaLabel: string
}
