export const simulatedFileContent = `
    <post-57>
<p>
I have here the most simple method for generating self signed SSL certificates using the package Openssl and copied to a directory for use with nginx. This method uses Rsa for encryption and is not the best choice standalone for live server environments but depending on your Certificate Authority and use case will allow you to atleast meet the most base requirement for most Https protocol communication.
</p>
<pre>
sudo apt-get update
sudo apt-get install openssl 
sudo mkdir -p /etc/nginx/ssl
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/nginx/ssl/yourdomain.key -out /etc/nginx/ssl/yourdomain.crt
<button class="copy-btn" data-code="57">&lt;&gt;</button>
</pre>
    </post-57>
    <post-56>
<p>
I have some code here that could be useful for testing encrypted Ciphertext this code was made for Nodejs and uses the Fs module only for possible work task with a file that could contain a Ciphertext.
</p>
<pre>
const fs = require('fs');

// Replace this with your cipher text
const cipherText = 'c3FFIVUrILF5v';

// Character map used in the encryption
const replacementChars = '0987654321aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ';

// Function to analyze the frequency of characters
function analyzeFrequency(text) {
    const frequency = {};
    for (const char of text) {
        frequency[char] = (frequency[char] || 0) + 1;
    }
    return frequency;
}

// Function to attempt a simple substitution cipher
function attemptDecryption(cipherText, shift) {
    const shiftCharacter = (char, shiftAmount) => {
        const charIndex = replacementChars.indexOf(char);
        if (charIndex === -1) return char; // Return character unchanged if not found
        const newIndex = (charIndex + shiftAmount) % replacementChars.length;
        return replacementChars[newIndex];
    };

    let decrypted = '';
    for (const char of cipherText) {
        decrypted += shiftCharacter(char, -shift); // Attempt decryption with the given shift
    }
    return decrypted;
}

// Function to test various shifts and show results
function testShifts(cipherText) {
    for (let shift = 0; shift < replacementChars.length; shift++) {
        const decrypted = attemptDecryption(cipherText, shift);
        console.log(\`Shift $\{shift}: $\{decrypted}\`);
    }
}

// Analyze frequency of characters in the cipher text
const frequency = analyzeFrequency(cipherText);
console.log('Character Frequency Analysis:', frequency);

// Attempt to decrypt the cipher text with different shifts
testShifts(cipherText);
<button class="copy-btn" data-code="56">&lt;&gt;</button>
</pre>
    </post-56>
    <post-55>
<p>
I have adopted a copy of the Mit No Attribution license for my own source code and although I am also a fan of GNU License this one I think is also very good if you agree with the terms and do not require a more specific license like the BSD 3 Clause license then this may be just what youre looking for provided here.
</p>
<pre>
MIT No Attribution

Copyright

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
<button class="copy-btn" data-code="55">&lt;&gt;</button>
</pre>
    </post-55>
    <post-54>
<p>
I have links to use that have been fetched from a new content scraper I made that pulls from Github, using Xmlhttprequest or fetch and simple Cgi program with curl to bypass Cors. I am a huge fan of Freecodecamp and Github, And noticed recently a good path any programmer or code hobbyist can use from the Freecodecamp repo, I think these links are so good that I have a current content fetch provided here.
</p>
<pre>
GitHub Links Scraper
Test Button
Test Button
Load GitHub Content
Load Content
Fetching content...

Content loaded successfully.

Operation completed.

Scraped Links:
Title: Actions Automate any workflow
Description (Link): https://github.com/features/actions

Title: Packages Host and manage packages
Description (Link): https://github.com/features/packages

Title: Security Find and fix vulnerabilities
Description (Link): https://github.com/features/security

Title: Codespaces Instant dev environments
Description (Link): https://github.com/features/codespaces

Title: GitHub Copilot Write better code with AI
Description (Link): https://github.com/features/copilot

Title: Code review Manage code changes
Description (Link): https://github.com/features/code-review

Title: Issues Plan and track work
Description (Link): https://github.com/features/issues

Title: Discussions Collaborate outside of code
Description (Link): https://github.com/features/discussions

Title: All features
Description (Link): https://github.com/features

Title: Documentation
Description (Link): https://docs.github.com

Title: GitHub Skills
Description (Link): https://skills.github.com

Title: Blog
Description (Link): https://github.blog

Title: Enterprise
Description (Link): https://github.com/enterprise

Title: Teams
Description (Link): https://github.com/team

Title: Startups
Description (Link): https://github.com/enterprise/startups

Title: Healthcare
Description (Link): https://github.com/solutions/industries/healthcare

Title: Financial services
Description (Link): https://github.com/solutions/industries/financial-services

Title: Manufacturing
Description (Link): https://github.com/solutions/industries/manufacturing

Title: CI/CD & Automation
Description (Link): https://github.com/solutions/ci-cd

Title: DevOps
Description (Link): https://github.com/solutions/devops

Title: DevSecOps
Description (Link): https://github.com/solutions/devsecops

Title: AI
Description (Link): /resources/articles/ai

Title: DevOps
Description (Link): /resources/articles/devops

Title: Security
Description (Link): /resources/articles/security

Title: Software Development
Description (Link): /resources/articles/software-development

Title: View all
Description (Link): /resources/articles

Title: Learning Pathways
Description (Link): https://resources.github.com/learn/pathways

Title: White papers, Ebooks, Webinars
Description (Link): https://resources.github.com

Title: Customer Stories
Description (Link): https://github.com/customer-stories

Title: Partners
Description (Link): https://partner.github.com

Title: GitHub Sponsors Fund open source developers
Description (Link): /sponsors

Title: The ReadME Project GitHub community articles
Description (Link): https://github.com/readme

Title: Topics
Description (Link): https://github.com/topics

Title: Trending
Description (Link): https://github.com/trending

Title: Collections
Description (Link): https://github.com/collections

Title: Enterprise platform AI-powered developer platform
Description (Link): /enterprise

Title: Advanced Security Enterprise-grade security features
Description (Link): https://github.com/enterprise/advanced-security

Title: GitHub Copilot Enterprise-grade AI features
Description (Link): /features/copilot#enterprise

Title: Premium Support Enterprise-grade 24/7 support
Description (Link): /premium-support

Title: Pricing
Description (Link): https://github.com/pricing

Title: Notifications
Description (Link): /login?return_to=%2FfreeCodeCamp%2FfreeCodeCamp

Title: Fork 37k
Description (Link): /login?return_to=%2FfreeCodeCamp%2FfreeCodeCamp

Title: Star 401k
Description (Link): /login?return_to=%2FfreeCodeCamp%2FfreeCodeCamp

Title: Code
Description (Link): /freeCodeCamp/freeCodeCamp

Title: Issues 190
Description (Link): /freeCodeCamp/freeCodeCamp/issues

Title: Pull requests 61
Description (Link): /freeCodeCamp/freeCodeCamp/pulls

Title: Actions
Description (Link): /freeCodeCamp/freeCodeCamp/actions

Title: Projects 3
Description (Link): /freeCodeCamp/freeCodeCamp/projects

Title: Security
Description (Link): /freeCodeCamp/freeCodeCamp/security

Title: Insights
Description (Link): /freeCodeCamp/freeCodeCamp/pulse

Title: Code
Description (Link): /freeCodeCamp/freeCodeCamp

Title: Issues
Description (Link): /freeCodeCamp/freeCodeCamp/issues

Title: Pull requests
Description (Link): /freeCodeCamp/freeCodeCamp/pulls

Title: Actions
Description (Link): /freeCodeCamp/freeCodeCamp/actions

Title: Projects
Description (Link): /freeCodeCamp/freeCodeCamp/projects

Title: Security
Description (Link): /freeCodeCamp/freeCodeCamp/security

Title: Insights
Description (Link): /freeCodeCamp/freeCodeCamp/pulse

Title: README
Description (Link): #

Title: Code of conduct
Description (Link): #

Title: BSD-3-Clause license
Description (Link): #

Title: Security
Description (Link): #

Title: Certifications
Description (Link): #certifications

Title: The Learning Platform
Description (Link): #the-learning-platform

Title: Reporting Bugs and Issues
Description (Link): #reporting-bugs-and-issues

Title: Reporting Security Issues and Responsible Disclosure
Description (Link): #reporting-security-issues-and-responsible-disclosure

Title: Contributing
Description (Link): #contributing

Title: Platform, Build and Deployment Status
Description (Link): #platform-build-and-deployment-status

Title: License
Description (Link): #license

Title: Responsive Web Design Certification
Description (Link): https://www.freecodecamp.org/learn/2022/responsive-web-design/

Title: Learn HTML by Building a Cat Photo App
Description (Link): https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-html-by-building-a-cat-photo-app

Title: Learn Basic CSS by Building a Cafe Menu
Description (Link): https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-basic-css-by-building-a-cafe-menu

Title: Learn CSS Colors by Building a Set of Colored Markers
Description (Link): https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-css-colors-by-building-a-set-of-colored-markers

Title: Learn HTML Forms by Building a Registration Form
Description (Link): https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-html-forms-by-building-a-registration-form

Title: Learn the CSS Box Model by Building a Rothko Painting
Description (Link): https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-the-css-box-model-by-building-a-rothko-painting

Title: Learn CSS Flexbox by Building a Photo Gallery
Description (Link): https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-css-flexbox-by-building-a-photo-gallery

Title: Learn Typography by Building a Nutrition Label
Description (Link): https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-typography-by-building-a-nutrition-label

Title: Learn Accessibility by Building a Quiz
Description (Link): https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-accessibility-by-building-a-quiz

Title: Learn More About CSS Pseudo Selectors by Building A Balance Sheet
Description (Link): https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-more-about-css-pseudo-selectors-by-building-a-balance-sheet

Title: Learn Intermediate CSS by Building a Picasso Painting
Description (Link): https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-intermediate-css-by-building-a-picasso-painting

Title: Learn Responsive Web Design by Building a Piano
Description (Link): https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-responsive-web-design-by-building-a-piano

Title: Learn CSS Variables by Building a City Skyline
Description (Link): https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-css-variables-by-building-a-city-skyline

Title: Learn CSS Grid by Building a Magazine
Description (Link): https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-css-grid-by-building-a-magazine

Title: Learn CSS Transforms by Building a Penguin
Description (Link): https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-css-transforms-by-building-a-penguin

Title: Learn CSS Animations by Building a Ferris Wheel
Description (Link): https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-css-animation-by-building-a-ferris-wheel

Title: Survey Form
Description (Link): https://www.freecodecamp.org/learn/2022/responsive-web-design/build-a-survey-form-project/build-a-survey-form

Title: Tribute Page
Description (Link): https://www.freecodecamp.org/learn/2022/responsive-web-design/build-a-tribute-page-project/build-a-tribute-page

Title: Technical Documentation Page
Description (Link): https://www.freecodecamp.org/learn/2022/responsive-web-design/build-a-technical-documentation-page-project/build-a-technical-documentation-page

Title: Product Landing Page
Description (Link): https://www.freecodecamp.org/learn/2022/responsive-web-design/build-a-product-landing-page-project/build-a-product-landing-page

Title: Personal Portfolio Webpage
Description (Link): https://www.freecodecamp.org/learn/2022/responsive-web-design/build-a-personal-portfolio-webpage-project/build-a-personal-portfolio-webpage

Title: JavaScript Algorithms and Data Structures Certification
Description (Link): https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/

Title: Learn Introductory JavaScript by Building a Pyramid Generator
Description (Link): https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/#learn-introductory-javascript-by-building-a-pyramid-generator

Title: Learn Basic JavaScript by Building a Role Playing Game
Description (Link): https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/#learn-basic-javascript-by-building-a-role-playing-game

Title: Learn Form Validation by Building a Calorie Counter
Description (Link): https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/#learn-form-validation-by-building-a-calorie-counter

Title: Learn Basic String and Array Methods by Building a Music Player
Description (Link): https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/#learn-basic-string-and-array-methods-by-building-a-music-player

Title: Learn the Date Object by Building a Date Formatter
Description (Link): https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/#learn-the-date-object-by-building-a-date-formatter

Title: Learn Modern JavaScript Methods By Building Football Team Cards
Description (Link): https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/#learn-modern-javascript-methods-by-building-football-team-cards

Title: Learn localStorage by Building a Todo App
Description (Link): https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/#learn-localstorage-by-building-a-todo-app

Title: Learn Recursion by Building a Decimal to Binary Converter
Description (Link): https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/#learn-recursion-by-building-a-decimal-to-binary-converter

Title: Learn Basic Algorithmic Thinking by Building a Number Sorter
Description (Link): https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/#learn-basic-algorithmic-thinking-by-building-a-number-sorter

Title: Learn Advanced Array Methods by Building a Statistics Calculator
Description (Link): https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/#learn-advanced-array-methods-by-building-a-statistics-calculator

Title: Learn Functional Programming by Building a Spreadsheet
Description (Link): https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/#learn-functional-programming-by-building-a-spreadsheet

Title: Learn Regular Expressions by Building a Spam Filter
Description (Link): https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/#learn-regular-expressions-by-building-a-spam-filter

Title: Learn Basic OOP by Building a Shopping Cart
Description (Link): https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/#learn-basic-oop-by-building-a-shopping-cart

Title: Learn Intermediate OOP by Building a Platformer Game
Description (Link): https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/#learn-intermediate-oop-by-building-a-platformer-game

Title: Learn Intermediate Algorithmic Thinking by Building a Dice Game
Description (Link): https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/#review-algorithmic-thinking-by-building-a-dice-game

Title: Learn Fetch and Promises By Building an fCC Authors Page
Description (Link): https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/#learn-fetch-and-promises-by-building-an-fcc-authors-page

Title: Learn Asynchronous Programming by Building an fCC Forum Leaderboard
Description (Link): https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/#learn-asynchronous-programming-by-building-an-fcc-forum-leaderboard

Title: Palindrome Checker
Description (Link): https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/build-a-palindrome-checker-project/build-a-palindrome-checker

Title: Roman Numeral Converter
Description (Link): https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/build-a-roman-numeral-converter-project/build-a-roman-numeral-converter

Title: Telephone Number Validator
Description (Link): https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/build-a-telephone-number-validator-project/build-a-telephone-number-validator

Title: Cash Register
Description (Link): https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/build-a-cash-register-project/build-a-cash-register

Title: Pokémon Search App
Description (Link): https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/build-a-pokemon-search-app-project/build-a-pokemon-search-app

Title: Front End Libraries Certification
Description (Link): https://www.freecodecamp.org/learn/front-end-development-libraries/

Title: Bootstrap
Description (Link): https://www.freecodecamp.org/learn/front-end-development-libraries/#bootstrap

Title: jQuery
Description (Link): https://www.freecodecamp.org/learn/front-end-development-libraries/#jquery

Title: Sass
Description (Link): https://www.freecodecamp.org/learn/front-end-development-libraries/#sass

Title: React
Description (Link): https://www.freecodecamp.org/learn/front-end-development-libraries/#react

Title: Redux
Description (Link): https://www.freecodecamp.org/learn/front-end-development-libraries/#redux

Title: React and Redux
Description (Link): https://www.freecodecamp.org/learn/front-end-development-libraries/#react-and-redux

Title: Random Quote Machine
Description (Link): https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-random-quote-machine

Title: Markdown Previewer
Description (Link): https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer

Title: Drum Machine
Description (Link): https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-drum-machine

Title: JavaScript Calculator
Description (Link): https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-javascript-calculator

Title: 25 + 5 Clock
Description (Link): https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-25--5-clock

Title: Data Visualization Certification
Description (Link): https://www.freecodecamp.org/learn/data-visualization/

Title: Data Visualization with D3
Description (Link): https://www.freecodecamp.org/learn/data-visualization/#data-visualization-with-d3

Title: JSON APIs and Ajax
Description (Link): https://www.freecodecamp.org/learn/data-visualization/#json-apis-and-ajax

Title: Bar Chart
Description (Link): https://www.freecodecamp.org/learn/data-visualization/data-visualization-projects/visualize-data-with-a-bar-chart

Title: Scatterplot Graph
Description (Link): https://www.freecodecamp.org/learn/data-visualization/data-visualization-projects/visualize-data-with-a-scatterplot-graph

Title: Heat Map
Description (Link): https://www.freecodecamp.org/learn/data-visualization/data-visualization-projects/visualize-data-with-a-heat-map

Title: Choropleth Map
Description (Link): https://www.freecodecamp.org/learn/data-visualization/data-visualization-projects/visualize-data-with-a-choropleth-map

Title: Treemap Diagram
Description (Link): https://www.freecodecamp.org/learn/data-visualization/data-visualization-projects/visualize-data-with-a-treemap-diagram

Title: Relational Database
Description (Link): https://www.freecodecamp.org/learn/relational-database/

Title: Learn Bash by Building a Boilerplate
Description (Link): https://www.freecodecamp.org/learn/relational-database/#learn-bash-by-building-a-boilerplate

Title: Learn Relational Databases by Building a Mario Database
Description (Link): https://www.freecodecamp.org/learn/relational-database/#learn-relational-databases-by-building-a-mario-database

Title: Learn Bash Scripting by Building Five Programs
Description (Link): https://www.freecodecamp.org/learn/relational-database/#learn-bash-scripting-by-building-five-programs

Title: Learn SQL by Building a Student Database: Part 1
Description (Link): https://www.freecodecamp.org/learn/relational-database/#learn-sql-by-building-a-student-database-part-1

Title: Learn SQL by Building a Student Database: Part 2
Description (Link): https://www.freecodecamp.org/learn/relational-database/#learn-sql-by-building-a-student-database-part-2

Title: Learn Advanced Bash by Building a Kitty Ipsum Translator
Description (Link): https://www.freecodecamp.org/learn/relational-database/#learn-advanced-bash-by-building-a-kitty-ipsum-translator

Title: Learn Bash and SQL by Building a Bike Rental Shop
Description (Link): https://www.freecodecamp.org/learn/relational-database/#learn-bash-and-sql-by-building-a-bike-rental-shop

Title: Learn Nano by Building a Castle
Description (Link): https://www.freecodecamp.org/learn/relational-database/#learn-nano-by-building-a-castle

Title: Learn Git by Building an SQL Reference Object
Description (Link): https://www.freecodecamp.org/learn/relational-database/#learn-git-by-building-an-sql-reference-object

Title: Salon Appointment Scheduler
Description (Link): https://www.freecodecamp.org/learn/relational-database/#build-a-salon-appointment-scheduler-project

Title: Celestial Bodies Database
Description (Link): https://www.freecodecamp.org/learn/relational-database/#build-a-celestial-bodies-database-project

Title: Periodic Table Database
Description (Link): https://www.freecodecamp.org/learn/relational-database/#build-a-periodic-table-database-project

Title: Number Guessing Game
Description (Link): https://www.freecodecamp.org/learn/relational-database/#build-a-number-guessing-game-project

Title: World Cup Database
Description (Link): https://www.freecodecamp.org/learn/relational-database/#build-a-world-cup-database-project

Title: Back End Development and APIs Certification
Description (Link): https://www.freecodecamp.org/learn/back-end-development-and-apis/

Title: Managing Packages with Npm
Description (Link): https://www.freecodecamp.org/learn/back-end-development-and-apis/#managing-packages-with-npm

Title: Basic Node and Express
Description (Link): https://www.freecodecamp.org/learn/back-end-development-and-apis/#basic-node-and-express

Title: MongoDB and Mongoose
Description (Link): https://www.freecodecamp.org/learn/back-end-development-and-apis/#mongodb-and-mongoose

Title: Timestamp Microservice
Description (Link): https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/timestamp-microservice

Title: Request Header Parser
Description (Link): https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/request-header-parser-microservice

Title: URL Shortener
Description (Link): https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/url-shortener-microservice

Title: Exercise Tracker
Description (Link): https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/exercise-tracker

Title: File Metadata Microservice
Description (Link): https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/file-metadata-microservice

Title: Quality Assurance Certification
Description (Link): https://www.freecodecamp.org/learn/quality-assurance/

Title: Quality Assurance and Testing with Chai
Description (Link): https://www.freecodecamp.org/learn/quality-assurance/#quality-assurance-and-testing-with-chai

Title: Advanced Node and Express
Description (Link): https://www.freecodecamp.org/learn/quality-assurance/#advanced-node-and-express

Title: Metric-Imperial Converter
Description (Link): https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/metric-imperial-converter

Title: Issue Tracker
Description (Link): https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/issue-tracker

Title: Personal Library
Description (Link): https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/personal-library

Title: Sudoku Solver
Description (Link): https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/sudoku-solver

Title: American British Translator
Description (Link): https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/american-british-translator

Title: Scientific Computing with Python Certification
Description (Link): https://www.freecodecamp.org/learn/scientific-computing-with-python/

Title: Learn String Manipulation by Building a Cipher
Description (Link): https://www.freecodecamp.org/learn/scientific-computing-with-python/#learn-string-manipulation-by-building-a-cipher

Title: Learn How to Work with Numbers and Strings by Implementing the Luhn Algorithm
Description (Link): https://www.freecodecamp.org/learn/scientific-computing-with-python/#learn-how-to-work-with-numbers-and-strings-by-implementing-the-luhn-algorithm

Title: Learn Lambda Functions by Building an Expense Tracker
Description (Link): https://www.freecodecamp.org/learn/scientific-computing-with-python/#learn-lambda-functions-by-building-an-expense-tracker

Title: Learn List Comprehension by Building a Case Converter Program
Description (Link): https://www.freecodecamp.org/learn/scientific-computing-with-python/#learn-list-comprehension-by-building-a-case-converter-program

Title: Learn the Bisection Method by Finding the Square Root of a Number
Description (Link): https://www.freecodecamp.org/learn/scientific-computing-with-python/#learn-the-bisection-method-by-finding-the-square-root-of-a-number

Title: Learn Regular Expressions by Building a Password Generator
Description (Link): https://www.freecodecamp.org/learn/scientific-computing-with-python/#learn-regular-expressions-by-building-a-password-generator

Title: Learn Algorithm Design by Building a Shortest Path Algorithm
Description (Link): https://www.freecodecamp.org/learn/scientific-computing-with-python/#learn-algorithm-design-by-building-a-shortest-path-algorithm

Title: Learn Recursion by Solving the Tower of Hanoi Puzzle
Description (Link): https://www.freecodecamp.org/learn/scientific-computing-with-python/#learn-recursion-by-solving-the-tower-of-hanoi-puzzle

Title: Learn Data Structures by Building the Merge Sort Algorithm
Description (Link): https://www.freecodecamp.org/learn/scientific-computing-with-python/#learn-data-structures-by-building-the-merge-sort-algorithm

Title: Learn Classes and Objects by Building a Sudoku Solver
Description (Link): https://www.freecodecamp.org/learn/scientific-computing-with-python/#learn-classes-and-objects-by-building-a-sudoku-solver

Title: Learn Tree Traversal by Building a Binary Search Tree
Description (Link): https://www.freecodecamp.org/learn/scientific-computing-with-python/#learn-tree-traversal-by-building-a-binary-search-tree

Title: Learn Special Methods by Building a Vector Space
Description (Link): https://www.freecodecamp.org/learn/scientific-computing-with-python/#learn-special-methods-by-building-a-vector-space

Title: Arithmetic Formatter
Description (Link): https://www.freecodecamp.org/learn/scientific-computing-with-python/build-an-arithmetic-formatter-project/build-an-arithmetic-formatter-project

Title: Time Calculator
Description (Link): https://www.freecodecamp.org/learn/scientific-computing-with-python/build-a-time-calculator-project/build-a-time-calculator-project

Title: Budget App
Description (Link): https://www.freecodecamp.org/learn/scientific-computing-with-python/build-a-budget-app-project/build-a-budget-app-project

Title: Polygon Area Calculator
Description (Link): https://www.freecodecamp.org/learn/scientific-computing-with-python/build-a-polygon-area-calculator-project/build-a-polygon-area-calculator-project

Title: Probability Calculator
Description (Link): https://www.freecodecamp.org/learn/scientific-computing-with-python/build-a-probability-calculator-project/build-a-probability-calculator-project

Title: Data Analysis with Python Certification
Description (Link): https://www.freecodecamp.org/learn/data-analysis-with-python/

Title: Data Analysis with Python Course
Description (Link): https://www.freecodecamp.org/learn/data-analysis-with-python/#data-analysis-with-python-course

Title: NumPy
Description (Link): https://www.freecodecamp.org/learn/data-analysis-with-python/#numpy

Title: Mean-Variance-Standard Deviation Calculator
Description (Link): https://www.freecodecamp.org/learn/data-analysis-with-python/data-analysis-with-python-projects/mean-variance-standard-deviation-calculator

Title: Demographic Data Analyzer
Description (Link): https://www.freecodecamp.org/learn/data-analysis-with-python/data-analysis-with-python-projects/demographic-data-analyzer

Title: Medical Data Visualizer
Description (Link): https://www.freecodecamp.org/learn/data-analysis-with-python/data-analysis-with-python-projects/medical-data-visualizer

Title: Page View Time Series Visualizer
Description (Link): https://www.freecodecamp.org/learn/data-analysis-with-python/data-analysis-with-python-projects/page-view-time-series-visualizer

Title: Sea Level Predictor
Description (Link): https://www.freecodecamp.org/learn/data-analysis-with-python/data-analysis-with-python-projects/sea-level-predictor

Title: Information Security Certification
Description (Link): https://www.freecodecamp.org/learn/information-security/

Title: Information Security with HelmetJS
Description (Link): https://www.freecodecamp.org/learn/information-security/#information-security-with-helmetjs

Title: Python for Penetration Testing
Description (Link): https://www.freecodecamp.org/learn/information-security/#python-for-penetration-testing

Title: Stock Price Checker
Description (Link): https://www.freecodecamp.org/learn/information-security/information-security-projects/stock-price-checker

Title: Anonymous Message Board
Description (Link): https://www.freecodecamp.org/learn/information-security/information-security-projects/anonymous-message-board

Title: Port Scanner
Description (Link): https://www.freecodecamp.org/learn/information-security/information-security-projects/port-scanner

Title: SHA-1 Password Cracker
Description (Link): https://www.freecodecamp.org/learn/information-security/information-security-projects/sha-1-password-cracker

Title: Secure Real Time Multiplayer Game
Description (Link): https://www.freecodecamp.org/learn/information-security/information-security-projects/secure-real-time-multiplayer-game

Title: Machine Learning with Python Certification
Description (Link): https://www.freecodecamp.org/learn/machine-learning-with-python/

Title: TensorFlow
Description (Link): https://www.freecodecamp.org/learn/machine-learning-with-python/#tensorflow

Title: How Neural Networks Work
Description (Link): https://www.freecodecamp.org/learn/machine-learning-with-python/#how-neural-networks-work

Title: Rock Paper Scissors
Description (Link): https://www.freecodecamp.org/learn/machine-learning-with-python/machine-learning-with-python-projects/rock-paper-scissors

Title: Cat and Dog Image Classifier
Description (Link): https://www.freecodecamp.org/learn/machine-learning-with-python/machine-learning-with-python-projects/cat-and-dog-image-classifier

Title: Book Recommendation Engine using KNN
Description (Link): https://www.freecodecamp.org/learn/machine-learning-with-python/machine-learning-with-python-projects/book-recommendation-engine-using-knn

Title: Linear Regression Health Costs Calculator
Description (Link): https://www.freecodecamp.org/learn/machine-learning-with-python/machine-learning-with-python-projects/linear-regression-health-costs-calculator

Title: Neural Network SMS Text Classifier
Description (Link): https://www.freecodecamp.org/learn/machine-learning-with-python/machine-learning-with-python-projects/neural-network-sms-text-classifier

Title: College Algebra with Python
Description (Link): https://www.freecodecamp.org/learn/college-algebra-with-python/

Title: Learn Ratios and Proportions
Description (Link): https://www.freecodecamp.org/learn/college-algebra-with-python/#learn-ratios-and-proportions

Title: Learn How to Solve for X
Description (Link): https://www.freecodecamp.org/learn/college-algebra-with-python/#learn-how-to-solve-for-x

Title: Learn Fractions and Decimals
Description (Link): https://www.freecodecamp.org/learn/college-algebra-with-python/#learn-fractions-and-decimals

Title: Learn Functions and Graphing
Description (Link): https://www.freecodecamp.org/learn/college-algebra-with-python/#learn-functions-and-graphing

Title: Learn Linear Functions
Description (Link): https://www.freecodecamp.org/learn/college-algebra-with-python/#learn-linear-functions

Title: Learn Common Factors and Square Roots
Description (Link): https://www.freecodecamp.org/learn/college-algebra-with-python/#learn-common-factors-and-square-roots

Title: Learn How to Graph Systems of Equations
Description (Link): https://www.freecodecamp.org/learn/college-algebra-with-python/#learn-how-to-graph-systems-of-equations

Title: Learn How to Solve Systems of Equations
Description (Link): https://www.freecodecamp.org/learn/college-algebra-with-python/#learn-how-to-solve-systems-of-equations

Title: Learn Applications of Linear Systems
Description (Link): https://www.freecodecamp.org/learn/college-algebra-with-python/#learn-applications-of-linear-systems

Title: Learn Quadratic Equations
Description (Link): https://www.freecodecamp.org/learn/college-algebra-with-python/#learn-quadratic-equations

Title: Learn Parent Graphs and Polynomials
Description (Link): https://www.freecodecamp.org/learn/college-algebra-with-python/#learn-parent-graphs-and-polynomials

Title: Learn Business Applications of College Algebra
Description (Link): https://www.freecodecamp.org/learn/college-algebra-with-python/#learn-business-applications-of-college-algebra

Title: Learn Simple and Compound Interest
Description (Link): https://www.freecodecamp.org/learn/college-algebra-with-python/#learn-simple-and-compound-interest

Title: Learn Exponents and Logarithms
Description (Link): https://www.freecodecamp.org/learn/college-algebra-with-python/#learn-exponents-and-logarithms

Title: College Algebra with Python: Conclusion
Description (Link): https://www.freecodecamp.org/learn/college-algebra-with-python/#college-algebra-with-python-conclusion

Title: Multi-Function Calculator
Description (Link): https://www.freecodecamp.org/learn/college-algebra-with-python/#build-a-multi-function-calculator-project

Title: Graphing Calculator
Description (Link): https://www.freecodecamp.org/learn/college-algebra-with-python/#build-a-graphing-calculator-project

Title: Three Math Games
Description (Link): https://www.freecodecamp.org/learn/college-algebra-with-python/#build-three-math-games-project

Title: Financial Calculator
Description (Link): https://www.freecodecamp.org/learn/college-algebra-with-python/#build-a-financial-calculator-project

Title: Data Graph Explorer
Description (Link): https://www.freecodecamp.org/learn/college-algebra-with-python/#build-a-data-graph-explorer-project

Title: (New) Foundational C# with Microsoft
Description (Link): https://www.freecodecamp.org/learn/foundational-c-sharp-with-microsoft/

Title: Write Your First Code Using C#
Description (Link): https://www.freecodecamp.org/learn/foundational-c-sharp-with-microsoft/#write-your-first-code-using-c-sharp

Title: Create and Run Simple C# Console Applications
Description (Link): https://www.freecodecamp.org/learn/foundational-c-sharp-with-microsoft/#create-and-run-simple-c-sharp-console-applications

Title: Add Logic to C# Console Applications
Description (Link): https://www.freecodecamp.org/learn/foundational-c-sharp-with-microsoft/#add-logic-to-c-sharp-console-applications

Title: Work with Variable Data in C# Console Applications
Description (Link): https://www.freecodecamp.org/learn/foundational-c-sharp-with-microsoft/#work-with-variable-data-in-c-sharp-console-applications

Title: Create Methods in C# Console Applications
Description (Link): https://www.freecodecamp.org/learn/foundational-c-sharp-with-microsoft/#create-methods-in-c-sharp-console-applications

Title: Debug C# Console Applications
Description (Link): https://www.freecodecamp.org/learn/foundational-c-sharp-with-microsoft/#debug-c-sharp-console-applications

Title: Foundational C# with Microsoft Certification Exam
Description (Link): https://www.freecodecamp.org/learn/foundational-c-sharp-with-microsoft/foundational-c-sharp-with-microsoft-certification-exam/foundational-c-sharp-with-microsoft-certification-exam

Title: forum
Description (Link): https://forum.freecodecamp.org

Title: YouTube channel
Description (Link): https://youtube.com/freecodecamp

Title: technical publication
Description (Link): https://www.freecodecamp.org/news

Title: Discord server
Description (Link): https://discord.gg/Z7Fm39aNtZ

Title: Join the community here
Description (Link): https://www.freecodecamp.org/signin

Title: Read our security policy and follow these steps to report a vulnerability
Description (Link): https://contribute.freecodecamp.org/#/security

Title: Please follow these steps to contribute
Description (Link): https://contribute.freecodecamp.org

Title: BSD-3-Clause
Description (Link): /freeCodeCamp/freeCodeCamp/blob/main/LICENSE.md

Title: /curriculum
Description (Link): /freeCodeCamp/freeCodeCamp/blob/main/curriculum

Title: patreon.com/freecodecamp
Description (Link): https://patreon.com/freecodecamp

Title: www.freecodecamp.org/donate
Description (Link): http://www.freecodecamp.org/donate

Title: TypeScript 67.0%
Description (Link): /freeCodeCamp/freeCodeCamp/search?l=typescript

Title: JavaScript 27.2%
Description (Link): /freeCodeCamp/freeCodeCamp/search?l=javascript

Title: CSS 5.5%
Description (Link): /freeCodeCamp/freeCodeCamp/search?l=css

Title: Dockerfile 0.2%
Description (Link): /freeCodeCamp/freeCodeCamp/search?l=dockerfile

Title: EJS 0.1%
Description (Link): /freeCodeCamp/freeCodeCamp/search?l=ejs

Title: HTML 0.0%
Description (Link): /freeCodeCamp/freeCodeCamp/search?l=html

Title: Terms
Description (Link): https://docs.github.com/site-policy/github-terms/github-terms-of-service

Title: Privacy
Description (Link): https://docs.github.com/site-policy/privacy-policies/github-privacy-statement

Title: Security
Description (Link): https://github.com/security

Title: Status
Description (Link): https://www.githubstatus.com/

Title: Docs
Description (Link): https://docs.github.com/

Title: Contact
Description (Link): https://support.github.com?tags=dotcom-footer<button class="copy-btn" data-code="54">&lt;&gt;</button>
<button class="copy-btn" data-code="54">&lt;&gt;</button>
</pre>
    </post-54>
    <post-53>
<p>
I like to keep Typefont simple, that being said here is a standard way to selfhost a font, provided you have a generated Web Open Font Format file as woff or woff2, the code below is enough to provide the font family name as a usable css attribute.
</p>
<pre>
@font-face {
    font-family: 'poppinsregular';
    src: url('poppins-regular.woff2') format('woff2'),
         url('poppins-regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
<button class="copy-btn" data-code="53">&lt;&gt;</button>
</pre>
    </post-53>
    <post-52>
<p>
I made a simple Bash program to interact for single file uploads to a Github repository using a Personal Access Token to Auth with curl and jq to handle the file as a payload for the REST Api, combine with wget or use a TREE loop as a workaround to using package gh and git if you need to.
</p>
<pre>
#!/bin/bash

# Replace with your GitHub username, repository name, and PAT
# USERNAME="your-username"
# REPO="your-repo"
# TOKEN="your-pat-token"
# BRANCH="main"


# Welcome message
echo "Welcome......"

# Prompt for the file name
read -p "Enter File: " FILE_NAME

# Check if the input is empty
if [ -z "$FILE_NAME" ]; then
    echo "Bad Response, Exiting......"
    exit 1
fi

# Check if the file exists
if [ ! -f "$FILE_NAME" ]; then
    echo "File does not exist, Exiting......"
    exit 1
fi

# Base64 encode the file's content
FILE_CONTENT=$(base64 "$FILE_NAME")

# Set up the API URL
API_URL="https://api.github.com/repos/$USERNAME/$REPO/contents/$FILE_NAME"

# Prepare JSON data for the API call
JSON_DATA=$(jq -n --arg message "Add $FILE_NAME" --arg content "$FILE_CONTENT" \
'{
  "message": $message,
  "content": $content,
  "branch": "'"$BRANCH"'"
}')

# Perform the API request to push the file
RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" -X PUT -H "Authorization: token $TOKEN" \
    -d "$JSON_DATA" "$API_URL")

# Check the response code
if [ "$RESPONSE" -eq 201 ]; then
    echo "Success, Exiting......"
else
    echo "Error: Failed to push file, Exiting......"
    exit 1
fi


<button class="copy-btn" data-code="52">&lt;&gt;</button>
</pre>
    </post-52>
    <post-51>
<p>
I have used a simple and clean one line command to download my Github repository zip file first removing a working directories contents, wget then gets the file, we unzip followed by moving the extracted directories contents and clean up by removing the extract directory and zip download. This command also passes TRUE through stdin avoiding any potential Errors from interrupting the unzip process.
</p>
<pre>
#!/bin/bash

rm -rf * && wget -O repo.zip https://github.com/owner/repository/archive/refs/heads/main.zip && unzip -o repo.zip || true && mv repository-main/* . && rm -rf repository-main repo.zip



<button class="copy-btn" data-code="51">&lt;&gt;</button>
</pre>
    </post-51>
    <post-50>
<p>
I found that with modular math a simple sequence of character shifts can be applied to Ciphertext my example alternating each character in sets of three to increase the security and diffusion of replacement Frequency by an exponential amount, and my Cipher now is unbroken after 60 attempts as a Caesar Cipher Variant.
</p>
    </post-50>
    <post-49>
<p>
I have begun new work on a Asymmetric Encryption method using pure vanilla Js and what I have learned after my first successful attempt is a real Caesar Cipher Variant, applying modular math and a simple 2^n%x operation for a Character String position shift that I was also able to crack using Frequency Analysis and a first run with success on attempt 51 of my evaluation loop, But the Encryption and Ciphertext was made using only three Characters for a Public and Private Key and was super fun to program.
</p>
    </post-49>
    <post-48>
<p>
I have created an Actual Base32 encoding method I call Base53 that use six 5-bit Binary Segments padded if needed and a 32 character Encode Mapping to all possible 5-bit Binary values as 2^5 and a Character Mapping of A to O a to e and 0 to 9. I also show this encoding method used to build 150-bit Keys concatenating encoded message Input five times to build a perfectly scaled 432 character Encoded message from a 270 character Raw encoded Data stream at a fixed length But using a unique Character Mapping for each Encoding operation which could also be set As fixed.
</p>
    </post-48>
    <post-47>
<p>
I have created an Actual Base32 encoding method I call Base53 that use six 5-bit Binary Segments padded if needed and a 32 character Encode Mapping to all possible 5-bit Binary values as 2^5 and a Character Mapping of A to O a to e and 0 to 9. I also show this encoding method used to build 150-bit Keys concatenating encoded message Input five times to build a perfectly scaled 432 character Encoded message from a 270 character Raw encoded Data stream at a fixed length But using a unique Character Mapping for each Encoding operation which could also be set As fixed.
</p>
    </post-47>
    <post-46>
<p>
I found that creating a Block builder and Binary segmenter in vanilla Js is very easy, and a useful tool for mapping character and Input Data Streams, Try building blocks of 24-bit Binary data, base64 encoding did it using four 6-bit segments, segment at 8-bits each for a more comparable fit to data input assuming Js standard Utf-16 or a basic Ascii friendly character set, easy simple and symmetric.
</p>
    </post-46>
    <post-45>
<p>
I have found a Bitwise left shift of 1 effectively multiplies the number by 2, a right shift of 1 divides the number by 2, and more than 1 by a factor of 2^n where n is the number of positions to the right and Xor which compares each bit of its operands and if different returns 1 or same returns 0.
</p>
    </post-45>
    <post-44>
<p>
I have taken some time to learn about Bitwise Operations including simple Bitwise Xor, Left, and Right shift operating on the Binary form of a number, agnostic to the number input format.
</p>
    </post-44>
    <post-43>
<p>
I will be installing Nodejs, a powerful event driven, non blocking io runtime to run Javascript serverside. I have plans to complement my code tasks in C Standard and Javavm with more Webassembly, Typescript and Javascript using Javascript serverside mainly to benefit using the same syntax and language for my browser and serverside programming. 
</p>
    </post-43>
    <post-42>
<p>
I need a way to have yet more control over grep, in some use cases egrep and extended pattern matches, even case insensitive with pipe is not enough to grab the right priority, here is the solution to break on a first match, solving any discrepency where egrep or grep will not prioritized a first match.
</p>
<pre>
priorities=(
"org-name"
"org-kind"
"org-type"
"org-addr"
"org-mail"
)
for priority in "$\{priorities[@]\}"; do
which_priority=$(echo "$priority" | awk '{print $1}')
echo "Checking... $which_priority" 
value_priority=$(echo -e "org:name\\norg-name:value\\norg-kind:kind\\norg-type:which\\norg-addr:mail\\norg-mail:addr" \\
| grep -i "$which_priority" \\
| tail -n 1 \\
| cut -d':' -f2 \\
| xargs
)
if [[ -n $value_priority ]]; then
echo "$value_priority"
break
fi
done
# Here we prefer priorities
# and default to the first
# one we find, the order of
# our input and egrep/grep
# default behavior are not
# affecting matches and the
# first match ends the loop
<button class="copy-btn" data-code="42">&lt;&gt;</button>
</pre>
    </post-42>
    <post-41>
<p>
I have another followup for prioritizing matches, the concept here is that we concentrate on prioritizing matches and allow grep to focus on input and rely on its default behavior, abstracting the priority from the working of grep, using tail to grab each match and head + cut to extract the appropriate field value.
</p>
<pre>
priorities=(
"org-name"
"org-kind"
"org-type"
"org-addr"
"org-mail"
)
for priority in "$\{priorities[@]\}"; do
which_priority=$(echo "$priority" | awk '{print $1}')
echo "Checking... $which_priority" 
echo -e "org:name\\norg-name:value\\norg-kind:kind\\norg-type:which\\norg-addr:mail\\norg-mail:addr" \\
| grep -i "$which_priority" \\
| tail -n 1 \\
| cut -d':' -f2 \\
| xargs
done
# Here we prefer priorities
# and no default priority
# the order of our input and
# the grep default behavior
# are not affecting matches
<button class="copy-btn" data-code="41">&lt;&gt;</button>
</pre>
    </post-41>
    <post-40>
<p>
I have a neat method to share for prioritizing grep output when the pattern order and the initial input are in conflict, Since grep works line by line and its focus is on the input, if your priority match comes after the fallback you can simply use tail -n 1 instead of head to pull the last line instead of the first, a useful trick that you could in theory even combine two matches at a time to always prioritize a second match first.
</p>
<pre>
echo -e "org:name\\norg-name:value" \\
| grep -i "org-name\\|org" \\
| tail -n 1 \\
| cut -d':' -f2 \\
| xargs
# Here we prefer org-name first
# and default to org, despite
# the order of our input and
# the grep default behavior
<button class="copy-btn" data-code="40">&lt;&gt;</button>
</pre>
    </post-40>
    <post-39>
<p>
As I move forward with writing simple programs in C I find that the distinction between "low-level" and "high-level" programming languages can sometimes be nuanced, especially when talking about a language like C, which has characteristics of both.
</p>
    </post-39>
    <post-38>
<p>
I have found some neat information about my new favorite programming language. The official standard for the C language is maintained by ISO. The current standard is ISO/IEC 9899:2018, commonly known as C18. Previous standards include C11 (ISO/IEC 9899:2011), C99 (ISO/IEC 9899:1999), and ANSI C (also known as C89 or C90). The standard defines a set of libraries and headers, such as \`&lt;stdio.h>\`, \`&lt;stdlib.h\>\`, \`&lt;string.h>\`, and others, which provide fundamental functionalities like input/output, memory management, and string handling. These standard libraries are part of the C standard and must be provided by any compliant C compiler.
</p>
    </post-38>
    <post-37>
<p>
The C language and its libraries are standardized by ISO, ensuring consistency across different compilers. GCC, Clang, and other compilers implement the standard and provide the necessary libraries. Extensions and non-standard features offered by compilers are optional and may affect portability. By adhering to the ISO C standard, you can write portable C code that will compile and run on any compliant compiler and platform.
</p>
    </post-37>
    <post-36>
<p>
I have been thinking a lot about my approach to simple written C programs, Use of standard libraries, Dynamic linking, Compiler simplicity, and Avoiding unnecessary Third-Party dependencies. And I have found some great resources: the C standard library (C89/C99/C11), GNU C Library (glibc), POSIX (Portable Operating System Interface), Man pages (man 3 printf, man 2 socket) and the Linux Programmers Manual.
</p>
    </post-36>
    <post-35>
<p>
My approach to programming in C, focusing on standard libraries and keeping the compile command simple, aligns with what is often called minimalist programming. It's a methodology that values simplicity, standardization, and portability—aiming to create reliable, well-behaved programs that avoid unnecessary dependencies on third-party libraries.
</p>
    </post-35>
    <post-34>
<p>
I have some new ideas for a simple Http server written in C. When you run the server without the -d flag (i.e., not in daemon mode), pressing Ctrl + C sends the SIGINT signal to the process, which typically causes the process to terminate immediately. This means that Ctrl + C will generally stop your server and return you to the command line, and you will not need to send a SIGTERM signal in this case. If you want to handle SIGINT for additional cleanup or logging purposes, you can add a handler for SIGINT as a SIGTERM handler in your code.
</p>
    </post-34>
    <post-33>
<p>
We have some considerations regarding the current implementation of a simple Http listener written in C, such as the current version will serve multiple HTTP requests, but it handles one request at a time sequentially. This means that while one request is being processed, other requests must wait, which can lead to poor performance under high load. To handle multiple requests concurrently, you have a few options: Forking: Create a new process for each incoming connection. Multithreading: Create a new thread for each incoming connection. Asynchronous I/O: Use non-blocking I/O and event-driven programming to handle multiple connections within a single process or thread.
</p>
    </post-33>
    <post-32>
<p>
Here is how were building our http.web or http.out from http.c, Save the code as http.c. Compile it using gcc: gcc http.c -o http.web Run the server in the background using the -d flag: ./http.web -d, Alternatively, run the server in the foreground without the -d flag: ./http.web
</p>
<pre>
#include &lt;stdio.h>
#include &lt;stdlib.h>
#include &lt;string.h>
#include &lt;unistd.h>
#include &lt;sys/socket.h>
#include &lt;netinet/in.h>
#include &lt;fcntl.h>
#include &lt;signal.h>

#define PORT 8080
#define BUFFER_SIZE 1024
#define ROOT_DIR "/var/www/html/"

// Function to handle file requests and send responses
void handle_request(int new_socket) {
    char buffer[BUFFER_SIZE] = {0};
    read(new_socket, buffer, BUFFER_SIZE);

    // Extract the requested file path from the HTTP request
    char *method = strtok(buffer, " ");
    char *path = strtok(NULL, " ");
    char file_path[BUFFER_SIZE] = {0};

    // Default response
    const char *response_header = "HTTP/1.1 200 OK\\r\\nContent-Type: text/html\\r\\n\\r\\n";
    char response_body[BUFFER_SIZE] = "Hello, World!";

    if (path != NULL) {
        if (strcmp(path, "/") == 0) {
            path = "/index.html";
        }
        else if (strcmp(path, "/post") == 0) {
            path = "/post.html";
        }

        snprintf(file_path, sizeof(file_path), "%s%s", ROOT_DIR, path);

        int file = open(file_path, O_RDONLY);
        if (file != -1) {
            // Read file content
            ssize_t bytes_read = read(file, response_body, sizeof(response_body) - 1);
            close(file);
            response_body[bytes_read] = '\0';
            snprintf(response_header, BUFFER_SIZE, "HTTP/1.1 200 OK\\r\\nContent-Type: text/html\\r\\n\\r\\n");
        } else {
            snprintf(response_header, BUFFER_SIZE, "HTTP/1.1 404 Not Found\\r\\nContent-Type: text/html\\r\\n\\r\\n");
            snprintf(response_body, BUFFER_SIZE, "&lt;html>&lt;body>&lt;h1>404 Not Found&lt;/h1>&lt;/body>&lt;/html>");
        }
    }

    // Send response
    char response[BUFFER_SIZE];
    snprintf(response, sizeof(response), "%s%s", response_header, response_body);
    send(new_socket, response, strlen(response), 0);
    close(new_socket);
}

void daemonize() {
    pid_t pid;

    // Fork off the parent process
    pid = fork();

    // If we got a good PID, then we can exit the parent process
    if (pid &lt; 0) {
        exit(EXIT_FAILURE);
    }
    if (pid > 0) {
        exit(EXIT_SUCCESS);
    }

    // On success: The child process becomes the session leader
    if (setsid() &lt; 0) {
        exit(EXIT_FAILURE);
    }

    // Ignore signal sent from child to parent process
    signal(SIGCHLD, SIG_IGN);
    signal(SIGHUP, SIG_IGN);

    // Fork off for the second time
    pid = fork();

    // An error occurred
    if (pid &lt; 0) {
        exit(EXIT_FAILURE);
    }

    // Success: Let the parent terminate
    if (pid > 0) {
        exit(EXIT_SUCCESS);
    }

    // Set new file permissions
    umask(0);

    // Change the working directory to the root directory
    chdir("/");

    // Close all open file descriptors
    for (int x = sysconf(_SC_OPEN_MAX); x >= 0; x--) {
        close(x);
    }
}

int main(int argc, char *argv[]) {
    int server_fd, new_socket;
    struct sockaddr_in address;
    int addrlen = sizeof(address);

    if (argc > 1 && strcmp(argv[1], "-d") == 0) {
        daemonize();
    }

    // Create socket file descriptor
    if ((server_fd = socket(AF_INET, SOCK_STREAM, 0)) == 0) {
        perror("socket failed");
        exit(EXIT_FAILURE);
    }

    // Set socket options
    int opt = 1;
    if (setsockopt(server_fd, SOL_SOCKET, SO_REUSEADDR | SO_REUSEPORT, &opt, sizeof(opt))) {
        perror("setsockopt failed");
        close(server_fd);
        exit(EXIT_FAILURE);
    }

    // Set up server address
    address.sin_family = AF_INET;
    address.sin_addr.s_addr = INADDR_ANY;
    address.sin_port = htons(PORT);

    // Bind socket
    if (bind(server_fd, (struct sockaddr *)&address, sizeof(address)) &lt; 0) {
        perror("bind failed");
        close(server_fd);
        exit(EXIT_FAILURE);
    }

    // Listen for connections
    if (listen(server_fd, 3) &lt; 0) {
        perror("listen");
        close(server_fd);
        exit(EXIT_FAILURE);
    }

    printf("Server listening on port %d\\n", PORT);

    // Main server loop
    while ((new_socket = accept(server_fd, (struct sockaddr *)&address, (socklen_t*)&addrlen)) >= 0) {
        handle_request(new_socket);
    }

    // Close server socket
    close(server_fd);
    return 0;
}
<button class="copy-btn" data-code="32">&lt;&gt;</button>
</pre>
    </post-32>
    <post-31>
<p>
Here is how were building our http.web or http.out from http.c, Save the code as http.c. Compile it using gcc: gcc http.c -o http.web Run the server in the background using the -d flag: ./http.web -d, Alternatively, run the server in the foreground without the -d flag: ./http.web
</p>
    </post-31>
    <post-30>
<p>
I have a new feature to add to my Http server written in C, you can run your C program in the background by using the & operator in the shell. However, if you want to add an option to your program to handle this internally (i.e., using a flag to daemonize the process), you can modify your code to handle command-line arguments and fork the process accordingly. Next I will explain how you can modify the main function in http.c to accept a -d flag to run the server as a daemon.
</p>
    </post-30>
    <post-29>
<p>
I want to explain my working Http server/Listener as the project, aside from my work with Java and the Java Virtual Machine, is my primary goal right now. The server listens on port 8080 and accepts incoming connections. It reads the Http request, parses the requested file path, and serves index.html or post.html from /var/www/html/ if requested. If neither file is requested, it responds with "Hello, World!". If the requested file is not found, it sends a 404 Not Found response. The response is formatted with the appropriate Http header.
</p>
    </post-29>
    <post-28>
<p>
Here's a simplified Http server written in C that listens on port 8080, serves index.html or post.html from /var/www/html/ if they are requested, and responds with a simple "Hello, World!" message for any other requests.http.c
</p>
<pre>
#include &lt;stdio.h>
#include &ltstdlib.h>
#include &lt;string.h>
#include &lt;unistd.h>
#include &lt;sys/socket.h>
#include &lt;netinet/in.h>
#include &lt;fcntl.h>

#define PORT 8080
#define BUFFER_SIZE 1024
#define ROOT_DIR "/var/www/html/"

// Function to handle file requests and send responses
void handle_request(int new_socket) {
    char buffer[BUFFER_SIZE] = {0};
    read(new_socket, buffer, BUFFER_SIZE);

    // Extract the requested file path from the HTTP request
    char *method = strtok(buffer, " ");
    char *path = strtok(NULL, " ");
    char file_path[BUFFER_SIZE] = {0};

    // Default response
    const char *response_header = "HTTP/1.1 200 OK\\r\\nContent-Type: text/html\\r\\n\\r\\n";
    char response_body[BUFFER_SIZE] = "Hello, World!";

    if (path != NULL) {
        if (strcmp(path, "/") == 0) {
            path = "/index.html";
        }
        else if (strcmp(path, "/post") == 0) {
            path = "/post.html";
        }

        snprintf(file_path, sizeof(file_path), "%s%s", ROOT_DIR, path);

        int file = open(file_path, O_RDONLY);
        if (file != -1) {
            // Read file content
            ssize_t bytes_read = read(file, response_body, sizeof(response_body) - 1);
            close(file);
            response_body[bytes_read] = '\\0';
            snprintf(response_header, BUFFER_SIZE, "HTTP/1.1 200 OK\\r\\nContent-Type: text/html\\r\\n\\r\\n");
        } else {
            snprintf(response_header, BUFFER_SIZE, "HTTP/1.1 404 Not Found\\r\\nContent-Type: text/html\\r\\n\\r\\n");
            snprintf(response_body, BUFFER_SIZE, "&lt;html>&lt;body>&lt;h1>404 Not Found&lt;/h1>&lt;/body>&lt;/html>");
        }
    }

    // Send response
    char response[BUFFER_SIZE];
    snprintf(response, sizeof(response), "%s%s", response_header, response_body);
    send(new_socket, response, strlen(response), 0);
    close(new_socket);
}

int main() {
    int server_fd, new_socket;
    struct sockaddr_in address;
    int addrlen = sizeof(address);

    // Create socket file descriptor
    if ((server_fd = socket(AF_INET, SOCK_STREAM, 0)) == 0) {
        perror("socket failed");
        exit(EXIT_FAILURE);
    }

    // Set socket options
    int opt = 1;
    if (setsockopt(server_fd, SOL_SOCKET, SO_REUSEADDR | SO_REUSEPORT, &opt, sizeof(opt))) {
        perror("setsockopt failed");
        close(server_fd);
        exit(EXIT_FAILURE);
    }

    // Set up server address
    address.sin_family = AF_INET;
    address.sin_addr.s_addr = INADDR_ANY;
    address.sin_port = htons(PORT);

    // Bind socket
    if (bind(server_fd, (struct sockaddr *)&address, sizeof(address)) < 0) {
        perror("bind failed");
        close(server_fd);
        exit(EXIT_FAILURE);
    }

    // Listen for connections
    if (listen(server_fd, 3) &lt; 0) {
        perror("listen");
        close(server_fd);
        exit(EXIT_FAILURE);
    }

    printf("Server listening on port %d\\n", PORT);

    // Main server loop
    while ((new_socket = accept(server_fd, (struct sockaddr *)&address, (socklen_t*)&addrlen)) >= 0) {
        handle_request(new_socket);
    }

    // Close server socket
    close(server_fd);
    return 0;
}
<button class="copy-btn" data-code="28">&lt;&gt;</button>
</pre>
    </post-28>
    <post-27>
<p>
I have used FastCGI with default systemctl fcgiwrap start and enable in conjunction with nginx for a simple way to handle web application programs served from /cgi-bin/. I have listed here a Minimal example of a CGI program written in C.
</p>
<pre>
#include &lt;stdio.h>
#include &lt;stdlib.h>

int main(void) {
    printf("Content-Type: text/html\\n\\n");
    printf("&lt;html>&lt;body>&lt;h1>Hello, World!&lt;/h1>&lt;/body>&lt;/html>\\n");
    return 0;
}
<button class="copy-btn" data-code="27">&lt;&gt;</button>
</pre>
    </post-27>
    <post-26>
<p>
Using C for web development is possible but comes with challenges due to the lower-level nature of the language. However, it can be beneficial for performance-critical applications or for learning purposes. Here are some design patterns and considerations, Follow the design of simple (or complex) Http servers, Take advantage of modular design, Use CGI to write C programs that write web content or manage application serving, Use multi-threading and Consider non-blocking IO or Event driven design patterns.
</p>
    </post-26>
    <post-25>
<p>
I want to step through the functionality our Http listener will take. Socket Creation: The socket() function creates a new socket. Binding: The bind() function binds the socket to an address and port number specified in serv_addr. Listening: The listen() function makes the socket ready to accept incoming connections. Accepting Connections: The accept() function accepts an incoming connection and creates a new socket for communication. Reading from Socket: The read() function reads data from the socket. Writing to Socket: The write() function sends an HTTP response back to the client. Closing Sockets: The close() function closes the sockets when done.
</p>
    </post-25>
    <post-24>
<p>
Were revisiting our Http server in C using standard POSIX libraries, gcc compiler, and Dynamic linking. Here are some of the essential header files we will need: <stdio.h>: Standard input and output functions. <stdlib.h>: Standard library functions, including memory allocation. <string.h>: String handling functions. <unistd.h>: POSIX operating system API, including close, read, and write functions. <sys/types.h>: Data types used in system calls. <sys/socket.h>: Socket programming functions and data structures. <netinet/in.h>: Structures for storing address information. <arpa/inet.h>: Functions for manipulating IP addresses. <netdb.h>: Functions for network database operations.
</p>
    </post-24>
    <post-23>
<p>
Testing with JVM and ByteBuffer for 1000Byte packets, sending 1000 packets x 8Bytes per Bit for 8000000 total Bits, or in one second (divided by 1000000Mbit) a base 8Mbits/sec theoretical throughput, Low end servers have been saturating at approx 30Mbits/sec and high end servers at over 1Gbits/sec or 1000Mbits/sec Average throughput.
</p>
    </post-23>
    <post-22>
<p>
You can send a file's contents to your clipboard directly from the terminal on Debian via SSH. However, the ability to do this will depend on the clipboard support of your SSH client and the setup on your Android device. For this to work directly with your Android device's clipboard, your SSH client app needs to support clipboard sharing. Apps like Termux (with appropriate packages) or JuiceSSH might be configured to handle clipboard operations.
</p>
    </post-22>
    <post-21>
<p>
I want to extract the Vendor ID from the output of lscpu, we can modify the command slightly. The lscpu command provides detailed CPU information, including the vendor ID, which you can extract using grep and awk similarly to the stock lscpu command. Here's the updated command to get the Vendor ID.
</p>
<pre>
lscpu | grep 'Vendor ID:' | awk -F: '{print $2}' | xargs
<button class="copy-btn" data-code="21">&lt;&gt;</button>
</pre>
    </post-21>
    <post-20>
<p>
I have a need to note that from viewpoint as a Service client in many cases my Internet service and Machine are the responsibility of the same entity, It is the Host who in times of peril often feels the need to edify who they believe the ISP is and responsible for Network connectivity, But as my Host is often my only direct contact and managed services may not be available I must choose whether or not to distinguish between the ASP or ISP in order to route my Support requests properly, I choose to identify the Host/ISP then as my only contact all else being equal, they must identify the ASP route theirs as well.
</p>
    </post-20>
    <post-19>
<p>
I found a new point of contention among commonly used terms, I have found it more appropriate to refer to my ISP in terms of identifying the same entity most call the Host or Server provider, and the terms most call the ISP may better be identified as my ASP. Autonomous System Provider (ASP): This term can be appropriate for referring to the entity managing the Autonomous System (AS). It emphasizes their role in handling the network routing and managing IP address blocks within their AS. ISP (Internet Service Provider), Commonly used to refer to companies providing internet connectivity to end-users. 
</p>
    </post-19>
    <post-18>
<p>
Why Mi Exists, The use of "Mi" (Mebi) and similar binary prefixes is to prevent ambiguity. Historically, MB could either mean 1,000,000 bytes (decimal) or 1,048,576 bytes (binary), depending on context, causing confusion in software, hardware specifications, and storage devices. The IEC prefixes like MiB (Mebibyte) address that. The binary prefix system is not specific to a region like Europe or Latin America, but it has been more readily adopted by scientific and technical fields that require precise distinction between binary and decimal measurements. Conclusion, While Mi is an official standard from the IEC and represents a very specific meaning (binary, 1024-based measurement), other abbreviations like Bi or Mbyte remain informal and non-standard. You may encounter them in niche or creative contexts, but they lack formal recognition in data measurement standards. And since the sometimes ambiguous use of MB is a historical fact, Ive decided to continue using the shorter Mi and Bi.
</p>
    </post-18>
    <post-17>
<p>
The “Mi” in MiB is shorthand for Mebi, which comes from the binary prefix system, not from a specific country but from international standards like IEC. Unofficial or Unconventional Byte Shorthands: Bi - While Bi could theoretically be shorthand for Byte, it is not widely accepted in official documentation. It might be used casually, but it could lead to confusion as "Bi" typically isn't used for bytes in formal contexts. Kbyte - A less common shorthand for Kilobyte. Mbyte - Occasionally seen as an alternative to MB, but also rare. Gbyte - Another uncommon form of GB. Tbyte - An unusual shorthand for Terabyte. kBps / KBps - Often used in networking to represent data transfer speeds (Kilobytes per second). MBps / MiBps - Similarly used for Megabytes or Mebibytes per second in speed calculations. 
</p>
    </post-17>
    <post-16>
<p>
I made refinements to my Network utility adding Latency results and some binary path verification for using commands like Whois and Dig which generally require setup and installation even on stock Unix based Systems, also for referenxe here is a continued sample Documentation regarding shorthand Mi and Bi as Ive been using them in my programs to refer to Mbyte and Byte, ensuring that where appropriate logical assertions are clear regarding use of the different value systems around Mbits and Mbytes.  
</p>
    </post-16>
    <post-15>
<p>
The shorthand notation "Mi" that you’re seeing is part of a standardized system called IEC binary prefixes, which differentiates between powers of 1024 (binary) and powers of 1000 (decimal). These notations were introduced by the International Electrotechnical Commission (IEC) in 1998 to avoid confusion between binary and decimal interpretations of data sizes. Here's a breakdown: Standard Byte Shorthands: B = Byte (standard) KB = Kilobyte (1,000 bytes) MB = Megabyte (1,000,000 bytes) GB = Gigabyte (1,000,000,000 bytes) TB = Terabyte (1,000,000,000,000 bytes) IEC Binary Prefixes (unconventional for many users but now official): KiB = Kibibyte (1,024 bytes) MiB = Mebibyte (1,048,576 bytes) GiB = Gibibyte (1,073,741,824 bytes) TiB = Tebibyte (1,099,511,627,776 bytes)
</p>
    </post-15>
    <post-14>
<p>
I have been back and forth with refining my use of Mi and Bi when referring to the actual terms Megabyte and Byte, mostly as shorthand methods for avoiding Mbyte and Byte or MB and B, so I found some Documentation which clarifies these technical customs so I have a more stable base of knowledge should I choose an unconventional way to represent these values. 
</p>
    </post-14>
    <post-13>
<p>
I have become a fan of Java bytecode and using the Java Virtual Machine increasingly for a variety of server side programming, A great way Ive found to accomplish running Java and avoiding the need to javac Compile each time you need to run some Java is to use the latest Java SDK and the bundled jshell command line utility which runs its own Event Read Interpet Loop to handle the task, allowing us to avoid the requirement of compile and/or Applet server which most traditionally would use to process Java bytecode, a simple install command from your favorite package manager for example aptitude install java-sdk is usually enough to return the latest openjdk package versions available from stock repos, here is an example one liner that uses jshell to read and return available Network interface devices.
</p>
<pre>
jshell \<(echo 'import java.net.NetworkInterface; import java.util.Enumeration; Enumeration\<NetworkInterface> networkInterfaces = NetworkInterface.getNetworkInterfaces(); while (networkInterfaces.hasMoreElements()) { NetworkInterface ni = networkInterfaces.nextElement(); String status = ni.isUp() ? "Up" : "Down"; System.out.println(ni.getName() + ", " + status); }' && echo '/exit') -q
<button class="copy-btn" data-code="13">&lt;&gt;</button>
</pre>
    </post-13>
    <post-12>
<p>
In Java, achieving functionality similar to writing to /dev/null—where data is discarded without creating a real file or impacting disk storage—requires using in-memory streams. Here are some methods to simulate /dev/null behavior for I/O benchmarks or testing purposes.  In-Memory Streams: Use ByteArrayOutputStream or a custom OutputStream to discard data in memory. Custom OutputStream: Implement your own OutputStream that ignores written data.  System.out Redirection: Redirect System.out to discard output, though this is more for output redirection than general I/O benchmarking.  NIO Pipes: Advanced method involving ByteBuffer and Pipe for in-memory data handling.  Each method serves different purposes, but for a direct equivalent to /dev/null that doesn’t involve file operations, using ByteArrayOutputStream or a custom OutputStream is typically the simplest and most effective approach.
</p>
    </post-12>
    <post-11>
<p>
I learned a very useful conditional today, when running CGI/Bash programs sometimes we want to use option flags after we escape the command line and send the command off to the System for processing, If we have a program that we run as ./file.sh we can create a built in option that can be used as ./file.sh -R where -R is a built in custom flag that is formatted as -option and check within Bash for the option and process any additional or conditional logic we choose, here is the example.
</p>
<pre>
# Check for the -R flag
read_only_mode=false
if [[ "$1" == "-R" ]]; then
    read_only_mode=true
fi
<button class="copy-btn" data-code="11">&lt;&gt;</button>
</pre>
    </post-11>
    <post-10>
<p>
I had a need to create some detail and Documentation info today for some utility functions inside of a cgi/Bash program, while unconventional I enjoy how the JSDoc format looks for detail and comment related data in my code. I want to list some of these examples here because A) its a quick copy/paste and B) its easier in the future to refer to basic JSDoc comments here than navigating through the Official JSDoc Documentation. I really think all code should contain some JSDoc somewhere, I can only theory that one might forego using it if the code is a core Class or function library that is minified for efficiency.
</p>
<pre>
/**
 * Adds two numbers together.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
export const add = (a, b) => a + b;
<button class="copy-btn" data-code="10">&lt;&gt;</button>
</pre>
    </post-10>
    <post-9>
<p>
I was expanding on my work for a C based Http server today, first comes my conversation with Gpt regarding transpiling and interpreters, as we consider together using one programming language such as C as a base and methods for efficiently spinning up a proper Listener to serve Http requests as quickly as possible, possibly through another language. Yes, it is possible for a C program to interpret code from other languages, such as Python, and use the output within its own code. However, this typically involves embedding an interpreter for the other language within the C program. For Python, this can be done using the Python/C API. Here's a basic example of how a C program can embed the Python interpreter and run Python code:
</p>
<pre>
#include &lt;Python.h>

int main(int argc, char *argv[]) {
    // Initialize the Python interpreter
    Py_Initialize();

    // Define the Python code to be executed
    const char *pythonCode = "print('Hello from Python!')\\n"
                             "import sys\\n"
                             "sys.stdout.flush()";

    // Run the Python code
    PyRun_SimpleString(pythonCode);

    // Clean up and finalize the Python interpreter
    Py_Finalize();

    return 0;
}
<button class="copy-btn" data-code="9">&lt;&gt;</button>
</pre>
<p>
In this example:The Python interpreter is initialized using Py_Initialize().A string containing Python code is defined.The Python code is executed using PyRun_SimpleString().The Python interpreter is finalized using Py_Finalize().This approach allows a C program to run Python code and capture the output using Python's standard output functions. More complex interactions between C and Python can be achieved by using other functions from the Python/C API to execute Python code, access Python objects, and manipulate them within the C program.
</p>
    </post-9>
    <post-8>
<p>
I was using Gpt today to familirize myself with methods for using programming languages and in essence middleware, here is what we came up with.  The term you're looking for is "transpiler." A transpiler, also known as a source-to-source compiler, is a type of compiler that takes the source code written in one programming language and converts it into another programming language. This is different from an interpreter, which directly executes the instructions written in a programming language without converting them to another language first.
</p>
    </post-8>
    <post-7>
<p>
I made a simple test to check for the existing stock sshd binary and config file, if it does and it should then we can use grep to search for lines that begin specifically with the word Port, ignoring any which are commented out, and pipe stdout to awk using to extract the field value from the matching line, we finish this up by returning the value if 22 if no match is found for any reason as the ssh daemon will then auto default to 22.  You can use the following one-liner in bash to achieve this: ssh=$(grep -E '^Port ' /etc/ssh/sshd_config | awk '{print $2}' || echo 22)  This script does the following:grep -E '^Port ' searches for lines that start with Port  in the /etc/ssh/sshd_config file, ignoring any lines that start with a comment #.  awk '{print $2}' extracts the port number from the matching line.  If no match is found, || echo 22 ensures that the default value 22 is used.
</p>
    </post-7>
    <post-6>
<p>
I finished a Lookingglass test page and program using Fastcgi and runs on nginx with System commands like: Buttons and Form Inputs: Each tool has its own button, which will send a POST request to file.sh. The buttons pass the action (like ping, iperf, traceroute, etc.) to identify which tool to use.POST Handling in file.sh:Ping: This uses ping -c 10 for the specified target.iPerf: This uses iperf3 to test bandwidth between your server and the target.Traceroute: Traces the network path to the target. WhoIs: Returns domain registration details.Dig: Retrieves DNS records for the target.HTTP: Sends a GET request using curl -I to show response headers. 10MiB/100MiB File: Uses wget to download a file, and the script outputs "Success......" or "Failed......" based on the download result, then removes the file.Each tool is implemented with basic error handling and outputs relevant information directly into the browser.
</p>
<label>posted 1702849600</label>

    </post-6>
    <post-5>
<p>
I finished setup of a Machine benchmark utility program, and Network throughput test program using the Java Virtual Machine to test Data port throughput using UDP packets of various Byte sizes including 1000Bi 512Bi and 64Bi for measuring throughput with a Latency test to accompany Iperf3 test results, tested on OrangeVps server and maxed out the Data port speed at 960Mbits/sec on the first test and over 1.1Gbits/sec for the second.
</p>
<label>posted 1723924537</label>

    </post-5>
    <post-4>
<p>
I have put together a list of required header includes for use in C code programs to begin creating a simple Http server. To build a simple HTTP server in C using only the standard libraries that come with your C compiler, you will primarily use POSIX (Portable Operating System Interface) libraries. These libraries provide the necessary functionality for socket programming, file handling, and basic I/O operations. Here are some of the essential header files you will need: \<stdio.h>: Standard input and output functions. \<stdlib.h>: Standard library functions, including memory allocation. \<string.h>: String handling functions. \<unistd.h>: POSIX operating system API, including close, read, and write functions. \<sys/types.h>: Data types used in system calls. \<sys/socket.h>: Socket programming functions and data structures. \<netinet/in.h>: Structures for storing address information. \<arpa/inet.h>: Functions for manipulating IP addresses. \<netdb.h>: Functions for network database operations.
</p>
    </post-4>
    <post-3>
<p>
I have begun learning C programming and taken on the task of creating a simple Http listener for serving Http requests.  To begin a task like this I have created a lisy of useful command line tools and utility programs that can be installed using stock repository and System packages, here is a quick sample list of packages you can install to start using your favorite text editor and simple gcc utility commands to begin creating http.c and http.out programs written in C.
</p>
<pre>
#!/bin/sh -e

aptitude install \\
haproxy \\
libuv1 \\
libuv1-dev \\
libuvc-dev \\
libuvc0 \\
g++ \\
gcc \\
glibc-source \\
binutils \\
build-essential \\
ccache \\
cmake \\
dnstop \\
dnsutils \\
dmidecode \\
iproute2 \\
iptables \\
libc6-dev \\
libgccjit-10-dev \\
lsb-release \\
openssl \\
rkhunter \\
pkg-config \\
python3 \\
python3-dev \\
python3-websockets \\
python3-pip \\
tcpdump \\
websocketd \\
whois \\
libv8-dev 
exit 0
<button class="copy-btn" data-code="3">&lt;&gt;</button>
</pre>
    </post-3>
    <post-2>
<p>
I found the C programming language was invented in 1972 at Bell Labs by Dennis Ritchie. It was developed for the Unix operating system, which was also created at Bell Labs. C was designed to be a simple yet powerful language that could be used to write system software, including the Unix kernel. It evolved from an earlier language called B, which was itself based on the language BCPL. C's development allowed Unix to be rewritten in a high-level language, which made it much more portable.
</p>
    </post-2>
    <post-1>
<p>
Here are some DOM equivalents to the vanilla Js method for Document.write, primarily used to insert content directly into the DOM (Document Object Model) but discouraged and considered outdated due to its blocking behavior and potential to overwrite content, innerHTML textContent createElement appendChild.
</p>
    </post-1>
`;

document.write("the_post.js loaded successfully<br>");



