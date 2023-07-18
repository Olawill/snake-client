// IMPORTS
const { MOVES } = require('./constants');

// Stores the active TCP connection object.
let connection;

// Setting up for user input from stdin
const setupInput = function(conn) {

  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // register event listener for user input
  stdin.on("data", handleUserInput);

  return stdin;
};

// data callback handler
const handleUserInput = function(key) {
  // check for ctrl + c and terminate the game
  if (key === '\u0003') {
    process.exit(0);
  }

  // Check for move key and canned messages:
  if (MOVES[key]) {
    connection.write(MOVES[key])
  }

};

module.exports = { setupInput };