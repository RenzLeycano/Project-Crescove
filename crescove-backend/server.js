
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors({
    origin: [
        "http://127.0.0.1:5500",
        "http://localhost:5500"
    ]
}));

app.use(express.json());

// Temporary storage for anecdotes
let anecdotes = [];

// GET: Retrieve all anecdotes
app.get("/api/anecdotes", (req, res) => {
    res.json(anecdotes);
});

// POST: Submit a new anecdote
app.post("/api/anecdotes", (req, res) => {
    const { username, message } = req.body;

    if (!message || !message.trim()) {
        return res.status(400).json({
            error: "A message is required."
        });
    }

    const newAnecdote = {
        id: Date.now(),
        username: username?.trim() || "Anonymous",
        message: message.trim(),
        date: new Date().toLocaleDateString()
    };

    anecdotes.push(newAnecdote);

    res.status(201).json({
        message: "Anecdote submitted successfully.",
        anecdote: newAnecdote
    });
});

app.listen(PORT, () => {
    console.log(`Crescove backend running at http://localhost:${PORT}`);
});
