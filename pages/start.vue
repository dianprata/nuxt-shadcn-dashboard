<template>
  <div class="start-page">
    <img src="https://i.postimg.cc/k5GNwgXF/logo-b512.png" alt="Logo" class="logo" />
    <h1>Alazab Services</h1>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const showApp = ref<boolean>(false)

function redirectToHome() {
  try {
    showApp.value = true
    router.push('/')
  } catch (error) {
    console.error('Failed to redirect:', error)
  }
}

onMounted(() => {
  setTimeout(redirectToHome, 3000) // 3 seconds delay
})
</script>

<style scoped>
.start-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}

.logo {
  width: var(--logo-width, 200px);
  animation: fadeIn 2s;
}

h1 {
  margin-top: 20px;
  font-size: var(--font-size, 24px);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
