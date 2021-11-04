const express = require("express");
const ejs = require("ejs");
const data = require("./public/data/data.json");

const app = express();

function caps(word) {
    return word[0].toUpperCase() + word.slice(1);
};

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
        active: `${section}`,
        dest: "moon"
    });
});

app.get("/destination/:tab", (req, res) => {
    const tab = req.params.tab;
    const details = data.destinations.find(dest => dest.name === caps(tab));
    const backImage = "destination-background";
    res.render("destination", {
        image: backImage,
        active: "destination",
        dest: `${tab}`,
        details: details
    });
});

app.get("/crew/:tab", (req, res) => {
    const tab = req.params.tab;
    const details = data.crew[tab];
    const backImage = "crew-background";
    res.render("crew", {
        image: backImage,
        active: "crew",
        member: `${tab}`,
        details: details
    });
});








const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});