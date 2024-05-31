<script setup lang="ts">
import { accounts, mails } from '@/components/mail/data/mails'

const { changeBackground, resetBackground } = useAppConf()
changeBackground('bg-white')

onUnmounted(() => resetBackground())
</script>

<template>
  <MailLayout
    :accounts="accounts"
    :mails="mails"
    :nav-collapsed-size="4"
  />
</template>
