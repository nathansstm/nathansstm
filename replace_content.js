const fs = require('fs');

// Set the target post ID and initialize variables
const target_post = 123;
let target_paragraph = '';
let target_preformatted = '';
let target_button = '<button class="copy-btn" data-code="' + target_post + '">&lt;&gt;</button>';

// Load the content of the file
const fileContent = fs.readFileSync('the_post.new', 'utf8');

// Print welcome message
console.log("Welcome...... Loaded the_post.js");

// Print target post ID
console.log(`Targeting postid value...... ${target_post}`);

// Define a regex to capture the content inside the <p> tag within the specified post
const paragraphRegex = new RegExp(`<post-${target_post}>.*?<p>([\\s\\S]*?)<\\/p>.*?<pre>[\\s\\S]*?<\\/pre>.*?<\\/post-${target_post}>`, 'gs');

// Extract and store the content inside the <p> tag
const paragraphMatch = paragraphRegex.exec(fileContent);
if (paragraphMatch && paragraphMatch[1]) {
    target_paragraph = paragraphMatch[1].trim(); // Trim to clean up any leading/trailing whitespace
    console.log(`Captured paragraph value...... ${target_paragraph}`);
} else {
    console.log(`No content found for post-${target_post}`);
}

// Define a regex to capture everything within the <pre> tags within the specified post
const preformattedRegex = new RegExp(`<post-${target_post}>.*?<pre>([\\s\\S]*?)<\\/pre>.*?<\\/post-${target_post}>`, 'gs');

// Extract and store the content inside the <pre> tag
const preformattedMatch = preformattedRegex.exec(fileContent);
if (preformattedMatch && preformattedMatch[1]) {
    target_preformatted = preformattedMatch[1].trim(); // Trim to clean up any leading/trailing whitespace
    console.log(`Captured pre formatted value...... ${target_preformatted}`);
} else {
    console.log(`No preformatted content found for post-${target_post}`);
}

// Print the pre-filled button variable
console.log(`Target button HTML...... ${target_button}`);

// Build the new post content
let new_post_content = '<p>' + target_paragraph + '</p>\n' + '<pre>...' + target_button + '</pre>';

// Build the complete new post
let new_post = '<post-' + target_post + '>' + new_post_content + '</post-' + target_post + '>';

// Print the newly built post
console.log(`Built new post value...... ${new_post}`);

// Replace the old post content with the new one in the file
const postRegex = new RegExp(`<post-${target_post}>[\\s\\S]*?<\\/post-${target_post}>`, 'gs');
const updatedContent = fileContent.replace(postRegex, new_post);

// Print message before replacing
console.log(`Replacing post value...... ${target_post}`);

// Write the updated content back to the file
fs.writeFileSync('the_post.new', updatedContent);

// Print exiting message
console.log("Exiting......");
