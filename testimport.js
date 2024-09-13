// testimport.js

const xhr = new XMLHttpRequest();
xhr.open('GET', '/apps/testjson.json', false); // Adjust the path as needed

let data = [];

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            try {
                const json = JSON.parse(xhr.responseText);
                data = Object.entries(json).map(([slug, title]) => ({ slug, title }));

            } catch (error) {
                reject('Failed to parse JSON');
            }
        } else {
            reject('Failed to load JSON data');
        }
    };

    xhr.onerror = function () {
        reject('Network error');
    };

    xhr.send();

export default data;




