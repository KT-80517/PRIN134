function hashText(inputString) {
    let hashedString = '';
    let changedChars = [];

    for (let i = 0; i < inputString.length; i++) {
        if (i % 2 === 0) {
            hashedString += '*';
            changedChars.push(inputString[i]);
        } else {
            hashedString += inputString[i];
        }
    }
  
    console.log(`Input string: ${inputString}`);
    console.log(`Output String: ${hashedString}`);
    console.log(`Hashed Characters: ${changedChars.join(',')}`);
}

hashText('Hello World');