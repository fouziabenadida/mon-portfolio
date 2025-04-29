<template>
    <section class="projects-section">
        <div class="wave-top">
            <svg viewBox="0 0 1440 320">
                <path fill="#f9fbfc" fill-opacity="1"
                    d="M0,160L60,165.3C120,171,240,181,360,181.3C480,181,600,171,720,154.7C840,139,960,117,1080,117.3C1200,117,1320,139,1380,149.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z">
                </path>
            </svg>
        </div>

        <v-container class="projects-container">
            <h2 class="projects-title">My Recent Projects</h2>
            <p class="projects-sub">Selected works I've built with creativity and code</p>

            <v-row dense class="project-grid">
                <v-col v-for="(project, i) in projects" :key="i" cols="12" sm="6" md="4" class="project-card">
                    <div class="card">
                        <div class="card-image">
                            <img :src="project.image" :alt="project.title" />
                            <div class="tech-list">
                                <span v-for="tech in project.tech" :key="tech">{{ tech }}</span>
                            </div>
                        </div>
                        <div class="card-body">
                            <h3>{{ project.title }}</h3>
                            <p>{{ project.description }}</p>
                            <a :href="project.link" target="_blank">View Project →</a>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script setup lang="ts">
const projects = [
    {
        title: 'Portfolio Website',
        description: 'A personal portfolio to showcase my skills and projects.',
        image:
            'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: 'https://github.com/fouziabenadida/mon-portfolio',
        tech: ['Nuxt', 'Vue', 'Vuetify']
    },
    {
        title: 'E-commerce UI',
        description: 'Frontend for a sleek and modern e-commerce website.',
        image:
            'https://images.unsplash.com/photo-1634406688363-02ff7644d950?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: 'https://github.com/fouziabenadida/ecommerce-ui',
        tech: ['Vue', 'Pinia', 'Tailwind']
    },
    {
        title: 'Visa Bot App',
        description: 'A real-time notification bot for visa appointments.',
        image:
            'https://images.unsplash.com/photo-1655722725332-9925c96dd627?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: 'https://github.com/fouziabenadida/visa-bot',
        tech: ['Node.js', 'Telegram', 'Express']
    }
]
</script>

<style scoped>
.projects-section {
    background: linear-gradient(to bottom, #f1f5f9, #e0f7ff);
    padding: 5rem 1rem;
    position: relative;
    overflow: hidden;
}

.wave-top svg {
    display: block;
    width: 100%;
    height: 80px;
    margin-bottom: -1px;
}

.projects-container {
    max-width: 1180px;
    margin: 0 auto;
    text-align: center;
}

.projects-title {
    font-size: 2.5rem;
    font-weight: 800;
    color: #1f2937;
    margin-bottom: 0.4rem;
    position: relative;
    z-index: 2;
}

.projects-sub {
    font-size: 1rem;
    color: #64748b;
    margin-bottom: 2.8rem;
    position: relative;
    z-index: 2;
}

.project-grid {
    row-gap: 3rem;
    position: relative;
    z-index: 2;
}

.project-card .card {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease;
}

.project-card .card:hover {
    transform: translateY(-6px);
}

.card-image {
    position: relative;
    height: 180px;
    overflow: hidden;
}

.card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.tech-list {
    position: absolute;
    bottom: 0.6rem;
    left: 0.6rem;
    display: flex;
    gap: 0.4rem;
    flex-wrap: wrap;
}

.tech-list span {
    background: #f1f5f9;
    color: #1e293b;
    font-size: 0.7rem;
    padding: 0.25rem 0.5rem;
    border-radius: 9999px;
    font-weight: 600;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.card-body {
    padding: 1.5rem;
    text-align: left;
}

.card-body h3 {
    font-size: 1.15rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #1e2937;
}

.card-body p {
    font-size: 0.95rem;
    color: #475569;
    margin-bottom: 1rem;
}

.card-body a {
    font-size: 0.9rem;
    font-weight: 600;
    color: #1976d2;
    text-decoration: none;
}

.card-body a:hover {
    text-decoration: underline;
}
</style>