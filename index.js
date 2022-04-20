const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello Mr! How are you? Are you ready for node journey')
})

const users = [
    { id: 1, name: 'masrafi', email: 'masrafi@gmail.com' },
    { id: 2, name: 'tamim', email: 'tamim@gmail.com' },
    { id: 3, name: 'musfiq', email: 'musfiq@gmail.com' },
    { id: 4, name: 'riyad', email: 'riyad@gmail.com' },
    { id: 5, name: 'sakib', email: 'sakib@gmail.com' },
    { id: 6, name: 'imrul', email: 'imrul@gmail.com' },
];

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
        console.log('query', req.query);
    }
    else {
        res.send(users);
    }
})

app.post('/user', (req, res) => {
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    console.log('request', req.body);
    res.send(user);
})

// users search with params
app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(u => u.id == id)
    console.log(req.params);
    res.send(user);
})

app.listen(port, () => {
    console.log('Start express js', port);
})