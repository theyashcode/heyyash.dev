
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => observer.observe(el));


const hireForm = document.getElementById('hireForm');
const formStatus = document.getElementById('formStatus');
if (hireForm) {
  hireForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formStatus.textContent = "Thanks! Your message has been noted — I'll get back to you soon.";
    hireForm.reset();
  });
}


const backToTop = document.getElementById('backToTop');
if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();