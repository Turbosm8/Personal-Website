const header = document.querySelector(".site-header");
const navLinks = [...document.querySelectorAll("[data-nav-link]")];
const sections = [...document.querySelectorAll("[data-section]")];

const onScroll = () => {
  if (window.scrollY > 16) {
    header.style.background = "rgba(8, 9, 12, 0.78)";
    header.style.borderBottomColor = "rgba(255, 255, 255, 0.1)";
  } else {
    header.style.background = "rgba(8, 9, 12, 0.55)";
    header.style.borderBottomColor = "rgba(255, 255, 255, 0.06)";
  }
};

onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

const observer = new IntersectionObserver(
  (entries) => {
    const visibleEntry = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visibleEntry) return;

    const activeId = `#${visibleEntry.target.id}`;
    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === activeId);
    });
  },
  {
    rootMargin: "-20% 0px -55% 0px",
    threshold: [0.2, 0.4, 0.6],
  }
);

sections.forEach((section) => observer.observe(section));
