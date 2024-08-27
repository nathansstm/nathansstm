/**
 * Encode a string into a custom hexadecimal representation.
 * @param {string} input - The string to encode.
 * @returns {string} - The encoded hexadecimal string.
 */
function encodeHex(input) {
    // Convert the input string to a Uint8Array
    const encoder = new TextEncoder();
    const data = encoder.encode(input);

    let hexString = '';
    for (let i = 0; i < data.length; i++) {
        // Convert each byte to a 2-digit hexadecimal string
        let hex = data[i].toString(16).padStart(2, '0');
        // Custom mixing: reverse the order of characters
        hexString += hex.split('').reverse().join('');
    }
    return hexString;
}

/**
 * Decode a custom hexadecimal representation back into a string.
 * @param {string} hex - The hexadecimal string to decode.
 * @returns {string} - The decoded string.
 */
function decodeHex(hex) {
    // Ensure the input length is even
    if (hex.length % 2 !== 0) {
        throw new Error('Invalid hex string length');
    }

    let byteArray = new Uint8Array(hex.length / 2);
    for (let i = 0; i < byteArray.length; i++) {
        // Extract 2-character chunks, reverse the order
        let chunk = hex.substr(i * 2, 2);
        let reversedHex = chunk.split('').reverse().join('');
        // Convert the reversed chunk to a byte
        byteArray[i] = parseInt(reversedHex, 16);
    }

    // Convert the Uint8Array back to a string
    const decoder = new TextDecoder();
    return decoder.decode(byteArray);
}

// Example usage:
const inputString = "Hello, World!"; // Example string

const encoded = encodeHex(inputString);
console.log('Encoded:', encoded); // Encoded hexadecimal string

const decoded = decodeHex(encoded);
console.log('Decoded:', decoded); // Decoded string