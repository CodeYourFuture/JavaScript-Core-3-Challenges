// =================
// Stripped down cowsayer CLI, 
// no libraries or arguments
// https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs
// =================

// 1. Make  a command line interface.
const prompt = require('prompt');

prompt.start();

prompt.get(['saying'], function (err, result) {
    if (err) {
        return onErr(err);
    }

    cow(result.saying);
});

function onErr(err) {
    console.log(err);
    return 1;
}

// 2. Make supplies for our speech bubble
let topLine = '_________';
let bottomLine = '----------';
let saying = '';

// 3. Make a cow that takes a string


const cow = (saying) => {
    saying = `
      ${topLine}

      ${saying}
      ${bottomLine}`;

    makeCow(saying);
}

// 4. Use readline to get a string from the terminal 
// (with a prompt so it's clearer what we want)
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