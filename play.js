// inport the connect function for the client file
const { connect } = require("./client");

// Setting up for user input from stdin
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // register event listener for user input
  stdin.on("data", handleUserInput);

  return stdin;
};

// data callback handler
const handleUserInput = function (key) {
  // check for ctrl + c and terminate the game
  if (key === '\u0003') {
    process.exit(0);
  }
};

console.log("Connecting ...");
connect();
setupInput();
