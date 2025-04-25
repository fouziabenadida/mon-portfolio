<template>
    <v-app-bar flat height="72" class="figma-header">
        <v-container class="header-content">
            <NuxtLink to="/" class="logo">Fuziya<span>.</span></NuxtLink>

            <nav class="nav-links">
                <NuxtLink v-for="(link, i) in links" :key="i" :to="link.to" class="nav-link"
                    :class="{ active: $route.path === link.to }">
                    {{ link.label }}
                </NuxtLink>
            </nav>

            <!-- CTA Button -->
            <NuxtLink to="/contact" class="cta">Let’s Talk</NuxtLink>
        </v-container>
    </v-app-bar>
</template>

<script setup lang="ts">
const links = [
    { label: 'Home', to: '/' },
    { label: 'Projects', to: '/projects' },
    { label: 'About', to: '/about' },
]
</script>

<style scoped>
.figma-header {
    background: #ffffffcc;
    backdrop-filter: blur(10px);
    border-bottom: 1px solid #eee;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
    z-index: 1000;
}

.header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
}

.logo {
    font-size: 1.6rem;
    font-weight: 800;
    text-decoration: none;
    color: #111827;
    letter-spacing: -0.5px;
}

.logo span {
    color: #1976d2;
}

.nav-links {
    display: flex;
    gap: 2rem;
}

.nav-link {
    position: relative;
    font-weight: 500;
    font-size: 0.95rem;
    color: #4b5563;
    text-decoration: none;
    transition: all 0.3s ease;
}

.nav-link:hover {
    color: #1976d2;
}

.nav-link.active::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 100%;
    height: 2px;
    background: #1976d2;
    border-radius: 2px;
}

.cta {
    background: #1976d2;
    color: white;
    padding: 0.5rem 1.2rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.9rem;
    text-decoration: none;
    transition: background 0.3s ease;
}

.cta:hover {
    background: #145ca0;
}
</style>