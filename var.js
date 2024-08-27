// 16-bit integer: -32,768 to 32,767
// Maximum value: 2^15 - 1 = 32,767
let max16BitInt = (2 ** 15) - 1; // (2^15) - 1
// Minimum value: -2^15 = -32,768
let min16BitInt = -(2 ** 15); // -(2^15)

// 32-bit integer: -2,147,483,648 to 2,147,483,647
// Maximum value: 2^31 - 1 = 2,147,483,647
let max32BitInt = (2 ** 31) - 1; // (2^31) - 1
// Minimum value: -2^31 = -2,147,483,648
let min32BitInt = -(2 ** 31); // -(2^31)

// 16-bit string (UTF-16): Each character is 16 bits.
// For simplicity, let’s assume the maximum string length based on 16-bit encoding is a single character (using max Unicode value).
let max16BitChar = String.fromCharCode(65535); // Unicode max value for 16-bit (2^16 - 1 = 65535)
let min16BitChar = String.fromCharCode(0);     // Unicode min value (0)

// 32-bit string (UTF-32): Each character is 32 bits.
// For simplicity, consider a string with a single character at max and min 32-bit values.
let max32BitChar = ''; 
let min32BitChar = '';

// Building the 32-bit max and min characters by using a loop.
for (let i = 0; i < 2; i++) {
    max32BitChar += String.fromCharCode(0xFFFF); // Using two 16-bit max chars to simulate a 32-bit character
    min32BitChar += String.fromCharCode(0);      // Using two 16-bit min chars to simulate a 32-bit character
}

// Output the calculated values to the console.
console.log('Max 16-bit Integer:', max16BitInt);
console.log('Min 16-bit Integer:', min16BitInt);
console.log('Max 32-bit Integer:', max32BitInt);
console.log('Min 32-bit Integer:', min32BitInt);
console.log('Max 16-bit Character:', max16BitChar);
console.log('Min 16-bit Character:', min16BitChar);
console.log('Max 32-bit Character:', max32BitChar);
console.log('Min 32-bit Character:', min32BitChar);