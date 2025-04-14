// Petite animation d'apparition des cartes
window.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".user-card");
    cards.forEach((card, index) => {
        card.style.opacity = 0;
        setTimeout(() => {
            card.style.transition = "opacity 0.6s ease";
            card.style.opacity = 1;
        }, index * 300);
    });
});
