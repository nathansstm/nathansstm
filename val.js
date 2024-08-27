// Example of assigning maximum values in a 32-bit system

// Maximum 32-bit unsigned integer
let max32Int = 0xFFFFFFFF; // 2^32 - 1

// Maximum 16-bit unsigned integer
let max16Int = 0xFFFF; // 2^16 - 1

// Maximum possible 16-bit string, assuming 1 character = 16 bits
let max16String = '';
//for (let i = 0; i < Math.pow(2, 16) - 1; i++) {
    //max16String += 'x';
//}

// Maximum possible 32-bit string, assuming 1 character = 32 bits
let max32String = '';
//for (let i = 0; i < Math.pow(2, 32) - 1; i++) {
    //max32String += 'x'; // This is a theoretical example; this would likely crash due to memory limits
//}

// Output the values to the console
console.log('Max 32-bit integer:', max32Int);
console.log('Max 16-bit integer:', max16Int);
console.log('Max 16-bit string length:', max16String.length);
console.log('Max 32-bit string length:', max32String.length);