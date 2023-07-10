const connect = require("./client");

// // establishes a connection with the game server
// const connect = function() {
//   const conn = net.createConnection({
//     host: 'localhost',
//     port: 50541
//   });

//   // handle incoming data
//   conn.on('data', (chunk) => console.log("you ded cus you idled"));

//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   return conn;

// };

console.log("Connecting ...");
connect();
