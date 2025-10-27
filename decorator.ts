class Calculator {
  add(a: number, b: number) {
    console.log(`Calling add with arguments: ${a}, ${b}`);
    const result = a + b;
    console.log(`Result: ${result}`);
    return result;
  }

  multiply(a: number, b: number) {
    console.log(`Calling multiply with arguments: ${a}, ${b}`);
    const result = a * b;
    console.log(`Result: ${result}`);
    return result;
  }
}

const calc = new Calculator();
calc.add(2, 3);
calc.multiply(4, 5);
