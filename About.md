// # App.js client-side routing Model View Controller framework
    // /apps # App root directory
    // /apps/src # App core files
    // /static # App assets
// # Base files and framework paths
    // /apps/App.js 
    // /apps/app.json
    // /apps/data.js
    // /apps/src/model.js
    // /apps/src/view.js
    // /apps/src/controller.js
    // /static/index.htm

// # App maps to these default paths
    // /var/www/apps
    // /var/www/apps/src
    // /var/www/html/static
// #App sample nginx configuration
    // # Handle requests for the /apps subdirectory
    // location /static/ {
        // try_files $uri $uri/ /static/index.html;
    // }

    // # Serve static JavaScript files and other assets from /var/www/apps
    // location /apps/ {
        // root /var/www;
    // }

import data from './testmvc.js';

// Accessing the 'model', 'view', and 'controller' objects directly
console.log(data.model); 
console.log(data.view); 
console.log(data.controller);

// Accessing nested values:
console.log(data.model.posts.id);  // Outputs: "number"
console.log(data.view.posts.html); // Outputs: "Post.html"
console.log(data.controller.action.create); // Outputs: "post"

{
  "model": {
    "posts": { 
       "id": "number", 
       "type": "string", 
       "date": "date" 
    }
  },
  
  "view": {
    "posts": { 
       "init": "function", 
       "load": "function",
       "html": "Post.html"
    }
  },
  
  "controller": {
    "action": { 
       "create": "post", 
       "update": "post",
       "delete": "get",
       "read": "get"
    }
  }
}

const data = {
  model: {
    posts: {
      id: "number", 
      type: "string", 
      date: "date"
    }
  },
  
  view: {
    posts: {
      init: "function", 
      load: "function",
      html: "Post.html"
    }
  },
  
  controller: {
    action: {
      create: "post", 
      update: "post",
      delete: "get",
      read: "get"
    }
  }
};


// Accessing model data
console.log(data.model.posts.id);      // Outputs: "number"
console.log(data.model.posts.type);    // Outputs: "string"

// Accessing view data
console.log(data.view.posts.html);     // Outputs: "Post.html"

// Accessing controller actions
console.log(data.controller.action.create);  // Outputs: "post"
console.log(data.controller.action.delete);  // Outputs: "get"


            const json = JSON.parse(xhr.responseText);

            // Assign the parsed JSON directly to `data` to maintain the structure
            data = json;

const data = [
  {
     "model": {
        "posts": {
           "id": "number",
           "type": "string",
           "date": "date"
        }
     }
  }
];

            const json = JSON.parse(xhr.responseText);

            // Using Object.entries to build the data array
            data = Object.entries(json).map(([key, value]) => ({ [key]: value }));


const data = [
  {
    "model": {
      "posts": {
        "id": "number",
        "type": "string",
        "date": "date"
      }
    }
  },
  {
    "view": {
      "posts": {
        "init": "function",
        "load": "function",
        "html": "Post.html"
      }
    }
  },
  {
    "controller": {
      "action": {
        "create": "post",
        "update": "post",
        "delete": "get",
        "read": "get"
      }
    }
  }
];

for (const item of data) {
    if (item.model) {
        console.log(item.model.posts.id);  // Outputs: "number"
    }

    if (item.view) {
        console.log(item.view.posts.html);  // Outputs: "Post.html"
    }

    if (item.controller) {
        console.log(item.controller.action.create);  // Outputs: "post"
    }
}

           // Literal key value pairs method 
           // hardcoded key name key 
           // hardcoded key name value
            // Mapping the new JSON structure into the data array
           data = Object.entries(json).map(([key, value]) => {
                return { key, value };
            });

           // Dynamic computed method
           // Using Object.entries to build the data array
            data = Object.entries(json).map(([key, value]) => ({ [key]: value }));


