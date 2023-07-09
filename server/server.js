const PORT = process.env.PORT ?? 8000;
const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');

const pool = require('./db');
app.use(cors());
app.use(express.json());

app.get('/minha-api', (req, res) => {
    req.body
    query()
    res.send('Olá');
    
    
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
