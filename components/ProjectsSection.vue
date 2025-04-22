<template>
    <section class="projects-section">
        <v-container>
            <h2 class="section-title">My Projects</h2>

            <v-row dense>
                <v-col v-for="(project, i) in projects" :key="i" cols="12" sm="6" md="4">
                    <ProjectCard :project="project" />
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'

const projects = [
    {
        title: 'Portfolio Website',
        description: 'A personal portfolio to showcase my skills and projects.',
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: 'https://github.com/fouziabenadida/portfolio',
        tech: 'Nuxt · Vue · Vuetify'
    },
    {
        title: 'E-commerce UI',
        description: 'Frontend for a sleek and modern e-commerce website.',
        image: 'https://images.unsplash.com/photo-1634406688363-02ff7644d950?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: 'https://github.com/fouziabenadida/ecommerce-ui',
        tech: 'Vue · Pinia · Tailwind'
    },
    {
        title: 'Visa Bot App',
        description: 'A real-time notification bot for visa appointments.',
        image: 'https://images.unsplash.com/photo-1655722725332-9925c96dd627?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: 'https://github.com/fouziabenadida/visa-bot',
        tech: 'Node.js · Telegram · Express'
    },
]
</script>

<style scoped>
.projects-section {
    padding: 5rem 1rem;
    background: #fff;
}

.section-title {
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 3rem;
    color: #1f2937;
}
</style>