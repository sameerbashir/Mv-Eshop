<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const isLoggedIn = ref(false)
const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Dashboard',
    to: '/dashboard',
    icon: 'i-lucide-layout-dashboard'
  },
  {
    label: 'Cart',
    to: '/cart',
    icon: 'i-lucide-shopping-cart'
  },
  {
    label: 'Wish',
    to: '/wish',
    icon: 'i-lucide-heart'
  },
  {
    label: 'Categories',
    to: '/categories',
    icon: 'i-lucide-shopping-basket'
  },
  // {
  //   label: 'Features',
  //   to: '/features',
  //   icon: 'i-lucide-sparkles',
  // },
  // {
  //   label: 'Sale',
  //   to: '/sale',
  //   icon: 'i-lucide-tag'
  // },
  {
    label: 'Need Help?',
    to: '/need-help',
    icon: 'i-lucide-phone'
  },
  {
    label: isLoggedIn.value ? '' : 'Login',
    to: isLoggedIn.value ? '' : '/login',
    icon: isLoggedIn.value ? '' : 'i-lucide-log-in'
  }
  // {
  //   label: 'Login',
  //   to: '/login',
  //   icon: 'i-lucide-log-in'
  // },

])
</script>

<template>
  <UHeader>
    <!-- Title slot with icon and text -->
    <template #title>
      <div class="relative flex items-center gap-2">
        <Icon name="i-lucide-zap" class="size-6 text-warning" />
        <span class="font-bold text-3xl">MV</span>
        <span class="absolute text-xs font-extrabold m-21 -top-21 text-yellow-500">Shop</span>
      </div>
    </template>
    <UNavigationMenu :items="items" class="hidden md:block" />
    <template #right>
      <UColorModeButton />
      <AppDropdown v-if="isLoggedIn" />
      <UButton v-else label="Login" to="/login" icon="i-lucide-log-in" variant="outline" />
    </template>
  </UHeader>
</template>
