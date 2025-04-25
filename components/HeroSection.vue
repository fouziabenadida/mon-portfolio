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
                    <v-btn class="cta gradient-btn" to="/projects">
                        🚀 View Projects
                    </v-btn>
                    <NuxtLink to="/about" class="learn-link">Learn More →</NuxtLink>
                </div>
            </div>

            <div class="hero-figure">
                <svg class="bg-svg" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="200" cy="200" r="150" fill="#bfdbfe" opacity="0.4" />
                    <circle cx="200" cy="200" r="100" fill="#93c5fd" opacity="0.4" />
                </svg>
                <img src="https://images.unsplash.com/photo-1549082984-1323b94df9a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Creative Developer" class="hero-person" />
            </div>
        </v-container>
    </section>
</template>

<style scoped>
.hero-section {
    background: linear-gradient(to bottom right, #f9fbfc, #eef2f7);
    padding: 6rem 1.5rem 4rem;
    overflow: hidden;
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

.cta.gradient-btn {
    text-transform: none;
    font-weight: 600;
    font-size: 1rem;
    border-radius: 10px;
    padding: 0.65rem 1.6rem;
    background: linear-gradient(to right, #3b82f6, #60a5fa);
    color: white;
    box-shadow: 0 8px 30px rgba(59, 130, 246, 0.25);
    transition: all 0.3s ease;
}

.cta.gradient-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(59, 130, 246, 0.35);
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

.hero-figure {
    position: relative;
    max-width: 450px;
    margin-inline: auto;
    animation: float 6s ease-in-out infinite;
    z-index: 0;
}

.bg-svg {
    position: absolute;
    top: -40px;
    left: -40px;
    width: 100%;
    height: auto;
    z-index: -1;
    filter: blur(40px);
}

.hero-person {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 50% 50% 40% 40%;
    object-fit: cover;
    box-shadow: 0 12px 45px rgba(0, 0, 0, 0.08);
    transition: transform 0.4s ease;
}

.hero-person:hover {
    transform: scale(1.025);
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