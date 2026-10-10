
const anecdoteBoard = document.getElementById("anecdote-board");

async function loadAnecdotes() {
    if (!anecdoteBoard) return;

    try {
        const response = await fetch("http://localhost:3000/api/anecdotes");

        if (!response.ok) {
            throw new Error("Failed to retrieve anecdotes.");
        }

        const anecdotes = await response.json();

        anecdoteBoard.replaceChildren();

        anecdotes.forEach((anecdote) => {
            const card = document.createElement("div");
            card.classList.add("anecdote-card");

            const name = document.createElement("h3");
            name.textContent = anecdote.username || "Anonymous";

            const message = document.createElement("p");
            message.textContent = anecdote.message;

            card.append(name, message);
            anecdoteBoard.appendChild(card);
        });
    } catch (error) {
        console.error("Error loading anecdotes:", error);
    }
}

loadAnecdotes();
