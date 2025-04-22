<template>
    <footer class="footer">
        <v-container class="footer-content">
            <div class="left">
                <h2>Let’s build something <span>great</span> together.</h2>
                <p class="sub">Contact me on any platform and let’s talk!</p>
            </div>

            <div class="right">
                <a v-for="item in socials" :key="item.label" :href="item.link" target="_blank" class="social-icon"
                    :aria-label="item.label">
                    <i :class="item.icon"></i>
                </a>
            </div>
        </v-container>

        <p class="copyright">© {{ new Date().getFullYear() }} — Fuziya Candaş</p>
    </footer>
</template>

<script setup lang="ts">
const socials = [
    {
        label: 'GitHub',
        link: 'https://github.com/fouziabenadida',
        icon: 'fab fa-github',
    },
    {
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/in/fuziya-candas',
        icon: 'fab fa-linkedin-in',
    },
    {
        label: 'Email',
        link: 'mailto:hello@fouzia.dev',
        icon: 'fas fa-envelope',
    },
]
</script>

<style scoped>
.footer {
    background: #f8f9fa;
    padding: 3rem 1.5rem 2rem;
    border-top: 1px solid #e5e7eb;
    text-align: center;
}

.footer-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: space-between;
}

@media (min-width: 768px) {
    .footer-content {
        flex-direction: row;
        text-align: left;
    }
}

.left h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1f2937;
}

.left span {
    color: #1976d2;
}

.sub {
    color: #6b7280;
    font-size: 0.95rem;
    margin-top: 0.5rem;
}

.right {
    display: flex;
    gap: 1rem;
}

.social-icon {
    width: 42px;
    height: 42px;
    background: #e2e8f0;
    border-radius: 50%;
    display: grid;
    place-items: center;
    color: #374151;
    font-size: 1.2rem;
    transition: all 0.3s ease;
}

.social-icon:hover {
    background: #1976d2;
    color: white;
}

.copyright {
    font-size: 0.85rem;
    color: #9ca3af;
    margin-top: 2rem;
}
</style>