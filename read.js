function sendGetRequest(url, id) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', `${url}/${id}`, false);  // false for synchronous request
    
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log('Success:', xhr.responseText);
        } else {
            console.log('Error:', xhr.status, xhr.statusText);
        }
    };
    
    xhr.onerror = function () {
        console.error('Request failed.');
    };

    // Send request without a payload
    xhr.send();
}

// Test ID
var testId = 123;

// Replace with your API endpoint URL
var url = 'https://example.com/api/users'; 

// Trigger the request
sendGetRequest(url, testId);
