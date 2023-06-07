const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);

let topLine = "_";
let bottomLine = "-";
let saying = "";

const cow = (inPhrase) => {
  if (!inPhrase) {
    inPhrase = "nothing to say?";
  }
  saying = "      (" + inPhrase + ")";
  topLine = "       " + topLine.repeat(inPhrase.length);
  bottomLine = "       " + bottomLine.repeat(inPhrase.length);

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
};

rl.question("Please enter your saying...", (saying) => {
  console.log("Your saying is: " + saying);
  cow(saying);
  rl.close();
});
