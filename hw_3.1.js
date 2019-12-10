// Exercise 1
// When you run arrayFromRange function should dispayd numbers from min to max 
// Also this function should accept negative numbers
function arrayFromRange(min, max) {
    const output = [];
    do {
    output.push(min);
    min++;
 }
    while (min <= max)
    return output;
    // your code
}


const numbers = arrayFromRange(1, 4);


console.log(numbers); // Should display [1, 2, 3, 4]

const negativeNumbers = arrayFromRange(-10, -8);
console.log(negativeNumbers); // Should display [-10, -9, -8]



/*

// Exercise 3

connst = [
    {title: 'a', year: 2019, rating: 4.7},
    {title: 'b', year: 2018, rating: 4.4},
    {title: 'c', year: 2019, rating: 4.3},
    {title: 'f', year: 2019, rating: 3.9},
]

// Ruturn all movies in 2019 with rating > 4
// Sort them by their rating in descending order
// Pick their title 'a', 'b' ...
// So, the result should be ["a", "c"] */