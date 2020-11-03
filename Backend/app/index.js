const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors({origin: 'http://localhost:5000', credentials: true}));
app.use(bodyParser.json());

app.use((err, req, res, next) => {
    const statuscode = err.statuscode || 500;

    res.json({
        type: 'error', message: err.message
    })
});

module.exports = app;