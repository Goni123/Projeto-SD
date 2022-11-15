const express = require('express')
const app = express()
const port = 3000;

/*const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Welcome to Sistemas Distribuidos Project');
});*/

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/css', express.static(__dirname + 'public/js'))
app.use('/css', express.static(__dirname + 'public/img'))
app.use('/css', express.static(__dirname + 'public/video'))


// respond with "hello world" when a GET request is made to the homepage
app.get('', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.listen(port,() => {
  console.log('Listening on port:'+port);
});