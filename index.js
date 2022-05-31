const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, 'public')});
})


app.get('/users', (req, res) => {
	axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
		res.json(response.data)
	})
})


app.listen(process.env.PORT || 3000);

module.exports = app;