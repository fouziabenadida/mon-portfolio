<template>
    <section class="contact-section">
        <v-container class="contact-container">
            <h1 class="contact-title">Let’s Talk</h1>
            <p class="contact-subtitle">Feel free to reach out for collaborations or just a friendly hello! 👋</p>

            <div class="contact-links">
                <a href="mailto:hello@fouzia.dev" class="contact-link">📧 hello@fouzia.dev</a>
                <a href="https://www.linkedin.com/in/fuziya-candas" target="_blank" class="contact-link">🔗 LinkedIn</a>
                <a href="https://github.com/fouziabenadida" target="_blank" class="contact-link">🐱 GitHub</a>
            </div>
        </v-container>
    </section>
</template>

<style scoped>
.contact-section {
    padding: 6rem 1.5rem 4rem;
    text-align: center;
    background: linear-gradient(to bottom right, #f9fbfc, #eef2f7);
}

.contact-container {
    max-width: 700px;
    margin: 0 auto;
}

.contact-title {
    font-size: 2.8rem;
    font-weight: 800;
    color: #1f2937;
    margin-bottom: 1rem;
}

.contact-subtitle {
    font-size: 1.1rem;
    color: #6b7280;
    margin-bottom: 3rem;
}

.contact-links {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.contact-link {
    font-size: 1.2rem;
    font-weight: 600;
    color: #1976d2;
    text-decoration: none;
}

.contact-link:hover {
    text-decoration: underline;
}
</style>