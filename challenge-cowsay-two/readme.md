# Cowsay

Do you remember [Cowsay](https://github.com/CodeYourFuture/JavaScript-Core-1-Challenges)? We learned about node packages and made a cow say stuff. Now, we know more about programming, let's figure out how to make a cow say things in Node by ourselves.

## Project

For this project we don't need a package, a library or lots of options. Let's just get our own cow printing out and saying whatever we write in the command line. What would be helpful? I think we need to:

- [Accept an argument](https://nodejs.dev/learn/nodejs-accept-arguments-from-the-command-line) from the command line.
- Output to the command line. You've already done this with console.log.
- Make an ASCII cow.
- Write a function that puts the string into the cow's speech bubble.

Write your solution in the file solution1.js and test it by running your program in the command line. How will you handle it when no argument is given? How will you make the picture of a cow?

### Iterating

We could make our program more accessible by adding a command line interface that prompts us to write in the cow's words. What tools can we use? I think we could use:

- A command line interface. I'll start you off by letting you know that there is a built in CLI called [readline](https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs).
- Our ASCII cow again.
- And our cow function.

Write your solution in a file called solution2.js and test it by running your program in the command line. Use a prompt to ask for your cow saying.

Compare your approach to the sample solutions (you can unlock next week). Your solution might be different and that's ok. If you can print a cow and you can make it say different things, you solved it.

A slightly simpler ASCII cow that might help if you hit formatting issues.

```
       /
      /
^__^ /
(oo)'_______
(__)        )-~
   ||----w |
   ||     ||
```
