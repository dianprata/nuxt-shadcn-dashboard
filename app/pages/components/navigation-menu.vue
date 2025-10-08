<script setup lang="ts">
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'

const components: { title: string, href: string, description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
        'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description:
        'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
        'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
        'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
        'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
]
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="grid gap-2">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">
          Navigation Menu
        </h2>
        <p class="text-muted-foreground">
          A collection of links for navigating websites.
        </p>
      </div>
      <div class="flex gap-2">
        <Button size="xs" variant="outline" class="text-xs" as-child>
          <NuxtLink
            to="https://www.shadcn-vue.com/docs/components/navigation-menu"
            external
            target="_blank"
          >
            <span class="i-radix-icons-code mr-2" />
            Component Source
          </NuxtLink>
        </Button>
        <Button size="xs" variant="outline" class="text-xs" as-child>
          <NuxtLink
            to="https://www.radix-vue.com/components/navigation-menu"
            external
            target="_blank"
          >
            Primitive API Reference
          </NuxtLink>
        </Button>
      </div>
    </div>
    <div class="grid gap-4">
      <Card class="w-full">
        <CardHeader>
          <CardTitle>Basic</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="min-h-100px w-full flex items-center justify-center gap-4 md:min-h-200px">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul class="grid gap-3 p-6 lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)] lg:w-[500px] md:w-[400px]">
                      <li class="row-span-3">
                        <NavigationMenuLink as-child>
                          <NuxtLink
                            class="h-full w-full flex flex-col select-none justify-end rounded-md from-muted/50 to-muted bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md"
                            to="/"
                          >
                            <img src="https://www.radix-vue.com/logo.svg" class="h-6 w-6" alt="radix-logo">
                            <div class="mb-2 mt-4 text-lg font-medium">
                              shadcn/ui
                            </div>
                            <p class="text-sm text-muted-foreground leading-tight">
                              Beautifully designed components built with Radix UI and
                              Tailwind CSS.
                            </p>
                          </NuxtLink>
                        </NavigationMenuLink>
                      </li>
                      <NavigationMenuDemoItem href="/docs" title="Introduction">
                        Re-usable components built using Radix UI and Tailwind CSS.
                      </NavigationMenuDemoItem>
                      <NavigationMenuDemoItem href="/docs/installation" title="Installation">
                        How to install dependencies and structure your app.
                      </NavigationMenuDemoItem>
                      <NavigationMenuDemoItem href="/docs/primitives/typography" title="Typography">
                        Styles for headings, paragraphs, lists...etc
                      </NavigationMenuDemoItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul class="grid w-[400px] gap-3 p-4 md:grid-cols-2 lg:w-[600px] md:w-[500px]">
                      <NavigationMenuDemoItem
                        v-for="component in components"
                        :key="component.title"
                        :title="component.title"
                        :href="component.href"
                      >
                        {{ component.description }}
                      </NavigationMenuDemoItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/docs" :class="navigationMenuTriggerStyle()">
                    Documentation
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<style scoped>

</style>
