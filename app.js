const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Set the view engine to use EJS
app.set('view engine', 'ejs');

// Define a list of affirmations
const affirmations = [
    "You are loved.",
    "You are worthy of all the good things in life.",
    "You are capable of achieving your dreams.",
    // Add more affirmations here
];

// Define a route to handle requests for the homepage
app.get('/', (req, res) => {
    // Generate a random affirmation
    const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
    // Render the 'index' template and pass the random affirmation to it
    res.render('index', { affirmation: randomAffirmation });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
