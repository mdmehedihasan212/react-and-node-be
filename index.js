const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello Mr! How are you? Are you ready for node journey')
})

const users = [
    { id: 1, Name: 'masrafi', Email: 'masrafi@gmail.com' },
    { id: 2, Name: 'tamim', Email: 'tamim@gmail.com' },
    { id: 3, Name: 'musfiq', Email: 'musfiq@gmail.com' },
    { id: 4, Name: 'mahmudullah', Email: 'mahmudullah@gmail.com' },
    { id: 5, Name: 'sakib', Email: 'sakib@gmail.com' },
    { id: 6, Name: 'imrul', Email: 'imrul@gmail.com' },
];

app.get('/users', (req, res) => {
    res.send(users);
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