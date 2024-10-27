const fs = require("fs");
const net = require("net");

const server = net.createServer();

server.on("connection", (client) => {
  client.on("data", (data) => {
    fs.readdir('../file-server', (err, files) => {
      if(err) {
        console.log(err);
        return;
      }

      const localFile = files.find(file => file === data); 

      fs.readFile(localFile, (err, data) => {
        if(err) {
          console.log(err);
          return;
        } 
        client.write(data);
      });
    })
  })
  client.setEncoding("utf8");
})

server.listen(3000, () => {
  console.log("Server listening on port 3000!");
})