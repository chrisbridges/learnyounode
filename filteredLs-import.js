const filteredLs = require('./filteredLs-module');

const directory = process.argv[2];
const fileExtension = process.argv[3];

filteredLs(directory, fileExtension, function (err, data) {
  const filesOnEachLine = data.join('\n');
  console.log(filesOnEachLine);
});