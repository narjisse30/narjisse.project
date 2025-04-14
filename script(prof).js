// Code d'accès à vérifier (à sécuriser côté serveur en prod !)
const correctAccessCode = "prof123"; // <-- à personnaliser !

document.querySelector(".sign-in form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    const codeInput = document.getElementById("accessCode").value;

    if (codeInput === correctAccessCode) {
        alert("Accès autorisé. Bienvenue, Professeur !");
        // Redirection ou accès à l'application ici :
        // window.location.href = "app.html";
    } else {
        alert("Code d'accès incorrect. Veuillez contacter l'administrateur.");
    }
});
