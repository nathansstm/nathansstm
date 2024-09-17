function sendUpdateRequest(url, data) {
    var xhr = new XMLHttpRequest();
    xhr.open('PUT', url, false);  // false for synchronous request
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    
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

    // Send data as JSON string
    xhr.send(JSON.stringify(data));
}

// Test payload
var postData = {
    id: 123,  // For an update request, you can include the ID; for create, leave it out or set null.
    name: 'John Doe',
    email: 'john@example.com'
};

// Replace with your API endpoint URL
var url = 'https://example.com/api/users'; 

// Trigger the request
sendUpdateRequest(url, postData);


