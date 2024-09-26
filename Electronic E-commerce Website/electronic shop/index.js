document.addEventListener("DOMContentLoaded", function() {
    var cards = document.querySelectorAll('#product-cards .card');

    function toggleStars() {
        var isMobile = window.matchMedia("(max-width: 480px)").matches;
        if (isMobile) {
            cards.forEach(function(card) {
                    card.classList.toggle('show-stars');
            });
        } else {
            cards.forEach(function(card) {
                card.addEventListener('mouseenter', showStars);
                card.addEventListener('mouseleave', hideStars);
                card.removeEventListener('click', function() {
                    card.classList.toggle('show-stars');
                });
            });
        }
    }

    function showStars() {
        this.classList.add('show-stars');
    }

    function hideStars() {
        this.classList.remove('show-stars');
    }

    toggleStars();
    window.addEventListener('resize', toggleStars);
});






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




document.addEventListener('DOMContentLoaded', function () {
    const cartIcon = document.getElementById('cartIcon');
    const cartCount = document.getElementById('cartCount');
    let cart = [];

    // Функция за обновяване на брояча на количката
    function updateCart() {
        cartCount.innerText = cart.length;
    }

    // Функция за добавяне на продукт в количката
    function addToCart(product) {
        cart.push(product);
        updateCart();
    }

    // Селектиране на всички икони за добавяне към количката
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach((button) => {
        button.addEventListener('click', function () {
            const productCard = this.closest('.card');
            const productName = productCard.querySelector('h3').innerText;
            const productPrice = parseFloat(productCard.querySelector('h2').innerText.replace(' лв', ''));
            const productImage = productCard.querySelector('img').src;
            const productId = productCard.getAttribute('data-product-id');

            const product = {
                id: productId,
                name: productName,
                price: productPrice,
                image: productImage
            };

            addToCart(product);
        });
    });

    // Пренасочване към cart.html при натискане на иконата на количката
    cartIcon.addEventListener('click', (event) => {
        event.preventDefault(); // Предотвратяване на поведението по подразбиране на линка
        window.location.href = 'cart.html'; // Пренасочване към cart.html
    });
});
