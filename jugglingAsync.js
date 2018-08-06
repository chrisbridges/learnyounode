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
    response.setEncoding('utf8');
    // response.on('data', function (data) {
    //   results[index] = data.toString();
    //   resultsCount++;

    //   if (!results.includes(null)) {
    //     results.forEach(result => console.log(result));
    //   }
    // });
    response.pipe(bl((err, data) => {
      results[index] = data.toString();
      resultsCount++;

      if (!results.includes(null)) {
        results.forEach(result => console.log(result));
      }
    }));
    // response.on('end', function () {
    //   if (!results.includes(null)) {
    //     results.forEach(result => console.log(result));
    //   }
    // });
  });
});