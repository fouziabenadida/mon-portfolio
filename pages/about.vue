<template>
    <section class="about-section">
        <v-container class="about-container">
            <div class="about-header">
                <h2 class="about-title">About Me</h2>
                <p class="about-subtitle">From design to deployment, this is my journey 🚀</p>
            </div>

            <div class="timeline-list">
                <div v-for="(item, index) in timeline" :key="index" class="timeline-card"
                    :class="{ 'alternate': index % 2 !== 0 }">
                    <div class="icon-wrapper">
                        <span class="icon-circle" :style="{ backgroundColor: item.color }">
                            <i class="material-icons">{{ item.icon }}</i>
                        </span>
                    </div>
                    <div class="card-content">
                        <span class="year">{{ item.year }}</span>
                        <h3 class="card-title">{{ item.title }}</h3>
                        <p class="card-text">{{ item.description }}</p>
                    </div>
                </div>
            </div>

            <div class="about-footer">
                <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80"
                    alt="Fouzia Avatar" class="avatar" />
                <a href="/cv/Fuziya-CV.pdf" download class="btn-download">
                    📄 Download My CV
                </a>
            </div>
        </v-container>
    </section>
</template>

<script setup lang="ts">
const timeline = [
    {
        year: '2022',
        title: 'Frontend Developer at Intime Info',
        description: 'Worked on internal web tools using Vue.js and Tailwind.',
        color: '#3B82F6',
        icon: 'code'
    },
    {
        year: '2023',
        title: 'Frontend Developer at Fair Finans',
        description: 'Built modern interfaces with Vue, Pinia, and Vuetify.',
        color: '#10B981',
        icon: 'web'
    },
    {
        year: '2024',
        title: 'Learning Backend',
        description: 'Exploring Node.js, SQL, and C# with Entity Framework.',
        color: '#EC4899',
        icon: 'storage'
    },
    {
        year: 'Now',
        title: 'Looking for a position in France',
        description: 'Open to remote or relocation opportunities!',
        color: '#8B5CF6',
        icon: 'public'
    }
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

.about-section {
    background: radial-gradient(circle at top left, #f0f4ff 30%, #fafafa);
    padding: 6rem 1.5rem 4rem;
    display: flex;
    justify-content: center;
}

.about-container {
    max-width: 900px;
    width: 100%;
}

.about-header {
    text-align: center;
    margin-bottom: 3rem;
}

.about-title {
    font-size: 2.8rem;
    font-weight: 800;
    color: #1e293b;
}

.about-subtitle {
    font-size: 1.05rem;
    color: #64748b;
    margin-top: 0.5rem;
}

.timeline-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.timeline-card {
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;
    background: white;
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.06);
    transition: transform 0.3s ease;
}

.timeline-card.alternate {
    flex-direction: row-reverse;
}

.timeline-card:hover {
    transform: translateY(-6px);
}

.icon-wrapper {
    flex-shrink: 0;
}

.icon-circle {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 24px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card-content {
    flex: 1;
}

.year {
    font-weight: 700;
    color: #94a3b8;
    font-size: 0.85rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    display: block;
}

.card-title {
    font-size: 1.4rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 0.3rem;
}

.card-text {
    font-size: 0.95rem;
    color: #475569;
    line-height: 1.6;
}

.about-footer {
    text-align: center;
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
}

.avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.btn-download {
    background: linear-gradient(to right, #6366f1, #3b82f6);
    color: white;
    padding: 0.65rem 1.6rem;
    border-radius: 10px;
    font-weight: 600;
    text-decoration: none;
    font-size: 0.95rem;
    transition: background 0.3s ease;
}

.btn-download:hover {
    background: #3b82f6;
}
</style>