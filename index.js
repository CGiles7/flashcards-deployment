const jsonServer = require("json-server");
const cors = require("cors"); // Import the 'cors' package.

const server = jsonServer.create();

const { PORT = 8080 } = process.env;

// Use the 'cors' middleware to enable CORS.
server.use(cors());

server.use(jsonServer.defaults());
server.use(jsonServer.router("data/db.json"));

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});