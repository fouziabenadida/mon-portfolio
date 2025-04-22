<template>
    <div class="card" @click="openLink">
        <div class="image-wrapper">
            <img :src="project.image" :alt="project.title" class="card-image" />
            <div class="overlay">
                <span class="tech">{{ project.tech }}</span>
            </div>
        </div>

        <div class="card-body">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
        </div>

        <div class="card-footer">
            <a :href="project.link" target="_blank">View Project →</a>
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

const openLink = () => {
    window.open(props.project.link, '_blank')
}
</script>

<style scoped>
.card {
    border-radius: 16px;
    overflow: hidden;
    background: white;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
    cursor: pointer;
}

.card:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
}

.image-wrapper {
    position: relative;
    height: 180px;
    overflow: hidden;
}

.card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
}

.card:hover .card-image {
    transform: scale(1.1);
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(120deg, #1976d2cc, #42a5f5cc);
    padding: 6px 12px;
    color: white;
    font-size: 0.75rem;
    font-weight: 600;
    border-bottom-right-radius: 12px;
}

.card-body {
    padding: 1.5rem;
    flex-grow: 1;
}

.card-body h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #1f2937;
}

.card-body p {
    font-size: 0.95rem;
    color: #4b5563;
}

.card-footer {
    padding: 1rem 1.5rem;
    border-top: 1px solid #f3f4f6;
}

.card-footer a {
    color: #1976d2;
    font-weight: 600;
    font-size: 0.9rem;
    text-decoration: none;
    transition: color 0.3s ease;
}

.card-footer a:hover {
    color: #145ca0;
}
</style>