<script setup lang="ts">
import { useToast } from '~/components/ui/toast'

const { toast } = useToast()

const link = ref('https://shadcn-vue.com/docs/installation')
const { text, copy, copied, isSupported } = useClipboard({ source: link })

async function handleCopyLink() {
  await copy(link.value)
  if (isSupported.value && copied.value) {
    toast({
      title: 'Text Copied',
      description: text.value,
    })
  }
  else {
    toast({
      title: 'Copy failed',
      description: 'Your browser does not support Clipboard API',
    })
  }
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="grid gap-2">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">
          Dialog
        </h2>
        <p class="text-muted-foreground">
          A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.
        </p>
      </div>
      <div class="flex gap-2">
        <Button size="xs" variant="outline" class="text-xs" as-child>
          <NuxtLink
            to="https://www.shadcn-vue.com/docs/components/dialog"
            external
            target="_blank"
          >
            <span class="i-radix-icons-code mr-2" />
            Component Source
          </NuxtLink>
        </Button>
        <Button size="xs" variant="outline" class="text-xs" as-child>
          <NuxtLink
            to="https://www.radix-vue.com/components/dialog"
            external
            target="_blank"
          >
            Primitive API Reference
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
          <div class="min-h-100px w-full flex items-center justify-center gap-4 md:min-h-200px">
            <Dialog>
              <DialogTrigger as-child>
                <Button variant="outline">
                  Edit Profile
                </Button>
              </DialogTrigger>
              <DialogContent class="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div class="grid gap-4 py-4">
                  <div class="grid grid-cols-4 items-center gap-4">
                    <Label for="name" class="text-right">
                      Name
                    </Label>
                    <Input id="name" value="Pedro Duarte" class="col-span-3" />
                  </div>
                  <div class="grid grid-cols-4 items-center gap-4">
                    <Label for="username" class="text-right">
                      Username
                    </Label>
                    <Input id="username" value="@peduarte" class="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">
                    Save changes
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
      <Card class="w-full">
        <CardHeader>
          <CardTitle>Custom close button</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="min-h-100px w-full flex items-center justify-center gap-4 md:min-h-200px">
            <Dialog>
              <DialogTrigger as-child>
                <Button variant="outline">
                  Share
                </Button>
              </DialogTrigger>
              <DialogContent class="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Share link</DialogTitle>
                  <DialogDescription>
                    Anyone who has this link will be able to view this.
                  </DialogDescription>
                </DialogHeader>
                <div class="flex items-center space-x-2">
                  <div class="grid flex-1 gap-2">
                    <Label for="link" class="sr-only">
                      Link
                    </Label>
                    <Input
                      id="link"
                      :default-value="link"
                      read-only
                    />
                  </div>
                  <Button type="submit" size="sm" class="px-3" @click="handleCopyLink">
                    <span class="sr-only">Copy</span>
                    <Icon name="radix-icons:copy" class="h-4 w-4" />
                  </Button>
                </div>
                <DialogFooter class="sm:justify-start">
                  <DialogClose as-child>
                    <Button type="button" variant="secondary">
                      Close
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
      <Card class="w-full">
        <CardHeader>
          <CardTitle>Scroll body</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="min-h-100px w-full flex items-center justify-center gap-4 md:min-h-200px">
            <Dialog>
              <DialogTrigger as-child>
                <Button variant="outline">
                  Edit Profile
                </Button>
              </DialogTrigger>
              <DialogContent class="grid-rows-[auto_minmax(0,1fr)_auto] max-h-[90dvh] p-0 sm:max-w-[425px]">
                <DialogHeader class="p-6 pb-0">
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div class="grid gap-4 overflow-y-auto px-6 py-4">
                  <div class="h-[300dvh] flex flex-col justify-between">
                    <p>
                      This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.
                    </p>

                    <p>This content should appear at the bottom after you scroll.</p>
                  </div>
                </div>
                <DialogFooter class="p-6 pt-0">
                  <Button type="submit">
                    Save changes
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
      <Card class="w-full">
        <CardHeader>
          <CardTitle>Scroll overlay</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="min-h-100px w-full flex items-center justify-center gap-4 md:min-h-200px">
            <Dialog>
              <DialogTrigger as-child>
                <Button variant="outline">
                  Edit Profile
                </Button>
              </DialogTrigger>
              <DialogScrollContent class="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Modal title</DialogTitle>
                  <DialogDescription>
                    Here is modal with overlay scroll
                  </DialogDescription>
                </DialogHeader>
                <div class="grid h-[300dvh] gap-4 py-4">
                  <p>
                    This is some placeholder content to show the scrolling behavior for modals. Instead of repeating the text in the modal, we use an inline style to set a minimum height, thereby extending the length of the overall modal and demonstrating the overflow scrolling. When content becomes longer than the height of the viewport, scrolling will move the modal as needed.
                  </p>
                </div>
                <DialogFooter>
                  <Button type="submit">
                    Save changes
                  </Button>
                </DialogFooter>
              </DialogScrollContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<style scoped>

</style>
