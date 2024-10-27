const net = require("net");
const fileName = process.argv[2];

// connecting to server
const conn = net.createConnection({
  host: 'localhost',
  port: 3000
})

conn.on("connect", () => {
  console.log("Conenction established");
  conn.write(fileName); // sending file name to server
})

conn.on("data", (data) => {
  console.log(data); // file data got from server
});

conn.setEncoding("utf8");

