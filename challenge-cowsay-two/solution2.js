// =================
// Stripped down cowsayer CLI, 
// no libraries or arguments
// https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs
// =================
let topLine = '_';
let bottomLine = '-';

// 1. Make  a command line interface.

// Import the readline module
const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask a question and wait for user input
rl.question('What cow said? ', (saying) => {
  // Handle the user input
  if (saying){
    cowsay(saying)
    } else if(saying === ""){
    cowsay("Mu!")
    } else if(saying === undefined){
    cowsay("Mu!")
    }

  // Close the readline interface
  rl.close();
});

// 2. Make supplies for our speech bubble



// 3. Make a cow that takes a string


function cowsay(saying){
    console.log(`        ${topLine.repeat(saying.length)}`)
    console.log(`       |${saying}|`)
    console.log(`        ${bottomLine.repeat(saying.length)}`)
    console.log(`       /`)
    console.log(`      /`)
    console.log(`^__^ /`)
    console.log(`(oo)'_______`)
    console.log(`(__)        )-~`)
    console.log(`   ||----w |`)
    console.log(`   ||     ||   `)
    console.log("```")
}

// 4. Use readline to get a string from the terminal 
// (with a prompt so it's clearer what we want)