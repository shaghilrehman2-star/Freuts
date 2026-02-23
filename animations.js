document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined") return;

  // Simple hero animation (no opacity tricks)
  gsap.from(".hero h2", {
    y: 40,
    duration: 0.8,
    ease: "power2.out"
  });
});
