// server.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/calendar", async (req, res) => {
    try {
        const ICS_URL = "https://calendar.google.com/calendar/ical/869133bca5b2fc48a483e0659ee5c8a831952f174af028186fecfe0e7926f006@group.calendar.google.com/public/basic.ics";

        const response = await fetch(ICS_URL);
        const text = await response.text();

        res.setHeader("Content-Type", "text/calendar; charset=utf-8");
        res.setHeader("Access-Control-Allow-Origin", "*");

        res.send(text);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching calendar");
    }
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
