document.addEventListener("DOMContentLoaded", () => {
  // Alert When Form is Submitted
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", () => {
      alert("Thank you for your message! We’ll get back to you soon.");
    });
  }

  // Fade In Destination Images on Scroll (bonus interactivity)
  const destinations = document.querySelectorAll(".destination");

  const revealOnScroll = () => {
    destinations.forEach((dest) => {
      const rect = dest.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        dest.style.opacity = 1;
        dest.style.transform = "translateY(0)";
      }
    });
  };

  // Set initial state
  destinations.forEach(dest => {
    dest.style.opacity = 0;
    dest.style.transform = "translateY(30px)";
    dest.style.transition = "all 0.6s ease-out";
  });

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Initial trigger
});
