class ShoppingCart {
  checkout(amount: number, paymentMethod: string) {
    if (paymentMethod === "creditcard") {
      console.log(`Paid ${amount} using Credit Card`);
    } else if (paymentMethod === "paypal") {
      console.log(`Paid ${amount} using PayPal`);
    } else {
      throw new Error("Unknown payment method");
    }
  }
}

// Usage
const cart = new ShoppingCart();
cart.checkout(100, "creditcard"); // Paid 100 using Credit Card
cart.checkout(200, "paypal");     // Paid 200 using PayPal
