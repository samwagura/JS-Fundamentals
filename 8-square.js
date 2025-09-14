// Get the size argument from command line and convert to integer
const size = parseInt(process.argv[2]);

// Check if the argument is a valid positive integer
if (isNaN(size) || size <= 0) {
    console.log("Missing size");
} else {
    // Use nested loops to print the square
    for (let i = 0; i < size; i++) {
        let row = '';
        for (let j = 0; j < size; j++) {
            row += 'X';
        }
        console.log(row);
    }
}
