const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Set the view engine to use EJS
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a route to handle requests for the homepage
app.get('/', (req, res) => {
    res.render('index'); //Create one for each page
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
