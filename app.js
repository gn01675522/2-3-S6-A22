const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('public'));
app.use(express.static('views'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
	res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/portfolio', (req, res) => {
	res.sendFile(path.join(__dirname, 'portfolio.html'));
});

app.get('/contact', (req, res) => {
	res.sendFile(path.join(__dirname, 'contact.html'));
});

app.listen(port, () => {
	console.log(`Express is listening on localhost:${port}`);
});
