const express = require("express");
const path = require("path");

const port = 8080;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

// Home page
app.get("/", (req, res) => {
  res.render("home", {
    title: "Home_page",
    name: "SectionAE",
  });
});

// About page
app.get("/about", (req, res) => {
  res.render("about", {
    title: "about_us",
  });
});

// Contact page
app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "contact_us",
  });
});

app.listen(port, () => {
  console.log(`Server is up ${port}`);
});
