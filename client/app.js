
let hamburger = new Hamburger(Hamburger.SIZE_SMALL);

function selectSize(size) {
  const newSize = size === 'small' ? Hamburger.SIZE_SMALL : Hamburger.SIZE_LARGE;
  hamburger = new Hamburger(newSize);
  updateOrderDetails();
}

function selectStuffing(stuffing) {
  const newStuffing = Hamburger[`STUFFING_${stuffing.toUpperCase()}`];
  hamburger.stuffing = newStuffing;
  updateOrderDetails();
}

function addTopping(topping) {
  const newTopping = Hamburger[`TOPPING_${topping.toUpperCase()}`];
  hamburger.addTopping(newTopping);
  updateOrderDetails();
}

function updateOrderDetails() {
  document.getElementById('orderDetails').textContent = `Price: ${hamburger.calculatePrice()} Tcoins, Calories: ${hamburger.calculateCalories()}`;
}

function placeOrder() {
  const order = {
    size: hamburger.size,
    stuffing: hamburger.stuffing,
    toppings: hamburger.toppings
  };

  fetch('http://localhost:3001/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(order)
  })
  .then(response => response.json())
  .then(data => alert('Order placed!'))
  .catch(error => console.error('Error:', error));
}
