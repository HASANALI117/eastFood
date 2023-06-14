function addToCart(productId) {
    console.log(productId);
  
    fetch('/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId }), // Send the productId only
    })
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
  
  function updateQuantity(productId, newQuantity) {
    fetch(`/cart/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ quantity: newQuantity })
    })
    .then(response => {
      if (response.ok) {
        location.reload(); // Refresh the page to update the quantity
      } else {
        console.error('Failed to update quantity.');
      }
    })
    .catch(error => {
      console.error(error);
    });
  }

  function removeproduct(productId) {
    fetch(`/cart/${productId}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        location.reload(); // Refresh the page to remove the product
      } else {
        console.error('Failed to remove product.');
      }
    })
    .catch(error => {
      console.error(error);
    });
  }