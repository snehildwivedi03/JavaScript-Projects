//toggleBtn is for dark mode switching

const toggleBtn = document.querySelector(".btn");

toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
});
