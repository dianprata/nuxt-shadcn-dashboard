import type { Component } from 'vue'

export interface NavLink {
  title: string
  label: string
  icon: Component
  link: string
  ariaLabel: string
}

export interface NavSectionTitle {
  heading: string
}

export declare type NavMenuItems = (NavLink | NavSectionTitle)[]
