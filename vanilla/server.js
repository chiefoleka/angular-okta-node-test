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
  const response = req.headers['x-okta-verification-challenge'] || 'ok';
  res.json({verification : response});
})

app.get('/webhook', (req, res) => {
  const response = req.headers['x-okta-verification-challenge'] || 'ok';
  res.json({verification : response});
})

// Listen on port 8080
app.listen(process.env.PORT || 8081);
console.log('Listening on port 8081')