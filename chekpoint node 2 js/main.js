const http = require('http');
const fs = require('fs')
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('./index.html', null, (err, data) => {
      if (err) {
        console.log(err)
      }
      res.end(data);
    })
  }

});
server.listen(3000, (err) => {
  if (err) console.log(err);
  console.log('server is running on port 3000');
});