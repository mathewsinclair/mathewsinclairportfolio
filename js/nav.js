// Mobile nav toggle (keyboard-accessible, focus-trapped while open) +
// sticky case-study section-nav scrollspy. No framework, no build step.
(function () {
  "use strict";

  function setupMobileNav() {
    var toggle = document.querySelector(".menu-toggle");
    var list = document.querySelector(".site-nav__list");
    var backdrop = document.querySelector(".nav-backdrop");
    if (!toggle || !list) return;

    var focusable = function () {
      return Array.prototype.slice.call(
        list.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])')
      );
    };

    function open() {
      list.setAttribute("data-open", "true");
      if (backdrop) backdrop.setAttribute("data-open", "true");
      toggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
      var items = focusable();
      if (items.length) items[0].focus();
    }

    function close(returnFocus) {
      list.setAttribute("data-open", "false");
      if (backdrop) backdrop.setAttribute("data-open", "false");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      if (returnFocus) toggle.focus();
    }

    toggle.addEventListener("click", function () {
      var isOpen = toggle.getAttribute("aria-expanded") === "true";
      if (isOpen) close(true); else open();
    });

    if (backdrop) backdrop.addEventListener("click", function () { close(true); });

    list.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        close(true);
        return;
      }
      if (e.key !== "Tab") return;
      var items = focusable();
      if (!items.length) return;
      var first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });

    // Closing via a nav link navigates away anyway, but reset state for back/forward cache.
    list.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { close(false); });
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 640) close(false);
    });
  }

  function setupSectionScrollspy() {
    var nav = document.querySelector(".cs-nav__list");
    if (!nav) return;
    var links = Array.prototype.slice.call(nav.querySelectorAll("a"));
    var sections = links
      .map(function (a) {
        var id = a.getAttribute("href").replace("#", "");
        return document.getElementById(id);
      })
      .filter(Boolean);
    if (!sections.length) return;

    var setActive = function (id) {
      links.forEach(function (a) {
        var match = a.getAttribute("href") === "#" + id;
        if (match) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      });
    };

    if (!("IntersectionObserver" in window)) return;

    var observer = new IntersectionObserver(
      function (entries) {
        var visible = entries.filter(function (e) { return e.isIntersecting; });
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach(function (s) { observer.observe(s); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupMobileNav();
    setupSectionScrollspy();
  });
})();
