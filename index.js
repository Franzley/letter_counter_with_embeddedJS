import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

const checkName = (req, res, next) => {
  const fName = req.body.fName;
  const lName = req.body.lName;
  req.fullName = fName + lName;
  next();
};

app.get("/", (req, res) => {
  res.render("index.ejs", { prompt: "Enter your name below" });
});

app.use(checkName);

app.post("/submit", (req, res) => {
  res.render("index.ejs", { prompt: `There are ${req.fullName.length} letters in your name.`});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
