// Base128 character set (using ASCII characters)
const base128Chars = Array.from({ length: 128 }, (_, i) => String.fromCharCode(i));

// Encode function for Base128
function encodeBase128(input) {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    
    let encodedString = '';
    data.forEach(byte => {
        encodedString += base128Chars[byte];
    });
    return encodedString;
}

// Decode function for Base128
function decodeBase128(encoded) {
    const decoder = new TextDecoder();
    const data = new Uint8Array([...encoded].map(char => base128Chars.indexOf(char)));
    
    return decoder.decode(data);
}

// Example usage
const inputString = "Hello, World!";
const encodedBase128 = encodeBase128(inputString);
console.log('Base128 Encoded:', encodedBase128);

const decodedBase128 = decodeBase128(encodedBase128);
console.log('Base128 Decoded:', decodedBase128);