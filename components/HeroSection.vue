<template>
    <section class="hero">
        <v-container class="hero-inner">
            <div class="hero-left">
                <p class="greeting">Hello 👋</p>
                <h1 class="name">I'm <span>Fouzia</span>,<br />Frontend Developer</h1>
                <p class="description">
                    I design and code beautifully simple things,<br />
                    and I love what I do.
                </p>
                <v-btn color="primary" class="cta" to="/projects">See My Work</v-btn>
            </div>

            <div class="hero-right">
                <img src="https://cdn.dribbble.com/userupload/9506053/file/original-cf8c9f6b6fc3e5e801d8e9ea1c4a505c.png?resize=1024x768"
                    alt="Developer Illustration" class="hero-img" />
            </div>
        </v-container>
    </section>
</template>

<style scoped>
.hero {
    background-color: #f9fafc;
    padding: 5rem 1rem;
}

.hero-inner {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
}

@media (min-width: 960px) {
    .hero-inner {
        flex-direction: row;
    }
}

.hero-left {
    max-width: 500px;
    text-align: center;
}

@media (min-width: 960px) {
    .hero-left {
        text-align: left;
    }
}

.greeting {
    font-size: 1.2rem;
    color: #6366f1;
    font-weight: 600;
}

.name {
    font-size: 2.75rem;
    font-weight: 800;
    margin: 1rem 0;
    color: #1f2937;
}

.name span {
    color: #1976d2;
}

.description {
    font-size: 1.1rem;
    color: #4b5563;
    margin-bottom: 2rem;
    line-height: 1.6;
}

.cta {
    font-weight: 600;
    text-transform: none;
    border-radius: 8px;
}

.hero-right {
    display: flex;
    justify-content: center;
}

.hero-img {
    width: 320px;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
}
</style>