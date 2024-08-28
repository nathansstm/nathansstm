// Base32 Actual test
// Base53 Character set
// Block Size: 30-bits
// Segment: 5-bits
// Segments: Total 6
  // Base64 Comparison
  // Segment: 4-bits
  // Segments: Total 6
  // BitIndex: 64, 4-bit or 256-bits
// Base32 Extras
  // 1-bit << Segment Total Extra
  // 6-bits Block Total Extra
// BitIndex: 32, 5-bit or 160-bits
// Base32 Actual
// Base53 Naming, Why?
// We use 1 bit per Segment extra
// We use 6 bits per Block extra
// ..it looks like 32 flipped 53
  // ..it sounds cooler 
   // .. :)

const encodeTable = [
  'A', 'B', 'C', 'D', 'E',
  'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'O',
  'a', 'b', 'c', 'd', 'e',
  '0', '1', '2', '3', '4',
  '5', '6', '7', '8', '9',
  '+', '/'
];

const binaryMapping = [
  '00000', '00001', '00010', 
  '00011', '00100', '00101', 
  '00110', '00111', '01000', 
  '01001', '01010', '01011', 
  '01100', '01101', '01110', 
  '01111', '10000', '10001', 
  '10010', '10011', '10100', 
  '10101', '10110', '10111',
  '11000', '11001', '11010', 
  '11011', '11100', '11101', 
  '11110', '11111'
];

function toBinaryString(str) {
  return str.split('')
    .map(c => c.charCodeAt(0).toString(2).padStart(8, '0'))
    .join('');
}

function fromBinaryString(binStr) {
    // Convert binary string to text
    const bytes = binStr.match(/.{8}/g) || [];
    return bytes.map(byte => String.fromCharCode(parseInt(byte, 2))).join('');
}

function en53(input) {
const binaryString = toBinaryString(input);
const blockSize = 30; // Block size in bits (6 segments of 5 bits each)
// Pad binary string to a multiple of blockSize
const paddingLength = (blockSize - (binaryString.length % blockSize)) % blockSize;
const paddedBinaryString = binaryString + '0'.repeat(paddingLength);

//console.log('Block size:', blockSize);
//console.log('Padding Length:', paddingLength);
//console.log('Padded String:', paddedBinaryString);
// Block size: 30
// Padding Length: 16
// Padded String: 010010000110010101101100011011000110111100101100001000000101011101101111011100100110110001100100001000010000000000000000
// Original Input: Hello, World!
// Encoded Input: 01001000011001010110110001101100011011110010110000100000010101110110111101110010011011000110010000100001

let encodedString = '';
for (let i = 0; i < paddedBinaryString.length; i += blockSize) {
  const block = paddedBinaryString.substr(i, blockSize);
     for (let j = 0; j < blockSize; j += 5) {
        const segment = block.substr(j, 5);
        const index = parseInt(segment, 2);
        encodedString += encodeTable[index];
     }
}
  
//return binaryString;
return encodedString;
}

//function de53(binaryString) {
function de53(encoded) {
//return fromBinaryString(binaryString);

let binaryString = '';
for (const char of encoded) {
  const index = encodeTable.indexOf(char);
    if (index === -1) throw new Error('Invalid character in encoded string');
     binaryString += binaryMapping[index];
 }

  const byteString = binaryString.match(/.{8}/g) || [];
  return fromBinaryString(byteString.join(''));
}

// Example usage:
const inputString = "Hello, World!";
//const inputString = "-----Key-----\n"
// +"ABCDEFGHIJKLM\n"
// +"NOPQRSTUVWXYZ\n"
// +"-----End-----\n";
const encodeString = en53(inputString);
const decodeString = de53(encodeString);

console.log('Original Input:\n', inputString);
//console.log('Encoded Input:\n', encodeString);
console.log('Decoded Input:\n', decodeString);
// Example implementation of en53
//function en53(input) {
  // Your encoding logic here
  // Placeholder for the actual implementation
  //return input; // Replace with actual encoded string
//}

// Function to generate a random string of a specified length
function generateRandomString(length) {
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  return result;
}
// Building a 150-bit key
const numSegments = 5; // Number of segments
const segmentLength = 32; // Length of each random string
let rawKey = '';
let keyTop = '-----Key-----\n';
let keyEnd = '-----End-----\n';
    //rawKey += keyTop;
for (let i = 0; i < numSegments; i++) {
  const randomString = generateRandomString(segmentLength);
  const encodedSegment = en53(randomString);
  rawKey += encodedSegment;
}
    //rawKey += '\n';
    //rawKey += keyEnd;
// Output the concatenated key
let consoleKey = '';
console.log('Built 150-bit Key...');
console.log('Raw Key: from raw\n');
//console.log(rawKey);
console.log('Raw Count...', rawKey.length);
for (let i = 0; i < rawKey.length; i += 20) {
    consoleKey += rawKey.slice(i, i + 20);
  consoleKey += '\n';
}
console.log('Raw Lines...\n');
console.log(consoleKey)
const encodedKey = en53(rawKey);
const decodedKey = de53(encodedKey);
console.log('Encoded Key: new\n');
//console.log(encodedKey);
console.log('Encoded Count...', encodedKey.length);
consoleKey = '';
for (let i = 0; i < encodedKey.length; i += 20) {
    consoleKey += encodedKey.slice(i, i + 20);
  consoleKey += '\n';
}
console.log('Encoded Lines...\n');
console.log(consoleKey);
console.log('Raw Key: from key\n');
//console.log(decodedKey);
console.log('Raw Count...', decodedKey.length);
consoleKey = '';
for (let i = 0; i < decodedKey.length; i += 20) {
    consoleKey += decodedKey.slice(i, i + 20);
  consoleKey += '\n';
}
console.log('Raw Lines...\n');
console.log(consoleKey);
/**
 * Example of encoding and decoding keys.
 *
 * @property {string} rawKey - The original key before encoding.
 * @property {string} encodedKey - The key after encoding.
 * @property {string} decodedKey - The key after decoding.
 *
 * @example
 * // Encoding Process:
 * // rawKey = 
 * // encodedKey = en53(rawKey)
 * 
 * // Decoding Process:
 * // decodedKey = de53(encodedKey)
 * 
 * // Compare:
 * // rawKey == decodedKey
 */

