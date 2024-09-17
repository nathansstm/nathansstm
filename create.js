function sendCreateRequest(url, data) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, false);  // false for synchronous request
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    
    xhr.onload = function () {
        if (xhr.status === 201) {  // 201 Created is a common status code for successful POST
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

// Test payload without id
var postData = {
    name: 'Jane Doe',
    email: 'jane@example.com'
};

// Replace with your API endpoint URL
var url = 'https://example.com/api/users'; 

// Trigger the request
sendCreateRequest(url, postData);
