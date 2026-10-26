const menuButton = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");
const mobileMenu = window.matchMedia("(max-width: 575px)");

function setMenuOpen(isOpen) {
  menuButton.setAttribute("aria-expanded", String(isOpen));
  document.querySelector(".site-header").classList.toggle("menu-open", isOpen);
}

menuButton.addEventListener("click", () => {
  setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
});

mainNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    setMenuOpen(false);
    menuButton.focus({ preventScroll: true });
  }
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) {
    setMenuOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    menuButton.focus();
  }
});

mobileMenu.addEventListener("change", () => setMenuOpen(false));
