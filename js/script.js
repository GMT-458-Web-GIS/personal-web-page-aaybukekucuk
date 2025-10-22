// script.js
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");
  
    function showSection(id) {
      sections.forEach(sec => {
        if (sec.id === id) {
          sec.style.display = "block";
        } else {
          sec.style.display = "none";
        }
      });
    }
  
    navLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault(); // sayfanın otomatik scroll yapmasını engeller
        const targetId = link.getAttribute("href").replace(".html", "").replace("#", "");
        showSection(targetId);
      });
    });
  
    // Başlangıçta sadece about göster
    showSection("about");
  });