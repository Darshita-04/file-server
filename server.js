const fs = require("fs");
const net = require("net");

const server = net.createServer();

server.on("connection", (client) => {

  client.on("data", (data) => {
    // reading particular directory
    fs.readdir('../file-server', (err, files) => {
      if(err) {
        console.log(err);
        return;
      }
      // get file name from directory that matches with user input
      const localFile = files.find(file => file === data); 

      // reading file requested
      fs.readFile(localFile, (err, data) => {
        if(err) {
          console.log(err);
          return;
        } 
        // sending file data to client
        client.write(data);
      });
    })
  })
  client.setEncoding("utf8");
})

server.listen(3000, () => {
  console.log("Server listening on port 3000!");
})