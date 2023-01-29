const express = require("express");
const configureDB = require("./config/database");
const cors = require("cors");
const router = require("./config/routes");

const app = express();
const PORT = 3090;

app.use(express.json());

app.use(cors());
app.use(router);

//Set Up Database
configureDB();

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
