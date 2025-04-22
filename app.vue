<template>
  <v-app>
    <Header />
    <v-main>
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
