const fs = require('fs');

const directory = process.argv[2];
const fileExtension = process.argv[3];

fs.readdir(directory, function callback (err, list) {
  if (err) {
    return console.log(err);
  }
  const filteredList = list.filter(file => file.includes(`.${fileExtension}`)).join('\n');
  console.log(filteredList);
});