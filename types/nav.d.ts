import type { Component } from 'vue'

export interface NavLink {
  title: string
  link: string
  icon?: Component
}

export interface NavSectionTitle {
  heading: string
}

export interface NavGroup {
  title: string
  icon?: Component
  children: NavLink[]
}

export declare type NavMenuItems = (NavLink | NavGroup | NavSectionTitle)[]
