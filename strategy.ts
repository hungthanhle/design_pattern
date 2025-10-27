// Strategy interface
interface PaymentStrategy {
  pay(amount: number): void;
}

// Concrete Strategies
class CreditCardPayment implements PaymentStrategy {
  pay(amount: number) {
    console.log(`Paid ${amount} using Credit Card`);
  }
}

class PayPalPayment implements PaymentStrategy {
  pay(amount: number) {
    console.log(`Paid ${amount} using PayPal`);
  }
}

// Context
class ShoppingCart {
  constructor(private strategy: PaymentStrategy) {}

  setPaymentStrategy(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  checkout(amount: number) {
    this.strategy.pay(amount);
  }
}

// Usage
const cart = new ShoppingCart(new CreditCardPayment());
cart.checkout(100); // Paid 100 using Credit Card

cart.setPaymentStrategy(new PayPalPayment());
cart.checkout(200); // Paid 200 using PayPal
