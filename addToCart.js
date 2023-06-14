function addToCart(productId) {
    console.log(productId)

fetch('/cart', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({ productId }) // Send productId instead of productsId
    
})
console.log(productId)
.then(response => {
    if (response.ok) {
    alert('Item added to cart');
    } else {
    console.error('Failed to add item to cart.');
    }
})
.catch(error => {
    console.error(error);
});
}