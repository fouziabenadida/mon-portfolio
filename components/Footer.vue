<template>
    <footer class="footer">
        <v-container class="footer-grid">
            <div class="footer-left">
                <h2 class="footer-title">
                    Let’s build something <span>beautiful</span> together.
                </h2>
                <p class="footer-text">
                    Open to freelance, remote collaborations, or cool side projects.
                </p>
                <a href="mailto:hello@fouzia.dev" class="footer-cta">Say Hello →</a>
            </div>

            <div class="footer-right">
                <div v-for="item in socials" :key="item.label" class="footer-icon">
                    <a :href="item.link" target="_blank" :aria-label="item.label">
                        <i :class="item.icon"></i>
                    </a>
                </div>
            </div>
        </v-container>

        <div class="footer-bottom">
            © {{ new Date().getFullYear() }} — Fuziya Candaş. Crafted with ❤️ & Nuxt.
        </div>
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
    padding: 4rem 1.5rem 2rem;
    background: linear-gradient(to bottom right, #f8fafc, #eef2ff);
    border-top: 1px solid #e5e7eb;
    text-align: center;
}

.footer-grid {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}

@media (min-width: 768px) {
    .footer-grid {
        flex-direction: row;
        justify-content: space-between;
        text-align: left;
    }
}

.footer-left {
    max-width: 460px;
}

.footer-title {
    font-size: 2rem;
    font-weight: 800;
    color: #1e293b;
    line-height: 1.3;
}

.footer-title span {
    color: #3b82f6;
}

.footer-text {
    color: #475569;
    font-size: 1rem;
    margin-top: 1rem;
    line-height: 1.6;
}

.footer-cta {
    display: inline-block;
    margin-top: 1.5rem;
    background: #3b82f6;
    color: white;
    padding: 0.6rem 1.4rem;
    font-weight: 600;
    border-radius: 10px;
    text-decoration: none;
    transition: background 0.3s ease;
}

.footer-cta:hover {
    background: #2563eb;
}

.footer-right {
    display: flex;
    gap: 1rem;
}

.footer-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: white;
    display: grid;
    place-items: center;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;
}

.footer-icon:hover {
    transform: translateY(-4px);
}

.footer-icon i {
    font-size: 1.3rem;
    color: #0f172a;
}

.footer-bottom {
    margin-top: 3rem;
    font-size: 0.9rem;
    color: #94a3b8;
}
</style>