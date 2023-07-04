const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get("/name", (req, res) => {
    res.json({ name: "Bhavin Panchal" });
});

app.get("/front-experience", (req, res) => {
    var experience = [
        {skill_name: "HTML", skill_type: "Experienced"},
        {skill_name: "CSS", skill_type: "Intermediate"},
        {skill_name: "Javascript", skill_type: "Intermediate"},
        {skill_name: "JQuery", skill_type: "Intermediate"},
        {skill_name: "Bootstrap", skill_type: "Experienced"},
        {skill_name: "Tailwind", skill_type: "Experienced"},
        {skill_name: "React", skill_type: "Intermediate"},    
    ];
    res.json({experience: experience})
});


app.get("/back-experience", (req, res) => {
    var experience2 = [
        {skill_name: "PHP", skill_type: "Experienced"},
        {skill_name: "MYSQL", skill_type: "Experienced"},
        {skill_name: "MongoDB", skill_type: "Beginner"},
        {skill_name: "Node JS", skill_type: "Beginner"},
    ];
    res.json({experience2: experience2})
});


app.get("/cms", (req, res) => {
    var experience3 = [
        {skill_name: "Filament", skill_type: "Experienced"},
        {skill_name: "Statamic", skill_type: "Intermediate"},
        {skill_name: "Backpack", skill_type: "Experienced"},
        {skill_name: "Voyager", skill_type: "Intermediate"},
    ];
    res.json({experience3: experience3})
});

app.get("/third-party", (req, res) => {
    var experience4 = [
        {skill_name: "Typesense", skill_type: "Experienced"},
        {skill_name: "Stripe Payment", skill_type: "Intermediate"},
        {skill_name: "Etsy", skill_type: "Experienced"},
        {skill_name: "Shopify", skill_type: "Exprienced"},
    ];
    res.json({experience4: experience4})
});
  
app.listen(8001, () => {
    console.log(`Server is running on port 8000.`);
});