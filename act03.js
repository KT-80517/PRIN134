let numbers = [12, 7, 5, 20, 33, 42, 19, 8, 10];

let evenNumbers = [];
let oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);  
    } else {
        oddNumbers.push(numbers[i]);   
    }
}

console.log('Numbers:', numbers.join(', '));
console.log(`Even numbers: ${evenNumbers.join(', ')} | Count ${evenNumbers.length}`);
console.log(`Odd numbers: ${oddNumbers.join(', ')} | Count ${oddNumbers.length}`);