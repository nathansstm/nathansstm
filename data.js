// data.js

const xhr = new XMLHttpRequest();
xhr.open('GET', '/apps/app.json', false); // Adjust the path as needed

let data = {};

xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        try {
            const json = JSON.parse(xhr.responseText);

            // Assign the parsed JSON directly to `data` to maintain the structure
            data = json;

        } catch (error) {
            console.error('Failed to parse JSON');
        }
    } else {
        console.error('Failed to load JSON data');
    }
};

xhr.onerror = function () {
    console.error('Network error');
};

xhr.send();

export default data;


