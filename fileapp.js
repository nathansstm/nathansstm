// #fileapp.js

const xhr = new XMLHttpRequest();
xhr.open("GET", "http://193.149.164.45:15012/apps/mysql/test", false);  // async false for synchronous request
xhr.onload = function() {
  if (xhr.status === 200) {
    console.log("Response: ", xhr.responseText);
  } else {
    console.error("Error: ", xhr.status, xhr.statusText);
  }
};
xhr.send();
// http://193.149.164.45:3000/apps/mysql/test




