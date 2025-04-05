// Initialize GSAP animations
document.addEventListener('DOMContentLoaded', () => {
    // Animate elements on homepage
    if (document.querySelector('section.relative.h-screen')) {
        gsap.from('nav', { duration: 0.8, y: -50, opacity: 0, ease: "power3.out" });
        gsap.from('h1', { duration: 1, y: 30, opacity: 0, delay: 0.3, ease: "back.out(1.7)" });
        gsap.from('p.text-xl', { duration: 0.8, y: 20, opacity: 0, delay: 0.6, ease: "power2.out" });
        gsap.from('div.flex a', { 
            duration: 0.8, 
            y: 20, 
            opacity: 0, 
            delay: 0.9, 
            ease: "power2.out",
            stagger: 0.1
        });
    }
});