const http = require('http');
const bl = require('bl');

// initialize results array to save memory slots for appropriate URLs
let urls = process.argv.slice(2, 5);
const results = [];
let resultsCount = 0;
for (let i = 0; i < 3; i++) {
  results[i] = null;
}
// 3 URL command-line arguments - loop only runs 3 times
urls.forEach((url, index) => {
  // use a pipe to ensure you get all the data per url
  http.get(url, function (response) {
    response.pipe(bl((err, data) => {
      results[index] = data.toString();
      resultsCount++;

      if (!results.includes(null)) {
        results.forEach(result => console.log(result));
      }
    }));
  });
});

// provided solution
// var http = require('http')
//     var bl = require('bl')
//     var results = []
//     var count = 0
    
//     function printResults () {
//       for (var i = 0; i < 3; i++) {
//         console.log(results[i])
//       }
//     }
    
//     function httpGet (index) {
//       http.get(process.argv[2 + index], function (response) {
//         response.pipe(bl(function (err, data) {
//           if (err) {
//             return console.error(err)
//           }
    
//           results[index] = data.toString()
//           count++
    
//           if (count === 3) {
//             printResults()
//           }
//         }))
//       })
//     }
    
//     for (var i = 0; i < 3; i++) {
//       httpGet(i)
//     }