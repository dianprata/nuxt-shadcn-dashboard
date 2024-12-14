<script setup lang="ts">
import { cn } from '@/lib/utils'

const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt.js', label: 'Nuxt.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
]

const open = ref(false)
const value = ref('')
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="grid gap-2">
      <h2 class="text-3xl font-bold tracking-tight">
        Combobox
      </h2>
      <p class="text-muted-foreground">
        Autocomplete input and command palette with a list of suggestions.
      </p>
      <div class="flex gap-2">
        <Button size="xs" variant="outline" class="text-xs" as-child>
          <NuxtLink
            to="https://www.shadcn-vue.com/docs/components/combobox"
            external
            target="_blank"
          >
            <span class="i-radix-icons-code mr-2" />
            Component Source
          </NuxtLink>
        </Button>
      </div>
    </div>
    <div class="grid gap-4 md:grid-cols-2">
      <Card class="w-full">
        <CardHeader>
          <CardTitle>Basic</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="flex gap-4 min-h-100px w-full justify-center items-center md:min-h-200px">
            <Popover v-model:open="open">
              <PopoverTrigger as-child>
                <Button
                  variant="outline"
                  role="combobox"
                  :aria-expanded="open"
                  class="w-[200px] justify-between"
                >
                  {{ value
                    ? frameworks.find((framework) => framework.value === value)?.label
                    : "Select framework..." }}
                  <Icon name="radix-icons:caret-sort" class="ml-2 opacity-50 shrink-0 h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent class="p-0 w-[200px]">
                <Command>
                  <CommandInput class="h-9" placeholder="Search framework..." />
                  <CommandEmpty>No framework found.</CommandEmpty>
                  <CommandList>
                    <CommandGroup>
                      <CommandItem
                        v-for="framework in frameworks"
                        :key="framework.value"
                        :value="framework.value"
                        @select="(ev: any) => {
                          if (typeof ev.detail.value === 'string') {
                            value = ev.detail.value
                          }
                          open = false
                        }"
                      >
                        {{ framework.label }}
                        <Icon
                          name="radix-icons:check"
                          :class="cn(
                            'ml-auto h-4 w-4',
                            value === framework.value ? 'opacity-100' : 'opacity-0',
                          )"
                        />
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<style scoped>

</style>
