// Scroll-driven cinematic animations
gsap.registerPlugin(ScrollTrigger);

// Hero glow reacts to scroll
gsap.to(".hero-glow", {
  scale: 2,
  opacity: 0,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

// Sections fade & rise on scroll
gsap.utils.toArray(".section").forEach(section => {
  gsap.from(section, {
    y: 80,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 80%"
    }
  });
});
