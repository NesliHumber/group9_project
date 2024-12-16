// Cart and Wishlist
const cart = [];
const wishlist = [];

// Cart Preview
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');

// Modal
const modal = document.getElementById('product-modal');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalDescription = document.getElementById('modal-description');
const modalPrice = document.getElementById('modal-price');
const closeModal = document.querySelector('.close-modal');

const productDetails = [
    {
        title: 'Python Programming Basics',
        image: 'assets/python_course.jpg',
        description: 'Learn Python fundamentals, including syntax, loops, and functions. Perfect for beginners!',
        price: '$29.99',
    },
    {
        title: 'Web Development Starter Pack',
        image: 'assets/web_dev_course.jpg',
        description: 'Start building websites with HTML, CSS, and JavaScript. Ideal for new developers!',
        price: '$39.99',
    },
    {
        title: 'Data Science Essentials',
        image: 'assets/data_science.jpg',
        description: 'Master data analysis and visualization with Python libraries. Intermediate level.',
        price: '$49.99',
    },
];

// Add to Cart Functionality
document.querySelectorAll('.add-to-cart').forEach((button, index) => {
    button.addEventListener('click', () => {
        const product = productDetails[index];

        cart.push(product);

        cartCount.textContent = cart.length;
        const total = cart.reduce((sum, item) => sum + parseFloat(item.price.slice(1)), 0).toFixed(2);
        cartTotal.textContent = total;

        alert(`${product.title} has been added to your cart!`);
    });
});

// Save for Later Functionality
document.querySelectorAll('.save-for-later').forEach((button, index) => {
    button.addEventListener('click', () => {
        const product = productDetails[index];

        // Check if already in wishlist
        if (!wishlist.find(item => item.title === product.title)) {
            wishlist.push(product);
            alert(`${product.title} has been saved for later!`);
        } else {
            alert(`${product.title} is already in your wishlist!`);
        }
    });
});

// Search Bar Functionality
const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    document.querySelectorAll('.item').forEach(item => {
        const title = item.querySelector('h2').textContent.toLowerCase();
        item.style.display = title.includes(query) ? 'block' : 'none';
    });
});

// Sort by Price Functionality
const sortButton = document.getElementById('sort-price');
sortButton.addEventListener('click', () => {
    const items = Array.from(document.querySelectorAll('.item'));
    const container = document.querySelector('.shop-items');

    items.sort((a, b) => {
        const priceA = parseFloat(a.querySelector('.price').textContent.slice(1));
        const priceB = parseFloat(b.querySelector('.price').textContent.slice(1));
        return priceA - priceB;
    });

    container.innerHTML = '';
    items.forEach(item => container.appendChild(item));
});

// Modal Functionality
document.querySelectorAll('.item').forEach((item, index) => {
    item.addEventListener('click', () => {
        const product = productDetails[index];

        modalTitle.textContent = product.title;
        modalImage.src = product.image;
        modalDescription.textContent = product.description;
        modalPrice.textContent = product.price.slice(1);

        modal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

