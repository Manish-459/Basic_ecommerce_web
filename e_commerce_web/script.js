document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.add-to-cart');
    const modal = document.getElementById('orderModal');
    const closeModal = document.querySelector('.close');
    const productInput = document.getElementById('product');
    const priceInput = document.getElementById('price');

    // Add event listeners to Add to Cart buttons
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const productName = this.parentElement.querySelector('h2').textContent;
            const productPrice = this.parentElement.querySelector('p').textContent;
            productInput.value = productName;
            priceInput.value = productPrice;
            modal.style.display = 'flex';
        });
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Handle form submission
    const orderForm = document.getElementById('orderForm');
    orderForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Order Confirmed! Thank you for shopping at FusionMart.');
        modal.style.display = 'none';
    });
});
