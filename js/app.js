const body = document.body;
const themeToggle = document.querySelector(".theme-toggle");

const syncTheme = () => {
  const savedTheme = localStorage.getItem("bling-theme");
  if (savedTheme === "light") {
    body.setAttribute("data-theme", "light");
  } else {
    body.removeAttribute("data-theme");
  }
};

const toggleTheme = () => {
  const isLight = body.getAttribute("data-theme") === "light";
  if (isLight) {
    body.removeAttribute("data-theme");
    localStorage.setItem("bling-theme", "dark");
  } else {
    body.setAttribute("data-theme", "light");
    localStorage.setItem("bling-theme", "light");
  }
};

if (themeToggle) {
  themeToggle.addEventListener("click", toggleTheme);
}

syncTheme();

document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach((link) => link.classList.remove("active"));
    item.classList.add("active");
  });
});
