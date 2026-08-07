(function () {
  "use strict";

  const toggle = document.querySelector(".nav-toggle");
  const navigation = document.querySelector("#site-nav");

  function closeNavigation() {
    if (!toggle || !navigation) return;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("title", "Open navigation");
    navigation.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  }

  if (toggle && navigation) {
    toggle.addEventListener("click", function () {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      toggle.setAttribute("title", isOpen ? "Open navigation" : "Close navigation");
      navigation.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("nav-open", !isOpen);
    });

    navigation.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNavigation);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 760) closeNavigation();
    });
  }

  document.querySelectorAll("[data-year]").forEach(function (node) {
    node.textContent = String(new Date().getFullYear());
  });

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealItems = Array.from(document.querySelectorAll(".reveal"));

  if ("IntersectionObserver" in window && !reduceMotion) {
    revealItems.forEach(function (item) {
      item.classList.add("reveal-ready");
    });

    const revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    revealItems.forEach(function (item) {
      revealObserver.observe(item);
    });
  }

  const sectionLinks = Array.from(document.querySelectorAll('.site-nav a[href^="#"]'));
  const sections = sectionLinks
    .map(function (link) { return document.querySelector(link.getAttribute("href")); })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    const sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        sectionLinks.forEach(function (link) {
          const active = link.getAttribute("href") === "#" + entry.target.id;
          if (active) link.setAttribute("aria-current", "true");
          else link.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-25% 0px -65% 0px", threshold: 0 });

    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }
}());
