let ArrayOfNumbers = [7, 16, 21, 30, 38];
console.log(ArrayOfNumbers[0]);
console.log(ArrayOfNumbers[ArrayOfNumbers.length - 1]); // Outputs only the first and last numbers of the five number string (7 and 38)

for (let i = 0; i < ArrayOfNumbers.length; i++) {
    console.log(ArrayOfNumbers[i]);
} // Outputs all five numbers from the string (7, 16, 21, 30, 38)

ArrayOfNumbers.push(45, 56, 70, 84, 100);
console.log(ArrayOfNumbers);

ArrayOfNumbers.pop();
ArrayOfNumbers.pop();
ArrayOfNumbers.pop();
console.log(ArrayOfNumbers);

let RandomString = "Hello World!";
console.log(RandomString.length);