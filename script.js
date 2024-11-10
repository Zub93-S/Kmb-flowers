let cart = [];

function addToCart(flower, price) {
    const item = { flower, price };
    cart.push(item);
    alert(`${flower} has been added to your cart!`);
    console.log(cart);  // Log the cart to see the items added
}

function viewCart() {
    // This could be on the Cart page
    let cartHTML = '<h2>Your Cart</h2>';
    cart.forEach(item => {
        cartHTML += `<p>${item.flower} - $${item.price}</p>`;
    });
    cartHTML += '<button onclick="checkout()">Proceed to Checkout</button>';
    document.getElementById('cart').innerHTML = cartHTML;
}

function checkout() {
    // This would be the checkout process (for now, just log)
    console.log('Proceeding to checkout with items:', cart);
}
