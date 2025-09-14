// Get the first argument from command line
const firstArgument = process.argv[2];

// Try to convert the first argument to an integer
const numberValue = parseInt(firstArgument);

// Check if the conversion was successful
if (!isNaN(numberValue)) {
    console.log(`My number: ${numberValue}`);
} else {
    console.log("Not a number");
}
