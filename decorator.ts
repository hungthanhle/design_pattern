function Log(target: any, propertyName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyName} with arguments:`, args);
    const result = original.apply(this, args);
    console.log(`Result:`, result);
    return result;
  };
}

class Calculator {
  @Log
  add(a: number, b: number) {
    return a + b;
  }

  @Log
  multiply(a: number, b: number) {
    return a * b;
  }
}

const calc = new Calculator();
calc.add(2, 3);
calc.multiply(4, 5);
