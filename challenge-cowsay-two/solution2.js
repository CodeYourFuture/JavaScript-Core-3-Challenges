// =================
// Stripped down cowsayer CLI,
// no libraries or arguments
// https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs
// =================

// 1. Make  a command line interface.
const readline = require("readline");

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 2. Make supplies for our speech bubble
// Function to create the speech bubble around the saying
function createSpeechBubble(saying) {
  const speechLength = saying.length + 2;
  const speechBubble = `${"-".repeat(speechLength)}
< ${saying} >
${"-".repeat(speechLength)}
         \\   ^__^
          \\  (oo)\\_______
             (__)\\       )\\/\\
                 ||----w |
                 ||     ||
`;

  return speechBubble;
}

// 3. Make a cow that takes a string
// Prompt the user for the saying
rl.question("What should the cow say? ", (saying) => {
  rl.close();

  // Generate the cow with the speech bubble
  const cow = createSpeechBubble(saying);

  // Print the cow to the console
  console.log(cow);
});
