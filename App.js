import data from './data.js';
// App root path
const APP_ROOT = '/apps';
const APP_SRC = '/apps/src'
let controller, action, model, view;
init(); // Set path variable assignments immediately

const APP_ROUTE = controller;
const URL_ACTION = action;
const APP_MODEL = model;
const APP_VIEW = view;


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

// Function to initialize necessary variable assignments
function init() {
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
    
    // Extract the controller part
    let controllerPart = parts.slice(1, 2).join(delimiter).replace(/^[-_]/, '').replace(/[-_]$/, ''); // Remove leading and trailing delimiters
    // appendToBody('Controller part: ' + controllerPart);

    // Extract the controller part
    let actionPart = parts.slice(2, 3).join(delimiter).replace(/^[-_]/, '').replace(/[-_]$/, ''); // Remove leading and trailing delimiters
    // appendToBody('Action part: ' + actionPart);

    // Extract the controller part
    let modelPart = parts.slice(3, 4).join(delimiter).replace(/^[-_]/, '').replace(/[-_]$/, ''); // Remove leading and trailing delimiters
    // appendToBody('Model part: ' + modelPart);

    // Extract the controller part
    let viewPart = parts.slice(4, 5).join(delimiter).replace(/^[-_]/, '').replace(/[-_]$/, ''); // Remove leading and trailing delimiters
    // appendToBody('View part: ' + viewPart);

    controller = controllerPart;
    action = actionPart;
    model = modelPart;
    view = viewPart;
}


// Function to handle URL routing
function load() {
    // appendToBody('Load function started');
    const [[modelKey]] = Object.entries(data.model);
    const [[viewKey]] = Object.entries(data.view);
    const [[controllerKey]] = Object.entries(data.controller);
    // Destructuring to access the nth key-value pair
    const [, , , [actionKey]] = Object.entries(data.controller.action);
    
    
        // console.log(modelKey); // Outputs "posts"
    // appendToBody('Load model...' + modelKey);
    // appendToBody('Load view...' + viewKey);
    // appendToBody('Load controller...' + controllerKey);
    // appendToBody('Load action...' + actionKey);

    
    // Get the current pathname from the URL
    const pathname = window.location.pathname;
    // appendToBody('Current pathname: ' + pathname);

    // Strip the app root from the path
    const path = pathname.replace(APP_ROOT, ''); // Adjust APP_ROOT if needed
    // appendToBody('Path after stripping APP_ROOT: ' + path);

    // Extract the parts of the path
    // const parts = path.split(/[-_/]/); // Split on hyphens, underscores, or slashes
    // appendToBody('Path parts: ' + parts.join(', '));

    // Determine the delimiter
    let delimiter = getDelimiter(path);
    // appendToBody('Delimiter detected: ' + delimiter);


    // Query the data
    query(data, delimiter);

    // appendToBody('Load function complete');
}

function query(data, delimiter) {
    // appendToBody('Query function started');
    // appendToBody('Load function started');
    const [[modelKey]] = Object.entries(data.model);
    const [[viewKey]] = Object.entries(data.view);
    const [[controllerKey]] = Object.entries(data.controller);
    // Destructuring to access the nth key-value pair
    const [, , , [actionKey]] = Object.entries(data.controller.action);

    if (APP_ROUTE == controllerKey) {
        // appendToBody('Query controller OK');
    }
    if (URL_ACTION == actionKey) {
        // appendToBody('Query action OK');
    }
    if (APP_MODEL == modelKey) {
        // appendToBody('Query model OK');
    }
    if (APP_VIEW == viewKey) {
        // appendToBody('Query view OK');
        appendToBody('<h1>Hello, World!</h1>');
        return;
    }
    
    // appendToBody('<h1>Hello, World!</h1>');
    // return;

    appendToBody('<h1>Not found!</h1>');
}

// Load on page load
window.addEventListener('load', load);

















