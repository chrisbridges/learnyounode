const http = require('http');

const urlToFetch = process.argv[2];

http.get(urlToFetch, function (response) {
  response.on('data', function (data) {
    console.log(data);
  }).setEncoding('utf8');
});

// official solution

// var http = require('http')
    
// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// }).on('error', console.error)