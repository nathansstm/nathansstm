// Base1024 character set (using custom characters)
const base1024Chars = Array.from({ length: 1024 }, (_, i) => String.fromCharCode(i + 128));

// Encode function for Base1024
function encodeBase1024(input) {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    
    let encodedString = '';
    data.forEach(byte => {
        encodedString += base1024Chars[byte];
    });
    return encodedString;
}

// Decode function for Base1024
function decodeBase1024(encoded) {
    const decoder = new TextDecoder();
    const data = new Uint8Array([...encoded].map(char => base1024Chars.indexOf(char)));
    
    return decoder.decode(data);
}

// Example usage
const inputString = "Hello, World!";
const encodedBase1024 = encodeBase1024(inputString);
console.log('Base1024 Encoded:', encodedBase1024);

const decodedBase1024 = decodeBase1024(encodedBase1024);
console.log('Base1024 Decoded:', decodedBase1024);