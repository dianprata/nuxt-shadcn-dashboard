<script lang="ts" setup>
import type { Mail } from './data/mails'
import type { LinkProp } from '~/components/mail/Nav.vue'
import { useMediaQuery } from '@vueuse/core'
import { Search } from 'lucide-vue-next'
import { ConfigProvider } from 'radix-vue'
import { cn } from '~/lib/utils'

const props = withDefaults(defineProps<MailProps>(), {
  defaultCollapsed: false,
  defaultLayout: () => [18, 82],
})

const useIdFunction = () => useId()

interface MailProps {
  accounts: {
    label: string
    email: string
    icon: string
  }[]
  mails: Mail[]
  defaultLayout?: number[]
  defaultCollapsed?: boolean
  navCollapsedSize: number
}

const isCollapsed = ref(props.defaultCollapsed)
const selectedMail = ref<string | undefined>()
const searchValue = ref('')
const debouncedSearch = refDebounced(searchValue, 250)

const filteredMailList = computed(() => {
  let output: Mail[]
  const searchValue = debouncedSearch.value?.trim()
  if (!searchValue) {
    output = props.mails
  }

  else {
    output = props.mails.filter((item) => {
      return item.name.includes(debouncedSearch.value)
        || item.email.includes(debouncedSearch.value)
        || item.name.includes(debouncedSearch.value)
        || item.subject.includes(debouncedSearch.value)
        || item.text.includes(debouncedSearch.value)
    })
  }

  return output
})

const unreadMailList = computed(() => filteredMailList.value.filter(item => !item.read))

const selectedMailData = computed(() => props.mails.find(item => item.id === selectedMail.value))

const links: LinkProp[] = [
  {
    title: 'Inbox',
    label: '128',
    icon: 'lucide:inbox',
    variant: 'default',
  },
  {
    title: 'Drafts',
    label: '9',
    icon: 'lucide:file',
    variant: 'ghost',
  },
  {
    title: 'Sent',
    label: '',
    icon: 'lucide:send',
    variant: 'ghost',
  },
  {
    title: 'Junk',
    label: '23',
    icon: 'lucide:archive',
    variant: 'ghost',
  },
  {
    title: 'Trash',
    label: '',
    icon: 'lucide:trash',
    variant: 'ghost',
  },
  {
    title: 'Archive',
    label: '',
    icon: 'lucide:archive',
    variant: 'ghost',
  },
]

const links2: LinkProp[] = [
  {
    title: 'Social',
    label: '972',
    icon: 'lucide:user-2',
    variant: 'ghost',
  },
  {
    title: 'Updates',
    label: '342',
    icon: 'lucide:alert-circle',
    variant: 'ghost',
  },
  {
    title: 'Forums',
    label: '128',
    icon: 'lucide:message-square',
    variant: 'ghost',
  },
  {
    title: 'Shopping',
    label: '8',
    icon: 'lucide:shopping-cart',
    variant: 'ghost',
  },
  {
    title: 'Promotions',
    label: '21',
    icon: 'lucide:archive',
    variant: 'ghost',
  },
]

function onCollapse() {
  isCollapsed.value = true
}

function onExpand() {
  isCollapsed.value = false
}

const defaultCollapse = useMediaQuery('(max-width: 768px)')

watch(() => defaultCollapse.value, () => {
  isCollapsed.value = defaultCollapse.value
})
</script>

<template>
  <ConfigProvider :use-id="useIdFunction">
    <TooltipProvider :delay-duration="0">
      <ResizablePanelGroup
        id="resize-panel-group-1"
        direction="horizontal"
        class="h-full max-h-[calc(100dvh-53px-3rem)] items-stretch"
      >
        <ResizablePanel
          id="resize-panel-1"
          :default-size="defaultLayout[0]"
          :collapsed-size="navCollapsedSize"
          collapsible
          :min-size="15"
          :max-size="20"
          :class="cn(isCollapsed && 'min-w-[50px] transition-all duration-300 ease-in-out')"
          @expand="onExpand"
          @collapse="onCollapse"
        >
          <div :class="cn('flex h-[56px] items-center justify-center', isCollapsed ? 'h-[56px]' : 'px-2')">
            <MailAccountSwitcher :is-collapsed="isCollapsed" :accounts="accounts" />
          </div>
          <Separator />
          <MailNav
            :is-collapsed="isCollapsed"
            :links="links"
          />
          <Separator />
          <MailNav
            :is-collapsed="isCollapsed"
            :links="links2"
          />
        </ResizablePanel>
        <ResizableHandle id="resize-handle-1" with-handle />
        <ResizablePanel id="resize-panel-2" :default-size="defaultLayout[1]" :min-size="30">
          <MailDisplay v-if="selectedMailData" :mail="selectedMailData" @close="selectedMail = ''" />
          <Tabs v-else default-value="all">
            <div class="flex items-center px-4 py-2">
              <h1 class="text-xl font-bold">
                Inbox
              </h1>
              <TabsList class="ml-auto">
                <TabsTrigger value="all" class="text-zinc-600 dark:text-zinc-200">
                  All mail
                </TabsTrigger>
                <TabsTrigger value="unread" class="text-zinc-600 dark:text-zinc-200">
                  Unread
                </TabsTrigger>
              </TabsList>
            </div>
            <Separator />
            <div class="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <form>
                <div class="relative">
                  <Search class="absolute left-2 top-2.5 size-4 text-muted-foreground" />
                  <Input v-model="searchValue" placeholder="Search" class="pl-8" />
                </div>
              </form>
            </div>
            <TabsContent value="all" class="m-0">
              <MailList v-model:selected-mail="selectedMail" :items="filteredMailList" />
            </TabsContent>
            <TabsContent value="unread" class="m-0">
              <MailList v-model:selected-mail="selectedMail" :items="unreadMailList" />
            </TabsContent>
          </Tabs>
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  </ConfigProvider>
</template>
