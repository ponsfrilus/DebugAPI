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

// https://stackoverflow.com/a/33062403/960623
const favicon = new Buffer.from('AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAAD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcAAAAA/wAAAP/2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcAAAAA/wAAAP8AAAD/AAAA//YhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAAAAAP8AAAD/AAAA/wAAAP/2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcAAAAA/wAAAP/2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA9iFXAPYhVwD2IVcA//8AAP//AAD//wAA//8AAP//AAD//wAA/n8AAPw/AAD8PwAA/n8AAP//AAD//wAA//8AAP//AAD//wAA//8AAA==', 'base64'); 
app.get("/favicon.ico", function(req, res) {
  res.statusCode = 200
  res.setHeader('Content-Length', favicon.length)
  res.setHeader('Content-Type', 'image/x-icon')
  res.setHeader('Cache-Control', 'public, max-age=2592000') // expiers after a month
  res.setHeader('Expires', new Date(Date.now() + 2592000000).toUTCString())
  res.end(favicon)
})

// Just return some basic information
app.get('/*', (req, res) => {
  if (req.url != '/favicon.ico') { // avoid the favicon logs
    res.send('Got a GET request at ' + req.url)
  }
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
