// import the connect function for the client file
const connect = require("./client");
const { setupInput } = require("./input");


console.log("Connecting ...");

const conn = connect();

setupInput(conn);
