let num1 = 10;
let num2 = 5;
let zero = 0;

function calcu(a, b, cb) {
    return cb(a, b);
}

function Addition(num1, num2) {
    return num1 + num2;
}

function Subtraction(num1, num2) {
    return num1 - num2;
}

function Multiplication(num1, num2) {
    return num1 * num2;
}

function Division(num1, num2) {
    return num1 / num2;
}

function divbyzero(num1, zero) {
    if (zero === 0) {
      return "Error: Division by zero!";
    } else {
      return num1 / zero;
    }
  }






console.log(`Addition ${num1} + ${num2}: ${calcu(num1, num2, Addition)}`);
console.log(`Subtraction ${num1} - ${num2}: ${calcu(num1, num2, Subtraction)}`);
console.log(`Multiplication ${num1} * ${num2}: ${calcu(num1, num2, Multiplication)}`);
console.log(`Division ${num1} / ${num2}: ${calcu(num1, num2, Division)}`);
console.log(`Division by zero ${num1} / ${zero}: ${calcu(num1, zero, divbyzero)}`);