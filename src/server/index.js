import express from "express";
import { db } from "./src/config/connect.js";
import routes from "./src/routes/index.js";
import cookieParser from "cookie-parser";
const app = express();

const PORT = process.env.PORT || 8000;

app.use(cookieParser());

app.use(express.json());

app.use("/api/", routes);

app.get("/api/mysql", (req, res) => {
  db.connect(function (err) {
    if (err) {
      res.status(403).json("Error connecting SQL");
      console.log("Error connecting SQL " + err.stack);
    } else {
      db.query("SHOW DATABASES;", function (err, result) {
        if (err) throw err;
        res.send(result);
      });
    }
  });
});

db.connect(function (err) {
  if (err) {
    console.log("❌ Error connecting SQL " + err.stack);
  } else {
    console.log("✅ Connect Mysql success");
  }
});

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(PORT, () => {
  console.log(`✅ Backend run with port ${PORT}`);
});
