<template>
    <section class="hero-section">
        <v-container class="hero-grid">
            <div class="hero-text">
                <div class="hero-label">🪄 Frontend Developer</div>
                <h1 class="hero-title">
                    Hello, I'm <span>Fouzia</span> 👋<br />
                    I craft web experiences with creativity & code.
                </h1>
                <p class="hero-subtitle">
                    Passionate about building elegant interfaces with Vue, Nuxt,<br />
                    and delivering accessible, high-performance web apps.
                </p>
                <div class="hero-actions">
                    <v-btn color="primary" class="cta" to="/projects">View Projects</v-btn>
                    <NuxtLink to="/about" class="learn-link">Learn More →</NuxtLink>
                </div>
            </div>

            <div class="hero-image-wrapper animated-float">
                <div class="image-bg"></div>
                <img src="https://images.unsplash.com/photo-1549082984-1323b94df9a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Creative Developer" class="hero-image" />
            </div>
        </v-container>
    </section>
</template>


<style scoped>
.hero-section {
    background: linear-gradient(to bottom right, #f9fbfc, #eef2f7);
    padding: 6rem 1.5rem 4rem;
}

.hero-grid {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
}

@media (min-width: 960px) {
    .hero-grid {
        flex-direction: row;
        justify-content: space-between;
    }
}

.hero-text {
    max-width: 540px;
    text-align: center;
}

@media (min-width: 960px) {
    .hero-text {
        text-align: left;
    }
}

.hero-label {
    background: #dbeafe;
    color: #1d4ed8;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 0.35rem 0.9rem;
    border-radius: 9999px;
    display: inline-block;
    margin-bottom: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.6px;
}

.hero-title {
    font-size: 3.1rem;
    line-height: 1.2;
    font-weight: 800;
    color: #111827;
    margin-bottom: 1.2rem;
}

.hero-subtitle {
    font-size: 1.15rem;
    color: #374151;
    margin-bottom: 2.2rem;
    line-height: 1.75;
    max-width: 560px;
}


.hero-actions {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    flex-wrap: wrap;
    justify-content: center;
}

@media (min-width: 960px) {
    .hero-actions {
        justify-content: flex-start;
    }
}

.cta {
    text-transform: none;
    font-weight: 600;
    padding: 0.6rem 1.4rem;
    font-size: 1rem;
    border-radius: 10px;
}

.learn-link {
    font-weight: 500;
    color: #1976d2;
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.3s ease;
}

.learn-link:hover {
    color: #0f5ab3;
}

.hero-image-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 520px;
    flex-shrink: 0;
    animation: float 6s ease-in-out infinite;
}

.hero-image {
    width: 100%;
    border-radius: 18px;
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.08);
    position: relative;
    z-index: 2;
    transition: transform 0.4s ease;
}

.hero-image:hover {
    transform: scale(1.025) rotate(0.3deg);
}

.image-bg {
    position: absolute;
    top: -15%;
    left: -10%;
    width: 120%;
    height: 120%;
    background: radial-gradient(circle at center, #c7d2fe, #dbeafe);
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.5;
    z-index: 1;
}


.image-bg-shape {
    position: absolute;
    top: -30px;
    left: -30px;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background: radial-gradient(circle at top right, #dbeafe, #bfdbfe);
    z-index: 1;
    filter: blur(40px);
}

@keyframes float {
    0% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }

    100% {
        transform: translateY(0px);
    }
}
</style>