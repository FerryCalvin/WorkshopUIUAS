document.querySelectorAll('.item-details button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Item added to cart!');
        // Add logic here to add the item to the cart
    });
});