const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const strengthBar = document.getElementById('password-strength');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Indicateur de force du mot de passe
passwordInput.addEventListener('input', () => {
    const strength = passwordInput.value.length;
    strengthBar.classList.add("active");
    let width = "0%";
    let color = "red";

    if (strength > 12) {
        width = "100%";
        color = "green";
    } else if (strength > 8) {
        width = "70%";
        color = "orange";
    } else if (strength > 4) {
        width = "40%";
        color = "orangered";
    }

    strengthBar.style.background = "#ddd";
    strengthBar.innerHTML = `<div style="width: ${width}; height: 100%; background-color: ${color};"></div>`;
});
