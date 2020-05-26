const functions = require('firebase-functions');
const helper = require('./helper');
const express = require('express');
var bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

app.get('/dataJson', (req, res) => {
    helper.getDataJson().then((respData) => {
        return respData;
    }).then((resp) => {
        let jsonData = JSON.parse(resp.body);
        console.log(jsonData);
        return res.json(jsonData);
    }).catch((err) => {
        return res.json(err);
    })
})

app.get('/indDistrict', (req, res) => {
    helper.getIndDistricts().then((respData) => {
        return respData;
    }).then((resp) => {
        let jsonData = JSON.parse(resp.body);
        console.log(jsonData);
        return res.json(jsonData);
    }).catch((err) => {
        return res.json(err);
    })
})

app.get('/indStats', (req, res) => {
    helper.getIndStats().then((respData) => {
        return respData;
    }).then((resp) => {
        let jsonData = JSON.parse(resp.body);
        console.log(jsonData);
        return res.json(jsonData);
    }).catch((err) => {
        return res.json(err);
    })
})

app.get('/listCountries', (req, res) => {
    helper.getCountriesList().then((respData) => {
        return respData;
    }).then((resp) => {
        let jsonData = JSON.parse(resp.body);
        console.log(jsonData);
        return res.json(jsonData);
    }).catch((err) => {
        return res.json(err);
    })
})

exports.app = functions.https.onRequest(app);