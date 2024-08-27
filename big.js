// Cycle 1: n(64), x(1), Total Digits (2^64-1) = 20 Digits
// Cycle 2: n(64), x(2), Total Digits (2^128-1) = 39 Digits
// Cycle 3: n(64), x(3), Total Digits (2^192-1) = 58 Digits
// Cycle 4: n(64), x(4), Total Digits (2^256-1) = 78 Digits
// Cycle 5: n(64), x(5), Total Digits (2^320-1) = 97 Digits
// Cycle 6: n(64), x(6), Total Digits (2^384-1) = 116 Digits
// Cycle 7: n(64), x(7), Total Digits (2^448-1) = 135 Digits
// Cycle 8: n(64), x(8), Total Digits (2^512-1) = 155 Digits
// Cycle 9: n(64), x(9), Total Digits (2^576-1) = 174 Digits
// Cycle 10: n(64), x(10), Total Digits (2^640-1) = 193 Digits
// Cycle 11: n(64), x(11), Total Digits (2^704-1) = 213 Digits
// Cycle 12: n(64), x(12), Total Digits (2^768-1) = 232 Digits
// Cycle 13: n(64), x(13), Total Digits (2^832-1) = 251 Digits
// Cycle 14: n(64), x(14), Total Digits (2^896-1) = 270 Digits
// Cycle 15: n(64), x(15), Total Digits (2^960-1) = 290 Digits
// Cycle 16: n(64), x(16), Total Digits (2^1024-1) = 309 Digits
/*
// Define the number of cycles (x) for exponential growth
let x = 16;

// Caution Loop: Exponentially increasing the value without buffering
for (let i = 0; i < x; i++) {
    // Calculate the value for this cycle
    let cautionMaxInt = (2n ** BigInt(64 * (i + 1))) - 1n;

    // Output the result to the console
    console.log(`Cycle ${i + 1}: 2^${64 * (i + 1)} - 1 = ${cautionMaxInt}`);
    
    // This may cause the system to hang or freeze on large values
}
*/
// Cycle 1: n(64), x(1), Total Digits (2^64-1) = 20 Digits
// Cycle 2: n(64), x(2), Total Digits (2^128-1) = 39 Digits
// Cycle 3: n(64), x(3), Total Digits (2^192-1) = 58 Digits
// Cycle 4: n(64), x(4), Total Digits (2^256-1) = 78 Digits
// Cycle 5: n(64), x(5), Total Digits (2^320-1) = 97 Digits
// Cycle 6: n(64), x(6), Total Digits (2^384-1) = 116 Digits
// Cycle 7: n(64), x(7), Total Digits (2^448-1) = 135 Digits
// Cycle 8: n(64), x(8), Total Digits (2^512-1) = 155 Digits
// Cycle 9: n(64), x(9), Total Digits (2^576-1) = 174 Digits
// Cycle 10: n(64), x(10), Total Digits (2^640-1) = 193 Digits
// Cycle 11: n(64), x(11), Total Digits (2^704-1) = 213 Digits
// Cycle 12: n(64), x(12), Total Digits (2^768-1) = 232 Digits
// Cycle 13: n(64), x(13), Total Digits (2^832-1) = 251 Digits
// Cycle 14: n(64), x(14), Total Digits (2^896-1) = 270 Digits
// Cycle 15: n(64), x(15), Total Digits (2^960-1) = 290 Digits
// Cycle 16: n(64), x(16), Total Digits (2^1024-1) = 309 Digits

// Define the number of cycles (x) for exponential growth
let x = 16;

// Function to introduce a delay (simple buffering) using Promises
function buffer(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Buffered Loop: Exponentially increasing the value with basic buffering
(async () => {
    for (let i = 0; i < x; i++) {
        // Calculate the value for this cycle
        let bufferedMaxInt = (2n ** BigInt(64 * (i + 1))) - 1n;

        // Output the result to the console
        console.log(`Buffered Cycle ${i + 1}: 2^${64 * (i + 1)} - 1 = ${bufferedMaxInt}`);

        // Introduce a delay (buffer) between cycles to prevent system hang
        await buffer(1000); // 1000 milliseconds delay (1 second)
    }
})();