// =================
// Stripped down cowSayer CLI, 
// no libraries or arguments
// https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs
// =================

// 1. Make  a command line interface.
const arguments = process.argv.slice(2); 
// 2. Make supplies for our speech bubble

let topLine = '_';                           
let bottomLine = '-';                        
let saying = '';

// 3. Make a cow that takes a string
const cow = (saying) => {
    let speechBubble = ` ${saying} `;
    // how did you make the cow before?
    let cowPicture = 
`
       /
      /
^__^ /
(oo)'_______
(__)        )-~
   ||----w |
   ||     ||
`;

if(!saying){
    console.log(" Moo! ");
}
return `${topLine}\n${speechBubble}\n${bottomLine.repeat(saying.length)}${cowPicture}`

}

// 4. Use readline to get a string from the terminal 
// (with a prompt so it's clearer what we want)

const readline = require('readline');               // "readline" module provides an interface for reading data from a Readable stream (such as process.stdin and stdout) one line at a time.

const resultLine = readline.createInterface({
  input: process.stdin,                      // the create interface for readline input(stdin) & output(stdout) mean. it will read input form terminal (stdin) and write output to terminal ("stdout");
  output:process.stdout
});

resultLine.question('The cow say? ', (saying) => {      // this line prompts the user with the question in terminal and pass the argument as a callback function(saying) 
  resultLine.close();
});
console.log(cow("you are cute"));
