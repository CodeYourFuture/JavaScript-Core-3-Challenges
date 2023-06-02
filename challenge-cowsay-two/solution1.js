// =================
// Stripped down cowsayer CLI, 
// no libraries
// https://nodejs.dev/learn/nodejs-accept-arguments-from-the-command-line
// =================

// 1. Accept arguments

// how will you accept arguments?
// accept argument when running nodejs
// the argument can be captured by inspecting
// process.argv[2]


// 2. Make supplies for our speech bubble

let topLine = '_';
let bottomLine = '-';
let saying = "";

if (!process.argv[2]) {
  saying = "      (" + "nothing to say?" + ")";
} else {
  saying = "      (" + process.argv[2] + ")";
  topLine = "       " + topLine.repeat(process.argv[2].length);
  bottomLine = "       " + bottomLine.repeat(process.argv[2].length);
}

// 3. Make a cow that takes a string

function cowsay(saying) {
  // how will you make the speech bubble contain the text?

  // where will the cow picture go?

  // how will you account for the parameter being empty?

  console.log(topLine);
  console.log(saying);
  console.log(bottomLine);
  console.log("       /");
  console.log("      /");
  console.log("^__^ /");
  console.log("(oo)'_______");
  console.log("(__)        )-~");
  console.log("   ||----w |");
  console.log("   ||     ||");
}

//4. Pipe argument into cowsay function and return a cow

// how will you log this to the console?

cowsay(saying);