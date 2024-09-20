const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://myfreew.freemyip.com/apps/cors/test', false); // false for synchronous request

// Set up the onload event handler
xhr.onload = function() {
    if (xhr.status === 200) {
        // Parse the response if necessary
        const response = JSON.parse(xhr.responseText);
        console.log(response.message);
    } else {
        console.error(xhr.status);
    }
};

// Set up the onerror event handler to catch network errors
xhr.onerror = function() {
    console.error('Network error occurred.');
};

// Send the request
xhr.send();
