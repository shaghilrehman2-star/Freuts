// GSAP basic scroll animations
gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero h2", {
  y: 80,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

gsap.utils.toArray(".section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%"
    },
    y: 60,
    opacity: 0,
    duration: 1
  });
});
