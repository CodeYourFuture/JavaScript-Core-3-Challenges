// =================
// Stripped down cowsayer CLI, 
// no libraries
// https://nodejs.dev/learn/nodejs-accept-arguments-from-the-command-line
// =================

// 1. Accept arguments

// how will you accept arguments?

// 2. Make supplies for our speech bubble

let topLine = '_';
let bottomLine = '-';
let saying = process.argv[2];


// 3. Make a cow that takes a string
if (saying){
    cowsay(saying)
} else if(saying === ""){
    cowsay("Mu!")
} else if(saying === undefined){
    cowsay("Mu!")
}

function cowsay(saying) {
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
    
// how will you make the speech bubble contain the text?

// where will the cow picture go?

// how will you account for the parameter being empty?

}



//4. Pipe argument into cowsay function and return a cow

// how will you log this to the console?
