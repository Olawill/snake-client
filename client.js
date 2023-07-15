const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // notify when connection is successful
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: OLA");
    
  });

  // handle incoming data
  conn.on('data', () => console.log("you ded cus you idled"));

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;

};


module.exports = connect;
