class Hamburger {
  constructor(size) {
    this.size = size;
    this.stuffing = null;
    this.toppings = [];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  calculateCalories() {
    let totalCalories = this.size.calories;
    if (this.stuffing) totalCalories += this.stuffing.calories;
    this.toppings.forEach(topping => totalCalories += topping.calories);
    return totalCalories;
  }

  calculatePrice() {
    let totalPrice = this.size.price;
    if (this.stuffing) totalPrice += this.stuffing.price;
    this.toppings.forEach(topping => totalPrice += topping.price);
    return totalPrice;
  }

  reset() {
    this.stuffing = null;
    this.toppings = [];
  }
}

Hamburger.SIZE_SMALL = { price: 50, calories: 20 };
Hamburger.SIZE_LARGE = { price: 100, calories: 40 };
Hamburger.STUFFING_CHEESE = { price: 10, calories: 20 };
Hamburger.STUFFING_SALAD = { price: 20, calories: 5 };
Hamburger.STUFFING_POTATO = { price: 15, calories: 10 };
Hamburger.TOPPING_MAYO = { price: 20, calories: 5 };
Hamburger.TOPPING_SAUCE = { price: 15, calories: 0 };