<template>
    <section class="tech-stack">
        <div class="wave-top">
            <svg viewBox="0 0 1440 320">
                <path fill="#f9fbfc" fill-opacity="1"
                    d="M0,64L60,85.3C120,107,240,149,360,170.7C480,192,600,192,720,181.3C840,171,960,149,1080,128C1200,107,1320,85,1380,74.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z">
                </path>
            </svg>
        </div>

        <h2 class="section-title">Tech Stack</h2>
        <p class="section-sub">Tools I use daily to build modern, accessible web apps</p>

        <div class="logos">
            <div class="tech" v-for="tech in technologies" :key="tech.label">
                <img :src="tech.icon" :alt="tech.label" />
                <span>{{ tech.label }}</span>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const technologies = [
    { label: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { label: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { label: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { label: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { label: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { label: 'Nuxt.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg' },
    { label: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { label: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' }
]
</script>

<style scoped>
.tech-stack {
    padding: 10rem 1.5rem 4rem;
    background: linear-gradient(to bottom right, #f1f5f9, #e5f4fd);
    text-align: center;
    position: relative;
    overflow: hidden;
}

.wave-top {
    position: absolute;
    top: -1px;
    left: 0;
    width: 100%;
    z-index: 1;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 800;
    color: #1e293b;
    margin-bottom: 0.5rem;
    position: relative;
    z-index: 2;
}

.section-sub {
    font-size: 1rem;
    color: #64748b;
    margin-bottom: 3rem;
    z-index: 2;
}

.logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    position: relative;
    z-index: 2;
}

.tech {
    background: white;
    border-radius: 16px;
    padding: 1.2rem 1rem 0.7rem;
    width: 110px;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease;
}

.tech:hover {
    transform: translateY(-6px);
}

.tech img {
    width: 40px;
    height: 40px;
    margin-bottom: 0.6rem;
}

.tech span {
    font-size: 0.9rem;
    font-weight: 600;
    color: #334155;
}
</style>