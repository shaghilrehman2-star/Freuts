// animations.js
document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);

  // Hero animation
  gsap.from(".hero h2", {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  // Section animations
  document.querySelectorAll(".section").forEach(section => {
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
});
