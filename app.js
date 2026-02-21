gsap.registerPlugin(ScrollTrigger);

// Cursor
const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", e => {
  gsap.to(cursor, {
    x: e.clientX - 10,
    y: e.clientY - 10,
    duration: 0.2
  });
});

// Hero animation
gsap.from(".hero-content h2", {
  y: 100,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out"
});

gsap.from(".hero-content p", {
  y: 40,
  opacity: 0,
  delay: 0.3
});

// Scroll animations
gsap.utils.toArray(".section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%"
    },
    y: 80,
    opacity: 0,
    duration: 1
  });
});

// Magnetic button
document.querySelectorAll(".magnetic").forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    gsap.to(btn, {
      x: (e.clientX - rect.left - rect.width / 2) * 0.3,
      y: (e.clientY - rect.top - rect.height / 2) * 0.3,
      duration: 0.3
    });
  });

  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, { x: 0, y: 0 });
  });
});
