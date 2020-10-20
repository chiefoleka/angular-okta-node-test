const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(express.static('dist'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.sendFile('dist/index.html');
})

app.post('/webhook', (req, res) => {
  console.log(req.body);
  res.end('ok');
})

// Listen on port 8080
app.listen(process.env.PORT || 8081);
console.log('Listening on port 8081')