// cart.js
let cart = JSON.parse(localStorage.getItem('mulliri_cart')) || [];

function addToCart(name, price) {
  const existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name: name, price: parseFloat(price), quantity: 1 });
  }
  
  // I-save sa localStorage
  localStorage.setItem('mulliri_cart', JSON.stringify(cart));
  
  // Diretso dayon mo-ambak sa cart.html
  window.location.href = 'cart.html';
}

document.addEventListener('DOMContentLoaded', () => {
  // Maminaw sa pag-klik sa Add to Cart buttons
  const addButtons = document.querySelectorAll('.add-to-cart-btn');
  addButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      const productCard = e.target.closest('.product');
      const name = productCard.getAttribute('data-name');
      const price = productCard.getAttribute('data-price');
      
      if (name && price) {
        addToCart(name, price);
      }
    });
  });
});