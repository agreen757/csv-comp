var csv = require('ya-csv');
var util = require('util');
var fs = require('graceful-fs');

var silo = [];
var matches = [];

var reader = csv.createCsvFileReader('master.csv', {columnsFromHeader:true,'separator': ','});
var writer = csv.createCsvFileReader('secondary.csv', {columnsFromHeader:true,'separator': ','});

//push values from the first csv file to an array for later comparison
reader.addListener('data', function(data){
    silo.push(data.item);
});

//open the second csv file and compare a value to the entire length of the array and do an operaiton when theres a match
writer.addListener('data', function(data){
    for(i=0;i<silo.length;i++){
	if(data.item === silo[i]){
	    console.log(data.item);
	    continue;
	}
    }
});
