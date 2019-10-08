const debug      = require('debug')('app')
const express    = require('express')
const app        = express()
const bodyParser = require('body-parser')
const port       = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json()) // add a middleware (so that express can parse request.body's json)
app.use(bodyParser.json({type: "text/json"})) // add a middleware (so that express can parse request.body's json)
app.use(bodyParser.text({type: "*/*"})) // add a middleware (so that express can parse request.body's json)
app.listen(port, () => debug(`Debug API listening on port ${port}!`))

// Catch everythings...
app.all('/*', function (req, res, next) {
  console.log('\n')
  debug('Got a', req.method, 'request at ', req.url)
  debug('Header:', JSON.stringify(req.headers))
  debug('Body:', req.body)
  next() // ...and pass control to the next handler
})

// Just return some basic information
app.get('/*', (req, res) => {
  res.send('Got a GET request at ' + req.url)
})

app.post('/*', (req, res) => {
  res.send('Got a POST request at ' + req.url)
})

app.put('/*', (req, res) => {
  res.send('Got a PUT request at ' + req.url)
})

app.delete('/*', (req, res) => {
  res.send('Got a DELETE request at ' + req.url)
})

app.head('/*', (req, res) => {
  res.send('Got a HEAD request a t' + req.url)
})

app.patch('/*', (req, res) => {
  res.send('Got a PATCH request at ' + req.url)
})

app.trace('/*', (req, res) => {
  res.send('Got a TRACE request at ' + req.url)
})

app.options('/*', (req, res) => {
  res.send('Got a OPTIONS request at ' + req.url)
})

app.checkout('/*', (req, res) => {
  res.send('Got a CHECKOUT request at ' + req.url)
})

app.copy('/*', (req, res) => {
  res.send('Got a COPY request at ' + req.url)
})

app.lock('/*', (req, res) => {
  res.send('Got a LOCK request at ' + req.url)
})

app.merge('/*', (req, res) => {
  res.send('Got a MERGE request at ' + req.url)
})

app.move('/*', (req, res) => {
  res.send('Got a MOVE request at' + req.url)
})

// See for more methods: https://expressjs.com/en/api.html#routing-methods
