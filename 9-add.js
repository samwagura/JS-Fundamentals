// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Get command line arguments and convert to integers
const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);

// Calculate and print the result
const result = add(num1, num2);
console.log(result);
