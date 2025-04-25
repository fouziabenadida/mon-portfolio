<template>
  <v-app>
    <Header />
    <v-main class="pa-0">
      <NuxtPage />
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup lang="ts">
import { useHead } from '#imports'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    },
  ],
})
</script>

<style>
html,
body,
#__nuxt {
  height: 100%;
  margin: 0;
  padding: 0;
}

.v-main {
  margin: 0 !important;
  padding: 0 !important;
}
</style>
