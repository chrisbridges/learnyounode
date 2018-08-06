const fs = require('fs');
const path = require('path');
// use path module this time to check file extensions

function filteredLs (directory, fileExtension, callback) {
  fs.readdir(directory, function(err, data) {
    if (err) {
      return callback(err, null);
    }
    const ext = `.${fileExtension}`;
    const filteredData = data.filter(file => path.extname(file) === ext);
    return callback(null, filteredData);
  });
}

module.exports = filteredLs;