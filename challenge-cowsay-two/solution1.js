// =================
// Stripped down cowSayer CLI, 
// no libraries
// https://nodejs.dev/learn/nodejs-accept-arguments-from-the-command-line
// =================

// 1. Accept arguments

// how will you accept arguments?
const arguments = process.argv.slice(2);     // this line process command argument when running the script name "argument " and "node".

// 2. Make supplies for our speech bubble

let topLine = '_';                            //the topLine variable set up a line at the top.
let bottomLine = '-';                         //the bottomLine variable set up a line at the  bottom.
let saying = '';                              // we use an empty string to use it as a default later.

// 3. Make a cow that takes a string

function cowSay(saying) {
// how will you make the speech bubble contain the text?
let speechBubble = `${saying}`;

// where will the cow picture go?
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

// how will you account for the parameter being empty?
    if(!saying){
        speechBubble = ' Moo! ' ;
    }

    //here the line bring entire cow message.
    return `${topLine.repeat(speechBubble.length)}\n${speechBubble}\n${bottomLine.repeat(speechBubble.length)}${cowPicture}`

};

//4. Pipe argument into cowSay function and return a cow

// how will you log this to the console?
console.log(cowSay(arguments.join(' ')));                   // this line mean join arguments line into a single string





