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


// let ALLOWED_ORIGINS = ["https://www.timelyship.com/", "https://timelyship.com/", "http://localhost:3000"];
// app.use((req, res, next) => {
//     let origin = req.headers.origin;
//     console.log("request came from",origin)
//     console.log("ALLOWED_ORIGINS",ALLOWED_ORIGINS)
//     console.log("req.headers",req.headers)
//     let theOrigin = (ALLOWED_ORIGINS.indexOf(origin) >= 0) ? origin : ALLOWED_ORIGINS[0];
//     res.header("Access-Control-Allow-Origin", theOrigin);
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// })

/**CORS SETUP END */
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

//app.listen(3000, () => console.log(`Listening on: 3000`));
module.exports.handler = serverless(app);


// (()=>{
//     console.log("bdPostalCode",bdPostalCode)
//     console.log("bdUpazila",bdUpazila)
// })()