require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const contactRoute = require("./route/contactRoute");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", contactRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client","public", "index.html"))
  );
}

const port = 5500;
app.listen(port, console.log(`server listing to port 5000 only`));
