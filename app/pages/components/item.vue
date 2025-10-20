<script setup lang="ts">
import { BadgeCheckIcon, ChevronRightIcon, Plus } from 'lucide-vue-next'
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="grid gap-2">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">
          Item
        </h2>
        <p class="text-muted-foreground">
          A versatile component that you can use to display any content.
        </p>
      </div>
      <div class="flex gap-2">
        <Badge variant="secondary" class="rounded-full" as-child>
          <NuxtLink
            to="https://www.shadcn-vue.com/docs/components/item"
            external
            target="_blank"
          >
            Component Source
            <Icon name="tabler:arrow-up-right" />
          </NuxtLink>
        </Badge>
      </div>
    </div>
    <div class="grid gap-4 md:grid-cols-2">
      <Card class="w-full">
        <CardHeader>
          <CardTitle>Basic</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="flex w-full max-w-md flex-col gap-6 mx-auto">
            <Item variant="outline">
              <ItemContent>
                <ItemTitle>Basic Item</ItemTitle>
                <ItemDescription>
                  A simple item with title and description.
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button variant="outline" size="sm">
                  Action
                </Button>
              </ItemActions>
            </Item>
            <Item variant="outline" size="sm" as-child>
              <a href="#">
                <ItemMedia>
                  <BadgeCheckIcon class="size-5" />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Your profile has been verified.</ItemTitle>
                </ItemContent>
                <ItemActions>
                  <ChevronRightIcon class="size-4" />
                </ItemActions>
              </a>
            </Item>
          </div>
        </CardContent>
      </Card>
      <Card class="w-full">
        <CardHeader>
          <CardTitle>Variants</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="flex flex-col gap-6">
            <Item>
              <ItemContent>
                <ItemTitle>Default Variant</ItemTitle>
                <ItemDescription>
                  Standard styling with subtle background and borders.
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button variant="outline" size="sm">
                  Open
                </Button>
              </ItemActions>
            </Item>
            <Item variant="outline">
              <ItemContent>
                <ItemTitle>Outline Variant</ItemTitle>
                <ItemDescription>
                  Outlined style with clear borders and transparent background.
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button variant="outline" size="sm">
                  Open
                </Button>
              </ItemActions>
            </Item>
            <Item variant="muted">
              <ItemContent>
                <ItemTitle>Muted Variant</ItemTitle>
                <ItemDescription>
                  Subdued appearance with muted colors for secondary content.
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button variant="outline" size="sm">
                  Open
                </Button>
              </ItemActions>
            </Item>
          </div>
        </CardContent>
      </Card>
      <Card class="w-full">
        <CardHeader>
          <CardTitle>Size</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="flex w-full max-w-md flex-col gap-6 mx-auto">
            <Item variant="outline">
              <ItemContent>
                <ItemTitle>Basic Item</ItemTitle>
                <ItemDescription>
                  A simple item with title and description.
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button variant="outline" size="sm">
                  Action
                </Button>
              </ItemActions>
            </Item>
            <Item variant="outline" size="sm" as-child>
              <a href="#">
                <ItemMedia>
                  <BadgeCheckIcon class="size-5" />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Your profile has been verified.</ItemTitle>
                </ItemContent>
                <ItemActions>
                  <ChevronRightIcon class="size-4" />
                </ItemActions>
              </a>
            </Item>
          </div>
        </CardContent>
      </Card>
      <Card class="w-full">
        <CardHeader>
          <CardTitle>Avatar</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="flex w-full max-w-lg flex-col gap-6 mx-auto">
            <Item variant="outline">
              <ItemMedia>
                <Avatar class="size-10">
                  <AvatarImage src="https://github.com/evilrabbit.png" />
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Evil Rabbit</ItemTitle>
                <ItemDescription>Last seen 5 months ago</ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button
                  size="icon-sm"
                  variant="outline"
                  class="rounded-full"
                  aria-label="Invite"
                >
                  <Plus />
                </Button>
              </ItemActions>
            </Item>
            <Item variant="outline">
              <ItemMedia>
                <div class="*:ring-background flex -space-x-2 *:ring-2 *:grayscale">
                  <Avatar class="hidden sm:flex">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar class="hidden sm:flex">
                    <AvatarImage
                      src="https://github.com/maxleiter.png"
                      alt="@maxleiter"
                    />
                    <AvatarFallback>LR</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/evilrabbit.png"
                      alt="@evilrabbit"
                    />
                    <AvatarFallback>ER</AvatarFallback>
                  </Avatar>
                </div>
              </ItemMedia>
              <ItemContent>
                <ItemTitle>No Team Members</ItemTitle>
                <ItemDescription>
                  Invite your team to collaborate on this project.
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button size="sm" variant="outline">
                  Invite
                </Button>
              </ItemActions>
            </Item>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<style scoped>

</style>
