const links = document.querySelectorAll(".sidebar nav a");
const pageTitle = document.getElementById("page-title");

links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
    const section = link.getAttribute("data-section");
    let icon = link.textContent.trim().substring(0, 2);
    pageTitle.textContent = `${icon} ${section.charAt(0).toUpperCase() + section.slice(1)}`;
  });
});