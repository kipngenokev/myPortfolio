/* Kipngeno Kevin — portfolio interactions
   - Sticky header opacity ramp on scroll
   - Active-section highlighting in nav
   - Fade-up reveal on scroll using IntersectionObserver
   No dependencies. Kept intentionally small. */

(() => {
  const header = document.getElementById("siteHeader");
  const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
  const sections = navLinks
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  /* ----- Sticky header background ----- */
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ----- Active-section nav highlighting ----- */
  if ("IntersectionObserver" in window && sections.length) {
    const setActive = (id) => {
      navLinks.forEach((a) => {
        a.classList.toggle("is-active", a.getAttribute("href") === `#${id}`);
      });
    };

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((section) => sectionObserver.observe(section));
  }

  /* ----- Reveal-on-scroll ----- */
  const revealTargets = document.querySelectorAll(
    ".section-head, .project, .principle, .stats li, .skill-list li, .contact-title, .email-cta, .contact-note, .hero-meta"
  );
  revealTargets.forEach((el) => el.classList.add("reveal"));

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealTargets.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback: show everything immediately.
    revealTargets.forEach((el) => el.classList.add("is-visible"));
  }
})();
