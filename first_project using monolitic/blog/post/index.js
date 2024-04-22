const express = require('express');
const { randomBytes } = require('crypto');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());

const posts = {};

//get all posts
app.get('/posts', (req, res) => {
  res.send(posts);
});

//create a new post
app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;
    posts[id] = {
        id, title
    };

    res.status(201).send(posts[id]);
});

//server port
app.listen(4000, () => {
  console.log('Server is running on port 4000');
});