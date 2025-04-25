<template>
    <div class="project-card">
        <div class="image-section">
            <img :src="project.image" :alt="project.title" class="project-image" />
            <div class="tech-badges">
                <span v-for="(techItem, i) in project.tech.split(' · ')" :key="i" class="badge">{{ techItem }}</span>
            </div>
        </div>

        <div class="content-section">
            <h3 class="title">{{ project.title }}</h3>
            <p class="description">{{ project.description }}</p>
        </div>

        <div class="actions">
            <a :href="project.link" target="_blank" class="button-link">View Project →</a>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    project: {
        title: string
        description: string
        image: string
        link: string
        tech: string
    }
}>()
</script>

<style scoped>
.project-card {
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    overflow: hidden;
    background: white;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
    transition: all 0.3s ease;
    height: 100%;
}

.project-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
}

.image-section {
    position: relative;
    height: 200px;
    overflow: hidden;
}

.project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
}

.project-card:hover .project-image {
    transform: scale(1.05);
}

.tech-badges {
    position: absolute;
    bottom: 10px;
    left: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.badge {
    background: rgba(255, 255, 255, 0.85);
    color: #1e3a8a;
    font-size: 0.7rem;
    padding: 0.25rem 0.6rem;
    border-radius: 999px;
    font-weight: 600;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.content-section {
    padding: 1.5rem;
}

.title {
    font-size: 1.3rem;
    font-weight: 800;
    color: #1f2937;
    margin-bottom: 0.5rem;
}

.description {
    font-size: 0.95rem;
    color: #4b5563;
    line-height: 1.6;
}

.actions {
    padding: 1rem 1.5rem;
    margin-top: auto;
    border-top: 1px solid #f3f4f6;
}

.button-link {
    font-weight: 600;
    color: #1976d2;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s ease;
}

.button-link:hover {
    color: #145ca0;
}
</style>