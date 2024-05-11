const connectDB = require("./src/config/db");
const app = require("./src/server");
require('dotenv').config();

const http = require('http')
const port = process.env.PORT || 3000;

 
const server = http.createServer(app)

server.listen(port, async(err) => {
   await connectDB();
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
