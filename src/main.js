const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');
const app = express();
/**CORS SETUP BEGIN*/
const corsOptions = {
    origin: ["https://www.timelyship.com/", "https://timelyship.com/", "http://localhost:3000"],
    optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const bdPostalCode = require('../src/data/bd_post_code_final')
const bdUpazila = require('../src/data/bd_upazila_wiki')

app.get('/postal-code', (req, res) => {
    res.send(bdPostalCode);
});

app.get('/upazila', (req, res) => {
    res.send(bdUpazila);
});

module.exports.handler = serverless(app);

