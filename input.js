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

  if (key === 'w') {
    // Moving up
    connection.write('Move: up');
  }

  if (key === 'a') {
    // Moving Left
    connection.write('Move: left');
  }

  if (key === 's') {
    // Moving Down
    connection.write('Move: down');
  }

  if (key === 'd') {
    // Moving Right
    connection.write('Move: right');
  }

  // Special canned messages with keys
  // q: go long | e: snake bite | z: so looong | c: mama mia
  if (key === 'q') {
    connection.write('Say: go long');
  }

  if (key === 'e') {
    connection.write('Say: snake bite');
  }

  if (key === 'z') {
    connection.write('Say: so looong');
  }

  if (key === 'c') {
    connection.write('Say: mama mia');
  }

};

module.exports = { setupInput };