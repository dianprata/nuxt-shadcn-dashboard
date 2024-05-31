<script setup lang="ts">
import { accounts, mails } from '@/components/mail/data/mails'

const { backgroundIsWhite } = useAppConf()
backgroundIsWhite()

onUnmounted(() => backgroundIsWhite(false))
</script>

<template>
  <MailLayout
    :accounts="accounts"
    :mails="mails"
    :nav-collapsed-size="4"
  />
</template>
