document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const loginError = document.getElementById('loginError');
    const loginLink = document.getElementById('loginLink');
    const registerLink = document.getElementById('registerLink');
    const userNameElement = document.getElementById('userName');
    const userDropdown = document.getElementById('userDropdown');
    const logoutLink = document.getElementById('logoutLink');

    function showLinks() {
        if (loginLink && registerLink) {
            loginLink.classList.remove('hidden');
            registerLink.classList.remove('hidden');
        }
    }

    function hideLinks() {
        if (loginLink && registerLink) {
            loginLink.classList.add('hidden');
            registerLink.classList.add('hidden');
        }
    }

    function showUserName(name) {
        if (userDropdown && userNameElement) {
            userNameElement.textContent = name;
            userDropdown.classList.remove('hidden');
        }
    }

    function hideUserName() {
        if (userDropdown) {
            userDropdown.classList.add('hidden');
        }
    }

    function updateUI() {
        const storedUserName = localStorage.getItem('userName');
        if (storedUserName) {
            hideLinks();
            showUserName(storedUserName);
        } else {
            showLinks();
            hideUserName();
        }
    }

    const currentPage = window.location.pathname;
    if (!currentPage.includes('login.html') && !currentPage.includes('register.html')) {
        updateUI();
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            if (email === 'ivan@gmail.com' && password === '1234') {
                alert('Успешно влизане!');
                localStorage.setItem('userName', 'Ivan Test');
                window.location.href = 'index.html';
            } else {
                loginError.textContent = 'Паролата или имейла са неправилни!';
            }
        });
    }

    if (logoutLink) {
        logoutLink.addEventListener('click', function () {
            localStorage.removeItem('userName');
            updateUI();
            window.location.href = 'index.html';
        });
    }
});
