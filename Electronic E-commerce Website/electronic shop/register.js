document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');
    const registerError = document.getElementById('registerError');

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;
        const confirmPassword = document.getElementById('regConfirmPassword').value;

        if (password === confirmPassword) {
            alert('Регистрацията е успешна!');
            window.location.href = 'login.html'; // Пренасочване към страницата за влизане
        } else {
            registerError.textContent = 'Паролата не си съвпада!';
        }
    });
});