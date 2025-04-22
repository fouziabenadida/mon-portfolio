<template>
    <v-container class="py-10">
        <h1 class="text-center mb-10 text-h4 font-weight-bold animate__animated animate__fadeInDown">
            About Me
        </h1>

        <v-timeline side="end">
            <v-timeline-item v-for="(item, index) in timeline" :key="index" :dot-color="item.color" fill-dot>
                <template #opposite>
                    <strong>{{ item.year }}</strong>
                </template>

                <v-card elevation="2" class="pa-4">
                    <h3 class="text-h6 font-weight-bold">{{ item.title }}</h3>
                    <p>{{ item.description }}</p>
                </v-card>
            </v-timeline-item>
        </v-timeline>
    </v-container>
</template>

<script setup lang="ts">
const timeline = [
    {
        year: '2022',
        title: 'Frontend Developer at Intime Info',
        description: 'Worked on internal web tools using Vue.js and Tailwind.',
        color: 'blue',
    },
    {
        year: '2023',
        title: 'Frontend Developer at Fair Finans',
        description: 'Built modern interfaces with Vue, Pinia, and Vuetify.',
        color: 'green',
    },
    {
        year: '2024',
        title: 'Learning Backend',
        description: 'Exploring Node.js, SQL, and C# with Entity Framework.',
        color: 'pink',
    },
    {
        year: 'Now',
        title: 'Looking for a position in France',
        description: 'Open to remote or relocation opportunities!',
        color: 'purple',
    },
]
</script>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
</style>