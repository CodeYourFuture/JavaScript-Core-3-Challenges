// =================
// Stripped down cowsayer CLI, 
// no libraries
// https://nodejs.dev/learn/nodejs-accept-arguments-from-the-command-line
// =================

// 1. Accept arguments

// how will you accept arguments?

// 2. Make supplies for our speech bubble
let topLine = '_________';
let bottomLine = '----------';
let saying = '';

// 3. Make a cow that takes a string

function cowsay(saying) {
  // how will you make the speech bubble contain the text?
  saying = `
      ${topLine}

      ${getSaying(process.argv)}
      ${bottomLine}`;
  // where will the cow picture go?
  makeCow(saying);
  // how will you account for the parameter being empty?

}

//4. Pipe argument into cowsay function and return a cow

// how will you log this to the console?
cowsay(saying);

function getSaying(argV) {
  argV.shift();
  argV.shift();

  return argV.join(" ");
}

function makeCow(saying) {
  console.log(saying);
  console.log("       /");
  console.log("      /");
  console.log("^__^ /");
  console.log("(oo)'");
  console.log("(__)        )-~");
  console.log("   ||----w |");
  console.log("   ||     ||");
}