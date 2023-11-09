const express = require('express');

const router = express.Router();

router.get('/tasks', (req,res) => res.status(200).send('A rota está funcionando!'));

module.exports = router;