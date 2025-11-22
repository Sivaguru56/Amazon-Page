document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('product-search');
    const productCards = document.querySelectorAll('.product-card');

    searchInput.addEventListener('keyup', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();

        productCards.forEach(card => {
            const title = card.querySelector('.product-title').textContent.toLowerCase();
            const description = card.querySelector('.description').textContent.toLowerCase();
            const category = card.getAttribute('data-category'); // Using the data-category attribute

            // Check if the search term matches the title, description, or category
            if (title.includes(searchTerm) || description.includes(searchTerm) || category.includes(searchTerm)) {
                card.style.display = 'article'; // Show the card
            } else {
                card.style.display = 'none'; // Hide the card
            }
        });
    });
});