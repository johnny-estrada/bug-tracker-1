const express = require("express");
const app = express();
const cors = require("cors");
const database = require("./models");

app.use(cors());
app.use(express.json());

// Routers
const projectRouter = require("./routes/projectRouter");

app.use("/project", projectRouter);

app.listen(5000, () => {
  console.log("Server is running on port 5000...");

  database.sequelize.sync().then(() => {
    console.log("Database connection successful...");
  });
});
