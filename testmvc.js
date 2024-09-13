// testmvc.js

const xhr = new XMLHttpRequest();
xhr.open('GET', '/appsmvc/testmvc.json', false); // Adjust the path as needed

let data = [];

xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        try {
            const json = JSON.parse(xhr.responseText);

            // Mapping the new JSON structure into the data array
            data = Object.entries(json).map(([key, value]) => {
                return { key, value };
            });

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
