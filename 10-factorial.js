// Recursive factorial function
function factorial(n) {
    if (isNaN(n) || n < 0) {
        return 1;
    }
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Get the argument from command line and convert to integer
const num = parseInt(process.argv[2]);

// Calculate and print the factorial
const result = factorial(num);
console.log(result);
