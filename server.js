const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Success' });
});

app.post('/webhooks/github', (req, res) => {
    console.log(res.body);
    res.json({ message: 'success' })
});

app.listen(5001, () => console.log('Server is started...'));