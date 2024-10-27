const net = require("net");
const fileName = process.argv[2];

const conn = net.createConnection({
  host: 'localhost',
  port: 3000
})

conn.on("connect", () => {
  console.log("Conenction established");
  conn.write(fileName);
})

conn.on("data", (data) => {
  console.log(data);
});

conn.setEncoding("utf8");

