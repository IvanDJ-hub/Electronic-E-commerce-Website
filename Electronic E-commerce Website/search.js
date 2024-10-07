document.getElementById('search').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const searchInput = event.target.querySelector('input[type="search"]').value.toLowerCase(); // Get the search input
    const productCards = document.querySelectorAll('#product-cards .card, #product-cards .cardnone'); // Select all product cards

    let found = false;

    productCards.forEach(card => {
        const title = card.querySelector('h3') ? card.querySelector('h3').textContent.toLowerCase() : ''; // Get the card title

        if (title.includes(searchInput)) {
            card.style.display = ''; // Show the card if it matches
            found = true;
        } else {
            card.style.display = 'none'; // Hide the card if it doesn't match
        }
    });

    // Optionally, display a message if no results are found
    if (!found) {
        alert('Няма намерени резултати за: ' + searchInput);
    }
});
