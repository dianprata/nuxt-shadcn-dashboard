<script setup lang="ts">
import { Activity, CreditCard, DollarSign, Users } from 'lucide-vue-next'
</script>

<template>
  <div class="w-full flex flex-col gap-4">
    <div class="flex items-center justify-between space-y-2">
      <h2 class="text-3xl font-bold tracking-tight">
        Dashboard
      </h2>
      <div class="flex items-center space-x-2">
        <BaseDateRangePicker />
        <UIButton>Download</UIButton>
      </div>
    </div>
    <main class="flex flex-1 flex-col gap-4 md:gap-8">
      <div class="grid gap-4 lg:grid-cols-4 md:grid-cols-2 md:gap-8">
        <UICard>
          <UICardHeader class="flex flex-row items-center justify-between pb-2 space-y-0">
            <UICardTitle class="text-sm font-medium">
              Total Revenue
            </UICardTitle>
            <DollarSign class="h-4 w-4 text-muted-foreground" />
          </UICardHeader>
          <UICardContent>
            <div class="text-2xl font-bold">
              $45,231.89
            </div>
            <p class="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </UICardContent>
        </UICard>
        <UICard>
          <UICardHeader class="flex flex-row items-center justify-between pb-2 space-y-0">
            <UICardTitle class="text-sm font-medium">
              Subscriptions
            </UICardTitle>
            <Users class="h-4 w-4 text-muted-foreground" />
          </UICardHeader>
          <UICardContent>
            <div class="text-2xl font-bold">
              +2350
            </div>
            <p class="text-xs text-muted-foreground">
              +180.1% from last month
            </p>
          </UICardContent>
        </UICard>
        <UICard>
          <UICardHeader class="flex flex-row items-center justify-between pb-2 space-y-0">
            <UICardTitle class="text-sm font-medium">
              Sales
            </UICardTitle>
            <CreditCard class="h-4 w-4 text-muted-foreground" />
          </UICardHeader>
          <UICardContent>
            <div class="text-2xl font-bold">
              +12,234
            </div>
            <p class="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </UICardContent>
        </UICard>
        <UICard>
          <UICardHeader class="flex flex-row items-center justify-between pb-2 space-y-0">
            <UICardTitle class="text-sm font-medium">
              Active Now
            </UICardTitle>
            <Activity class="h-4 w-4 text-muted-foreground" />
          </UICardHeader>
          <UICardContent>
            <div class="text-2xl font-bold">
              +573
            </div>
            <p class="text-xs text-muted-foreground">
              +201 since last hour
            </p>
          </UICardContent>
        </UICard>
      </div>
      <div class="grid gap-4 lg:grid-cols-2 xl:grid-cols-3 md:gap-8">
        <UICard class="xl:col-span-2">
          <UICardHeader class="flex flex-row items-center">
            <UICardTitle>Overview</UICardTitle>
          </UICardHeader>
          <UICardContent>
            <Overview />
          </UICardContent>
        </UICard>
        <UICard>
          <UICardHeader>
            <UICardTitle>Recent Sales</UICardTitle>
          </UICardHeader>
          <UICardContent class="grid gap-8">
            <div class="flex items-center gap-4">
              <UIAvatar class="hidden h-9 w-9 sm:flex">
                <UIAvatarFallback>OM</UIAvatarFallback>
              </UIAvatar>
              <div class="grid gap-1">
                <p class="text-sm font-medium leading-none">
                  Olivia Martin
                </p>
                <p class="text-sm text-muted-foreground">
                  olivia.martin@email.com
                </p>
              </div>
              <div class="ml-auto font-medium">
                +$1,999.00
              </div>
            </div>
            <div class="flex items-center gap-4">
              <UIAvatar class="hidden h-9 w-9 sm:flex">
                <UIAvatarFallback>JL</UIAvatarFallback>
              </UIAvatar>
              <div class="grid gap-1">
                <p class="text-sm font-medium leading-none">
                  Jackson Lee
                </p>
                <p class="text-sm text-muted-foreground">
                  jackson.lee@email.com
                </p>
              </div>
              <div class="ml-auto font-medium">
                +$39.00
              </div>
            </div>
            <div class="flex items-center gap-4">
              <UIAvatar class="hidden h-9 w-9 sm:flex">
                <UIAvatarFallback>IN</UIAvatarFallback>
              </UIAvatar>
              <div class="grid gap-1">
                <p class="text-sm font-medium leading-none">
                  Isabella Nguyen
                </p>
                <p class="text-sm text-muted-foreground">
                  isabella.nguyen@email.com
                </p>
              </div>
              <div class="ml-auto font-medium">
                +$299.00
              </div>
            </div>
            <div class="flex items-center gap-4">
              <UIAvatar class="hidden h-9 w-9 sm:flex">
                <UIAvatarFallback>WK</UIAvatarFallback>
              </UIAvatar>
              <div class="grid gap-1">
                <p class="text-sm font-medium leading-none">
                  William Kim
                </p>
                <p class="text-sm text-muted-foreground">
                  will@email.com
                </p>
              </div>
              <div class="ml-auto font-medium">
                +$99.00
              </div>
            </div>
            <div class="flex items-center gap-4">
              <UIAvatar class="hidden h-9 w-9 sm:flex">
                <UIAvatarFallback>SD</UIAvatarFallback>
              </UIAvatar>
              <div class="grid gap-1">
                <p class="text-sm font-medium leading-none">
                  Sofia Davis
                </p>
                <p class="text-sm text-muted-foreground">
                  sofia.davis@email.com
                </p>
              </div>
              <div class="ml-auto font-medium">
                +$39.00
              </div>
            </div>
          </UICardContent>
        </UICard>
      </div>
    </main>
  </div>
</template>
