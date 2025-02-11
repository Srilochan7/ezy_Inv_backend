const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

// Middleware to parse JSON data
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
    res.send("Welcome to my Node.js and Express backend!");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
