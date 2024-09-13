import data from './testimport.js';
// App root path
const APP_ROOT = '/build';

// Function to append content to the body without replacing it
function appendToBody(content) {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = content;
    document.body.appendChild(paragraph);
}

// Function to get the delimiter used in the URL path
function getDelimiter(path) {
    if (path.includes('-')) return '-';
    if (path.includes('_')) return '_';
    if (path.includes('/')) return '/';
    return ' '; // Default if no delimiter found
}

// Function to handle URL routing
function load() {
    // appendToBody('Load function started');

    // Get the current pathname from the URL
    const pathname = window.location.pathname;
    // appendToBody('Current pathname: ' + pathname);

    // Strip the app root from the path
    const path = pathname.replace(APP_ROOT, ''); // Adjust APP_ROOT if needed
    // appendToBody('Path after stripping APP_ROOT: ' + path);

    // Extract the parts of the path
    const parts = path.split(/[-_/]/); // Split on hyphens, underscores, or slashes
    // appendToBody('Path parts: ' + parts.join(', '));

    // Determine the delimiter
    let delimiter = getDelimiter(path);
    // appendToBody('Delimiter detected: ' + delimiter);

    // Extract the title part (everything except the last part)
    // let titlePart = parts.slice(0, -1).join(delimiter).replace(/^[-_]/, '').replace(/[-_]$/, ''); // Remove leading and trailing delimiters
    // appendToBody('Title part: ' + titlePart);

    // Extract the slug part (the last part of the path)
    // let slugPart = parts[parts.length - 1];
    // appendToBody('Slug part: ' + slugPart);
    // Extract the slug part (the last part of the path)
    let slugPart = parts[parts.length - 1];
    let titlePart;

    // Check if slugPart is a number
    if (!isNaN(slugPart) && slugPart.trim() !== '') {
        // slugPart is a number
        // appendToBody('Slug part is a number: ' + slugPart);
        titlePart = parts.slice(0, -1).join(delimiter).replace(/^[-_]/, '').replace(/[-_]$/, ''); // Remove leading and trailing delimiters
        // appendToBody('Shortened titlePart: ' + titlePart);
    } else {
        // slugPart is not a number
        // appendToBody('Slug part is not a number: ' + slugPart);
        titlePart = parts.join(delimiter).replace(/^[-_]/, '').replace(/[-_]$/, ''); // Remove leading and trailing delimiters
        // appendToBody('Built long titlePart: ' + titlePart);
    }    
    // appendToBody('Calling query function...');
    // appendToBody('Using titlePart...' + titlePart);
    // appendToBody('Using slugPart...' + slugPart);
    // appendToBody('Using delimiter...' + delimiter);

    // Query the data
    query(data, titlePart, slugPart, delimiter);

    // appendToBody('Load function complete');
}

function query(data, titlePart, slugPart, delimiter) {
    // appendToBody('Query function started');

    // Ensure the simulated title part is lowercased and formatted correctly
    const formattedTitle = titlePart.toLowerCase().replace(/ /g, delimiter);

    for (const item of data) {

        // Format each title in the JSON data with the same delimiter
        const jsonTitle = item.title.toLowerCase().replace(/ /g, delimiter); // Use the delimiter for spaces
        // appendToBody('Checking item: ' + item.title);
        // appendToBody('Formatted title: ' + formattedTitle);
        // appendToBody('Formatted json: ' + jsonTitle);

        // if (item.slug === slugPart && formattedTitle === jsonTitle) {
        if (formattedTitle === jsonTitle) { // Use simpler self healing title evaluation
            // appendToBody('Match found: Hello, World!');
            appendToBody('<h1>Hello, World!</h1>');
            return;
        } else {
            // appendToBody('No match for: ' + item.title);
        }
    }

    appendToBody('<h1>Not found!</h1>');
}

// Load on page load
window.addEventListener('load', load);








