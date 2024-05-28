import type {NavMenuItem} from "~/types/nav";
import {LayoutDashboard, Component, LifeBuoy, SquareUser} from "lucide-vue-next";

export const navMenu: NavMenuItem[] = [
	{
		title: 'Dashboard',
		label: 'Dashboard',
		icon: LayoutDashboard,
		link: '/',
		ariaLabel: 'Dashboard',
	},
	{
		title: 'Components',
		label: 'Components',
		icon: Component,
		link: '/components',
		ariaLabel: 'Components',
	}
]

export const navMenuBottom: NavMenuItem[] = [
	{
		title: 'Help',
		label: 'Help',
		icon: LifeBuoy,
		link: '/help',
		ariaLabel: 'Help',
	},
	{
		title: 'Account',
		label: 'Account',
		icon: SquareUser,
		link: '/account',
		ariaLabel: 'Account',
	}
]
