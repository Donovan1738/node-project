const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/project", (req, res) => {
    const heros = [];
    heros[0] = {
       name: "Peter Parker",
       alias: "Spider-Man",
       color: "Red and Blue",
       city: "Queens, New York City",
       abilities: ["Super Strength"," Superhuman reflexes", " Spider sense", " Wallcrawling", " Martial Arts"],
       img: "images/spiderman.jpg",
    };
    heros[1] = {
        name: "Miles Morales",
        alias: "Spider-Man",
        color: "Black and Red",
        city: "Brooklyn, New York City",
        abilities: ["Bioelectricity"," Camouflage"," Super Strength"," Superhuman reflexes", " Spider sense"],
        img: "images/miles.webp",
     };
     heros[2] = {
        name: "Miguel O'Hara",
        alias: "Spider-Man 2099",
        color: "Blue and Red",
        city: "Nueva York",
        abilities: ["Super Strength"," Superhuman reflexes", " Spider sense", " Wallcrawling", " Martial Arts"],
        img: "images/2099.jpg",
     };
     heros[3] = {
        name: "Peter Parker",
        alias: "Spider-Man Noir",
        color: "Black and White",
        city: "New York City",
        abilities: ["Marksmanship"," Super Strength"," Superhuman reflexes", " Spider sense", " Organic webbing"],
        img: "images/noir.jpg",
     };
     heros[4] = {
        name: "Gwen Stacy",
        alias: "Spider-Gwen",
        color: "Pink, White, and Blue",
        city: "Queens, New York City",
        abilities: ["Super Strength"," Superhuman reflexes", " Spider sense", " Superhuman durability", " Superhuman speed"],
        img: "images/gwen.avif",
     };
    
    res.json(heros);
});

app.listen(3000, () => {
    console.log("I'm listening");
});