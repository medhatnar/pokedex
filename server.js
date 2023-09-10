// Modules //
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./database");
const api = require("./api");

// Initializations //;
const app = express();
const port = 3000;
const corsOptions = {
  origin: "http://localhost:3000",
};

// Middleware //
app.use(cors(corsOptions));

// Routes
app.use("/api", api);

// Listeners //
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});