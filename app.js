const express = require ("express");
const path = require ("path");
const app = express ();

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.listen (process.env.PORT || 3000, () => {
    console.log("Servido esta corriendo");
})
// app.listen (3000, () => console.log ("Servidor esta corriendo"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "views/register.html"));
});

app.get("/log-in", (req, res) => {
    res.sendFile(path.join(__dirname, "views/log-in.html"));
});