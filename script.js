// Smooth-scroll for in-page nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Give each broken/missing image a distinct placeholder tint so the
// layout still looks intentional before real photos are added.
const placeholderColors = ['#d8d5cf', '#cfd2ca', '#d9cfc7', '#c9ccc4', '#dcd5cc'];
document.querySelectorAll('img').forEach((img, i) => {
  img.addEventListener('error', () => {
    img.style.background = placeholderColors[i % placeholderColors.length];
  });
});
