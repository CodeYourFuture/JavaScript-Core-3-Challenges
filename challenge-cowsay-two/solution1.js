// solution1.js

// =================
// Stripped down cowsayer CLI,
// no libraries
// https://nodejs.dev/learn/nodejs-accept-arguments-from-the-command-line
// =================

// 1. Accept arguments

// how will you accept arguments?
const args = process.argv.slice(2);

// 2. Make supplies for our speech bubble

let topLine = "_";
let bottomLine = "-";
let saying = "";

// 3. Make a cow that takes a string

function cowsay(saying) {
  // how will you make the speech bubble contain the text?
  const speechLength = saying.length + 2;
  const speechBubble = `${topLine.repeat(speechLength)}
< ${saying} >
${bottomLine.repeat(speechLength)}
         \\   ^__^
          \\  (oo)\\_______
             (__)\\       )\\/\\
                 ||----w |
                 ||     ||
`;

  // where will the cow picture go?
  return speechBubble;

  // how will you account for the parameter being empty?
}

// 4. Pipe argument into cowsay function and return a cow

// how will you log this to the console?
console.log(cowsay(args.join(" ")));
