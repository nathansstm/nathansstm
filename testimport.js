// testimport.js

const xhr = new XMLHttpRequest();
xhr.open('GET', 'testjson.json', true); // Adjust the path as needed

const fetchData = new Promise((resolve, reject) => {
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            try {
                const json = JSON.parse(xhr.responseText);
                const data = Object.entries(json).map(([slug, title]) => ({ slug, title }));
                resolve(data);
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
});

export default fetchData.then(data => data);


