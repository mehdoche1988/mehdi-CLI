#!/usr/bin/env node


// CONST. AND VAR.
const axios = require('axios');
const countryList = require('country-list');
const chalk = require('chalk');
const boxen = require('boxen');
const ora = require('ora');
var figlet = require('figlet'); 



// call function api
async function axiosGetHoliday() {
    try {
        return await axios.get("https://date.nager.at/api/v2/publicholidays/2020/BE");
    } catch (error) {
        console.error(error);
    }
}

// 
axiosGetHoliday()
    .then(holidays => {

        for (let i = 0; i < holidays['data'].length; i++) {

            console.log((holidays['data'][i]["date"]) + ": " + (holidays['data'][i]["name"]));
            
        }
    })
    .catch(error => consgitole.error(error));


figlet('Product by', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});
figlet('Mehdoche1988', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});