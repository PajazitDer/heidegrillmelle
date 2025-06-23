// static/js/submenu.js
// Highlights the active submenu link based on scroll position

document.addEventListener('DOMContentLoaded', () => {
  const submenuLinks = document.querySelectorAll('.submenu-nav a');
  const sections = Array.from(submenuLinks).map(link => {
    const id = link.getAttribute('href').substring(1);
    return document.getElementById(id);
  });

  function onScroll() {
    const scrollPos = window.scrollY + window.innerHeight / 3;

    sections.forEach((section, index) => {
      if (!section) return;
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;

      if (scrollPos >= top && scrollPos < bottom) {
        submenuLinks.forEach(link => link.classList.remove('active'));
        submenuLinks[index].classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll);
  // Trigger once to set initial state
  onScroll();
});

