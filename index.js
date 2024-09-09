
const express = require('express')
const app = express()
const port = 3001

const path = require('path')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.render('index')
})


app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
