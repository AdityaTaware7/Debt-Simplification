let express = require("express");
let app = express();

app.use(express.static(__dirname+"/public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("*", (req, res) => {
    res.send("404 page not found!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, process.env.IP, () => {
    console.log("Server started at " + PORT + "!");
});