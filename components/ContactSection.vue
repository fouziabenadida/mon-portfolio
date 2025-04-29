<template>
    <section class="contact-section">
        <div class="wave-top">
            <svg viewBox="0 0 1440 320">
                <path fill="#f9fbfc" fill-opacity="1"
                    d="M0,160L60,165.3C120,171,240,181,360,181.3C480,181,600,171,720,154.7C840,139,960,117,1080,117.3C1200,117,1320,139,1380,149.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z">
                </path>
            </svg>
        </div>

        <div class="container">
            <h2 class="contact-title">Let’s Talk</h2>
            <p class="contact-sub">Reach out for collaborations or just a friendly hello 👋</p>

            <div class="contact-cards">
                <div class="contact-card">
                    <i class="fas fa-envelope"></i>
                    <a href="mailto:hello@fouzia.dev" target="_blank">hello@fouzia.dev</a>
                </div>
                <div class="contact-card">
                    <i class="fab fa-linkedin-in"></i>
                    <a href="https://www.linkedin.com/in/fuziya-candas" target="_blank">LinkedIn</a>
                </div>
                <div class="contact-card">
                    <i class="fab fa-github"></i>
                    <a href="https://github.com/fouziabenadida" target="_blank">GitHub</a>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.contact-section {
    padding: 8rem 1.5rem 4rem;
    background: linear-gradient(to bottom right, #f1f5f9, #e2f0fb);
    text-align: center;
    position: relative;
    margin-bottom: 0;
}

.wave-top {
    position: absolute;
    top: -1px;
    left: 0;
    width: 100%;
    z-index: 1;
}

.container {
    position: relative;
    z-index: 2;
    max-width: 720px;
    margin: 0 auto;
}

.contact-title {
    font-size: 2.6rem;
    font-weight: 800;
    color: #1e293b;
    margin-bottom: 0.8rem;
}

.contact-sub {
    font-size: 1.1rem;
    color: #64748b;
    margin-bottom: 3rem;
}

.contact-cards {
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
    align-items: center;
}

.contact-card {
    background: white;
    border-radius: 16px;
    padding: 1rem 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.15rem;
    font-weight: 600;
    color: #1f2937;
    transition: all 0.3s ease;
    min-width: 280px;
}

.contact-card:hover {
    transform: translateY(-5px) scale(1.02);
    background: #ebf5ff;
}

.contact-card i {
    font-size: 1.5rem;
    color: #1976d2;
}

.contact-card a {
    color: #1976d2;
    text-decoration: none;
}

.contact-card a:hover {
    text-decoration: underline;
}
</style>