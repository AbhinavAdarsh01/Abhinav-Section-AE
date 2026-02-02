const express = require("express");
const app = express();

const port = 8080;
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("this is my home page updated");
});

app.get("/about", (req, res) => {
  res.send("this is about us section");
});

app.get("/register", (req, res) => {
  res.send(`
    <form action="/submit" method="POST">
      <input type="text" name="username" />
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post("/submit", (req, res) => {
  console.log(req.body); // now it will work
  res.send("Form is submitted");
});

app.listen(port, () => {
  console.log(`Server is up ${port}`);
});
