const express = require("express");
const bodyParser = require("body-parser");
let cors = require("cors");
const app = express();
const db = require("./models"); // Sequelize models
const userRoutes = require("./Router/user");
const vehicleTypeRoutes = require("./Router/vehicleType");
const vehicleModelRoutes = require("./Router/vehicleModel");
const bookingModelRoutes = require("./Router/booking");

app.use(cors("*"));
require("dotenv").config();

let port = process.env.PORT ? process.env.PORT : 3000; // set the port

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text({ limit: "512mb" }));
app.use(bodyParser.json({ limit: "512mb" }));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/vehicle-type", vehicleTypeRoutes);
app.use("/api/vehiclemodels", vehicleModelRoutes);
app.use("/api/booking", bookingModelRoutes);

// Sync Database
db.sequelize
  .sync()
  .then(() => {
    console.log("Database synced successfully.");
  })
  .catch((err) => {
    console.error("Error syncing database:", err.message);
  });

// require("./config/routes.js")(app);
// parse application/json
// app.use(bodyParser.json());

app.listen(port);
console.log("Magic happens on port " + port);
