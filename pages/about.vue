<template>
    <section class="about-wrapper">
        <div class="about-container">
            <div class="about-intro">
                <h2 class="title">About Me</h2>
                <p class="subtitle">From frontend finesse to backend curiosity, here’s my path 🚀</p>
            </div>

            <div class="about-timeline">
                <div v-for="(item, index) in timeline" :key="index" class="timeline-entry">
                    <div class="entry-line"></div>
                    <div class="entry-dot" :style="{ backgroundColor: item.color }"></div>
                    <div class="entry-content">
                        <span class="entry-year">{{ item.year }}</span>
                        <h3 class="entry-title">{{ item.title }}</h3>
                        <p class="entry-description">{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const timeline = [
    {
        year: '2022',
        title: 'Frontend Developer at Intime Info',
        description: 'Worked on internal web tools using Vue.js and Tailwind.',
        color: '#3B82F6'
    },
    {
        year: '2023',
        title: 'Frontend Developer at Fair Finans',
        description: 'Built modern interfaces with Vue, Pinia, and Vuetify.',
        color: '#10B981'
    },
    {
        year: '2024',
        title: 'Learning Backend',
        description: 'Exploring Node.js, SQL, and C# with Entity Framework.',
        color: '#EC4899'
    },
    {
        year: 'Now',
        title: 'Looking for a position in France',
        description: 'Open to remote or relocation opportunities!',
        color: '#8B5CF6'
    },
]
</script>

<style scoped>
.about-wrapper {
    padding: 6rem 1.5rem;
    background: linear-gradient(to right, #f0f4ff, #fafafa);
    display: flex;
    justify-content: center;
}

.about-container {
    max-width: 900px;
    width: 100%;
}

.about-intro {
    text-align: center;
    margin-bottom: 3rem;
}

.title {
    font-size: 2.8rem;
    font-weight: 800;
    color: #1e293b;
}

.subtitle {
    font-size: 1.1rem;
    color: #64748b;
    margin-top: 0.5rem;
}

.about-timeline {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    position: relative;
}

.timeline-entry {
    display: flex;
    align-items: flex-start;
    position: relative;
    padding-left: 2.5rem;
}

.entry-line {
    position: absolute;
    left: 10px;
    top: 0;
    width: 3px;
    height: 100%;
    background-color: #e2e8f0;
    z-index: 0;
}

.entry-dot {
    position: absolute;
    left: 2px;
    top: 4px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 3px solid #fff;
    box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.03);
    z-index: 2;
}

.entry-content {
    background: #fff;
    padding: 1.5rem 1.8rem;
    border-radius: 16px;
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.05);
    flex: 1;
    z-index: 1;
}

.entry-year {
    font-size: 0.9rem;
    font-weight: 700;
    color: #6b7280;
    margin-bottom: 0.2rem;
    display: block;
}

.entry-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 0.6rem;
}

.entry-description {
    font-size: 0.95rem;
    color: #475569;
    line-height: 1.6;
}
</style>