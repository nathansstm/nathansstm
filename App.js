import data from './data.js';
// App root path
const APP_ROOT = '/apps';
const APP_SRC = '/apps/src'
const APP_STATIC = '/apps/template';
const APP_ACTION = '/apps/controllers';
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
    const [, , , [actionKey]] = Object.entries(data.controller[APP_ROUTE]);
    
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
    // const [[controllerKey]] = Object.entries(data.controller);
    const [[controllerKey]] = Object.entries(data.controller);
    // Destructuring to access the nth key-value pair
    const [, , , [actionKey]] = Object.entries(data.controller[APP_ROUTE]);

    if (APP_ROUTE == controllerKey) {
        // appendToBody('Query controller OK');
        // Step 1: Assign the constant value to a new variable
        let newController = APP_ROUTE;

        // Step 2: Check if the last character is "s" and remove it
        // if (newController.endsWith("s")) {
            // newController = newController.slice(0, -1);
        // }
        const APP_CONTROLLER = APP_ACTION + delimiter + newController + '_controller.js';


        
        
        // Minimal XHR to fetch template contents
        var xhrController = new XMLHttpRequest();
        xhrController.open('GET', APP_CONTROLLER, false); // async set to false
        xhrController.send(null);

        // Capture template content
        var controllerContent = xhrController.responseText;
        
                
        // core/framework.js
        // import { PostController } from './controllers/PostController.js';
    }
    if (URL_ACTION == actionKey) {
        // appendToBody('Query action OK'); // Load controller action
        // Find function start
        const functionName = `function ${actionKey}`;
        const functionStartIndex = controllerContent.indexOf(functionName);

        let functionBodyStartIndex = controllerContent.indexOf('{', functionStartIndex);
        let functionBodyEndIndex = controllerContent.indexOf('}', functionBodyStartIndex);

        const functionCode = controllerContent.substring(functionStartIndex, functionBodyEndIndex + 1);
        // console.log(functionCode);


        // Use Function constructor to create and call the function
        const func = new Function('return ' + functionCode)();
        // console.log('Function Output:', func());

        appendToBody(func()); // Append action

        
    }
    if (APP_MODEL == modelKey) {
        // appendToBody('Query model OK'); // Load data access object
    }
    if (APP_VIEW == viewKey) {
        // appendToBody('Query view OK');
        appendToBody('<h1>Hello, World!</h1>'); // Append view template static content
        // const APP_VIEW = "views"; // Example value

        // Step 1: Assign the constant value to a new variable
        let newVariable = APP_VIEW;

        // Step 2: Check if the last character is "s" and remove it
        if (newVariable.endsWith("s")) {
            newVariable = newVariable.slice(0, -1);
        }

        // Step 3: Capitalize the first letter
        newVariable = newVariable.charAt(0).toUpperCase() + newVariable.slice(1);
        const APP_TEMPLATE = APP_STATIC + delimiter + newVariable + '.html';
        // appendToBody('Template file: ' + APP_TEMPLATE); // Append view template static content

        // Minimal XHR to fetch template contents
        var xhrTemplate = new XMLHttpRequest();
        xhrTemplate.open('GET', APP_TEMPLATE, false); // async set to false
        xhrTemplate.send(null);

        // Capture template content
        var templateContent = xhrTemplate.responseText;
        appendToBody(templateContent); // Append view template static content

        
        // console.log(newVariable); // Output: View        
        return;
    }
    
    // appendToBody('<h1>Hello, World!</h1>');
    // return;

    appendToBody('<h1>Not found!</h1>');
}

// Load on page load
window.addEventListener('load', load);


















