const fs = require('fs');
const path = require('path');

const controllersDir = path.join(__dirname, '/apps/controllers');
const outputFilePath = path.join(__dirname, '/apps/AppController.js');

// Function to extract controller class names based on the pattern 'SomeNameController.js'
function getClassName(fileName) {
  return fileName.replace('.js', '');
}

// Function to read and collect controller class content
function collectControllers() {
  const controllerFiles = fs.readdirSync(controllersDir).filter(file => file.endsWith('Controller.js'));
  const classDefinitions = [];
  
  controllerFiles.forEach(file => {
    const filePath = path.join(controllersDir, file);
    const className = getClassName(file);

    // Read the content of each controller file
    const fileContent = fs.readFileSync(filePath, 'utf8');

    // Assuming each controller file has a default export for the class definition
    classDefinitions.push(`// Content from ${file}\n${fileContent}\n`);
  });

  return classDefinitions.join('\n');
}

// Write the collected controllers into the controllers.js file
function writeControllersFile() {
  const classDefinitions = collectControllers();

  // Creating the AppController class that aggregates all controller classes
  const fileContent = `
${classDefinitions}

// AppController aggregates all controller instances
class AppController {
  constructor() {
    ${fs.readdirSync(controllersDir)
      .filter(file => file.endsWith('Controller.js'))
      .map(file => {
        const className = getClassName(file);
        return `this.${className} = new ${className}();`;
      })
      .join('\n    ')}
  }
}

export default AppController;
`;

  // Write the file
  fs.writeFileSync(outputFilePath, fileContent, 'utf8');
  console.log('AppController.js has been created successfully.');
}

// Execute the function to generate controllers.js
writeControllersFile();
