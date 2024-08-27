/**
 * Convert a 16-bit integer to a string and vice versa.
 * @param {number} int16 - The 16-bit integer to convert.
 * @returns {string} - The string representation.
 */
function convert16BitIntToString(int16) {
    // Convert the 16-bit integer to a string
    return String.fromCharCode(int16);
}

/**
 * Reverse the conversion from string back to 16-bit integer.
 * @param {string} str - The string to reverse back to an integer.
 * @returns {number} - The 16-bit integer representation.
 */
function reverse16BitIntToString(str) {
    // Convert the string back to a 16-bit integer
    return str.charCodeAt(0);
}

/**
 * Convert a 32-bit integer to a string and vice versa.
 * @param {number} int32 - The 32-bit integer to convert.
 * @returns {string} - The string representation.
 */
function convert32BitIntToString(int32) {
    // Use a 32-bit view on an ArrayBuffer
    const buffer = new ArrayBuffer(4);
    const view = new DataView(buffer);
    view.setUint32(0, int32, true); // true for little-endian

    // Convert the buffer to a string
    return String.fromCharCode(...new Uint16Array(buffer));
}

/**
 * Reverse the conversion from string back to 32-bit integer.
 * @param {string} str - The string to reverse back to an integer.
 * @returns {number} - The 32-bit integer representation.
 */
function reverse32BitIntToString(str) {
    // Convert the string back to a 32-bit integer
    const buffer = new ArrayBuffer(4);
    const view = new DataView(buffer);
    const uint16Arr = new Uint16Array(buffer);
    uint16Arr[0] = str.charCodeAt(0);
    uint16Arr[1] = str.charCodeAt(1);

    return view.getUint32(0, true); // true for little-endian
}

/**
 * Convert a string to a 16-bit string representation and vice versa.
 * @param {string} str - The string to convert.
 * @returns {string} - The 16-bit string representation.
 */
function convertTo16BitString(str) {
    // Return the input string since JavaScript strings are UTF-16 encoded by default
    return str;
}

/**
 * Reverse the conversion from 16-bit string back to original string.
 * @param {string} str - The string to reverse.
 * @returns {string} - The original string.
 */
function reverseFrom16BitString(str) {
    // Return the string as is since JavaScript strings are UTF-16 encoded by default
    return str;
}

/**
 * Convert a string to a 32-bit string representation and vice versa.
 * @param {string} str - The string to convert.
 * @returns {string} - The 32-bit string representation.
 */
function convertTo32BitString(str) {
    const buffer = new ArrayBuffer(str.length * 4);
    const view = new DataView(buffer);

    for (let i = 0; i < str.length; i++) {
        view.setUint32(i * 4, str.charCodeAt(i), true); // true for little-endian
    }

    return String.fromCharCode(...new Uint32Array(buffer));
}

/**
 * Reverse the conversion from 32-bit string back to original string.
 * @param {string} str - The string to reverse.
 * @returns {string} - The original string.
 */
function reverseFrom32BitString(str) {
    const buffer = new ArrayBuffer(str.length * 4);
    const view = new DataView(buffer);
    const uint32Arr = new Uint32Array(buffer);

    for (let i = 0; i < str.length; i++) {
        uint32Arr[i] = str.charCodeAt(i);
    }

    let result = '';
    for (let i = 0; i < uint32Arr.length; i++) {
        result += String.fromCharCode(view.getUint32(i * 4, true));
    }

    return result;
}

// Example usage:
const int16 = 30000; // Example 16-bit integer
const int32 = 2147483647; // Example 32-bit integer
const inputString = "Hello, World!"; // Example string

// 16-bit integer to string and back
const encoded16Int = convert16BitIntToString(int16);
const decoded16Int = reverse16BitIntToString(encoded16Int);

console.log('Encoded 16-bit Int:', encoded16Int);
console.log('Decoded 16-bit Int:', decoded16Int);

// 32-bit integer to string and back
const encoded32Int = convert32BitIntToString(int32);
const decoded32Int = reverse32BitIntToString(encoded32Int);

console.log('Encoded 32-bit Int:', encoded32Int);
console.log('Decoded 32-bit Int:', decoded32Int);

// 16-bit string (which is same as input string) and back
const encoded16Str = convertTo16BitString(inputString);
const decoded16Str = reverseFrom16BitString(encoded16Str);

console.log('Encoded 16-bit String:', encoded16Str);
console.log('Decoded 16-bit String:', decoded16Str);

// 32-bit string and back
const encoded32Str = convertTo32BitString(inputString);
const decoded32Str = reverseFrom32BitString(encoded32Str);

console.log('Encoded 32-bit String:', encoded32Str);
console.log('Decoded 32-bit String:', decoded32Str);