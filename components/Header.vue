<template>
    <v-app-bar flat height="72" color="transparent" class="modern-header">
        <v-container class="d-flex justify-space-between align-center">
            <NuxtLink to="/" class="brand">Fuziya</NuxtLink>

            <nav class="menu">
                <NuxtLink v-for="(link, index) in links" :key="index" :to="link.to" class="menu-link"
                    :class="{ active: $route.path === link.to }">
                    {{ link.label }}
                </NuxtLink>
            </nav>
        </v-container>
    </v-app-bar>
</template>

<script setup lang="ts">
const links = [
    { label: 'Home', to: '/' },
    { label: 'Projects', to: '/projects' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
]
</script>

<style scoped>
.modern-header {
    backdrop-filter: blur(12px);
    border-bottom: 1px solid #e5e7eb;
    background: rgba(255, 255, 255, 0.8);
}

.brand {
    font-size: 22px;
    font-weight: 700;
    color: #1976d2;
    text-decoration: none;
    letter-spacing: 0.5px;
}

.menu {
    display: flex;
    gap: 1.5rem;
}

.menu-link {
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;
    color: #374151;
    position: relative;
    transition: color 0.3s ease;
}

.menu-link:hover {
    color: #1976d2;
}

.menu-link.active::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #1976d2;
    border-radius: 4px;
}
</style>