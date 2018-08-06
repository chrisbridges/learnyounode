const http = require('http');
const bl = require('bl');

const urlToFetch = process.argv[2];

http.get(urlToFetch, function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      console.error(err);
    }
    const stringData = data.toString();
    const stringDataCharCount = stringData.length;
    console.log(stringDataCharCount);
    console.log(stringData);
  }));
});

// Official solution

// var http = require('http')
//     var bl = require('bl')
    
//     http.get(process.argv[2], function (response) {
//       response.pipe(bl(function (err, data) {
//         if (err) {
//           return console.error(err)
//         }
//         data = data.toString()
//         console.log(data.length)
//         console.log(data)
//       }))
//     })