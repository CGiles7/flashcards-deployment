const jsonServer = require("json-server");
const server = jsonServer.create();
const cors = require("cors"); // Import the CORS middleware

const { PORT = 8080 } = process.env;

server.use(cors()); // Use the CORS middleware to enable CORS
server.use(jsonServer.defaults());
server.use(jsonServer.router("data/db.json"));

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// const jsonServer = require("json-server");
// const server = jsonServer.create();

// const { PORT = 8080 } = process.env;

// server.use(jsonServer.defaults());
// server.use(jsonServer.router("data/db.json"));

// server.listen(PORT);