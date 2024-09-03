const toggleMenu = () => {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
};

document.addEventListener("DOMContentLoaded", () => {
  const modeToggle = document.querySelectorAll("#mode");
  const body = document.body;

  // Check local storage for theme preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.toggle("dark-mode", savedTheme === "dark");
    modeToggle.forEach((toggle) => {
      toggle.src =
        savedTheme === "dark" ? "./assets/sun.png" : "./assets/moon.png";
    });
  }

  modeToggle.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      const isDarkMode = body.classList.contains("dark-mode");
      modeToggle.forEach((toggle) => {
        toggle.src = isDarkMode ? "./assets/sun.png" : "./assets/moon.png";
      });

      // Save theme preference to local storage
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    });
  });
});
