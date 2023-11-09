const express = require('express');

const app = express();

app.get('/', (requst, response) => response.status(200).send('Index - Servidor rodando'));

app.listen(3000, () => console.log('Server rodando na porta 3000'));