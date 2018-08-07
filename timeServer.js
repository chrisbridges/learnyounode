const net = require('net');

// port is specified as first command-line arg
const port = process.argv[2];

const server = net.createServer(socket => {
  // socket.end(data) sends data before closing
  // so since we're only writing one thing to the server
  // we can just use that instead of socket.write(data)
  socket.end(getCurrentDateAndTime());
});
server.listen(port);

function getCurrentDateAndTime () {
  const today = new Date();

  return `${today.getFullYear()}-${zeroPadding(today.getMonth() + 1)}-${zeroPadding(today.getDate())} ${zeroPadding(today.getHours())}:${zeroPadding(today.getMinutes())}\n`;
}

function zeroPadding (num) {
  return num < 10 ? `0${num}` : num;
}