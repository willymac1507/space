const express = require("express");
const ejs = require("ejs");
const data = require("./public/data/data.json");

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({
    extended: true
}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    const backImage = "home-background";
    res.render("home", {
        image: backImage,
        active: "home"
    });
});

app.get("/:section", (req, res) => {
    const section = req.params.section;
    const backImage = `${section}-background`;
    res.render(`${section}`, {
        image: backImage,
        active: `${section}`
    });
});








const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});