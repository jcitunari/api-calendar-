function toggleDarkMode() {
  document.body.classList.toggle("dark");

  const btn = document.querySelector(".dark-btn");
  btn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
}

function scrollToCalendar() {
  document
    .getElementById("calendar")
    .scrollIntoView({ behavior: "smooth" });
}
