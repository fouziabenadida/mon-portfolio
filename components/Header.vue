<template>
    <div>
        <v-app-bar app fixed flat height="72" class="figma-header">
            <v-container class="header-content">
                <NuxtLink to="/" class="logo">Fuziya<span>.</span></NuxtLink>

                <nav class="nav-links">
                    <NuxtLink v-for="(link, i) in links" :key="i" :to="link.to" class="nav-link"
                        :class="{ active: $route.path === link.to }">
                        {{ link.label }}
                    </NuxtLink>
                </nav>

                <NuxtLink to="/contact" class="cta">Let’s Talk</NuxtLink>
                <button class="burger" @click="menuOpen = !menuOpen">
                    <span v-if="!menuOpen">☰</span>
                    <span v-else>✕</span>
                </button>
            </v-container>
        </v-app-bar>
        <div class="mobile-menu" :class="{ open: menuOpen }">
            <nav>
                <NuxtLink v-for="(link, i) in links" :key="i" :to="link.to" class="mobile-link"
                    @click="menuOpen = false">
                    {{ link.label }}
                </NuxtLink>
                <NuxtLink to="/contact" class="mobile-cta" @click="menuOpen = false">
                    Let’s Talk
                </NuxtLink>
            </nav>
        </div>
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
const menuOpen = ref(false)
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

.burger {
    display: none;
    background: none;
    border: none;
    font-size: 1.6rem;
    cursor: pointer;
}

.desktop-only {
    display: flex;
}

@media (max-width: 768px) {

    .nav-links,
    .cta {
        display: none;
    }

    .burger {
        display: block;
    }

    .mobile-menu {
        position: fixed;
        top: 0;
        right: -100%;
        width: 100%;
        height: 100vh;
        background: #ffffff;
        z-index: 999;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: right 0.3s ease;
    }

    .mobile-menu.open {
        right: 0;
    }

    .mobile-menu nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }

    .mobile-link,
    .mobile-cta {
        font-size: 1.4rem;
        text-decoration: none;
        color: #111827;
        font-weight: 600;
    }

    .mobile-cta {
        background: #1976d2;
        color: white;
        padding: 0.6rem 1.5rem;
        border-radius: 8px;
    }

    .mobile-cta:hover {
        background: #145ca0;
    }
}
</style>
