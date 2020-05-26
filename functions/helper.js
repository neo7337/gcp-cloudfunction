const helpers = {};

const request = require('request');

const host = 'covid19.mathdro.id/';
const path = 'api/countries'
const localeHost = 'api.rootnet.in/';
const localePath = 'covid19-in/stats/latest';
const indHost = 'api.covid19india.org/';
const districtIndPath = 'v2/state_district_wise.json';
const historicalINDPath = 'data.json';

helpers.getCountriesList = function dailyData() {
    return new Promise((resolve, reject) => {
        var url = 'https://' + host + path;
        request({
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            },
            uri : url,
            method : 'GET'
        }, function (err, res, body) {
            if(err){
                console.log(err);
                return;
            }
            console.log("Response : ", res.statusCode);
            resolve(res);
        });
    });
}

helpers.getIndStats = function dailyData() {
    return new Promise((resolve, reject) => {
        var url = 'https://' + localeHost + localePath;
        request({
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            },
            uri : url,
            method : 'GET'
        }, function (err, res, body) {
            if(err){
                console.log(err);
                return;
            }
            console.log("Response : ", res.statusCode);
            resolve(res);
        });
    });
}

helpers.getIndDistricts = function dailyData() {
    return new Promise((resolve, reject) => {
        var url = 'https://' + indHost + districtIndPath;
        request({
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            },
            uri : url,
            method : 'GET'
        }, function (err, res, body) {
            if(err){
                console.log(err);
                return;
            }
            console.log("Response : ", res.statusCode);
            resolve(res);
        });
    });
}

helpers.getDataJson = function dailyData() {
    return new Promise((resolve, reject) => {
        var url = 'https://' + indHost + historicalINDPath;
        request({
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            },
            uri : url,
            method : 'GET'
        }, function (err, res, body) {
            if(err){
                console.log(err);
                return;
            }
            console.log("Response : ", res.statusCode);
            resolve(res);
        });
    });
}

module.exports = helpers