const { isUtf8 } = require('buffer')
const express = require('express')
const app = express()
const port = 3002
const fs = require('fs')

const path = require('path')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  // get data form file
  fs.readFile('./tasks', 'utf8', (err, data) =>{
    if (err){
      console.error(err);
      return
    } 
    //console.log(data);
    //console.log(typeof data);
  const tasks = data.split("\n")
  res.render('index', {tasks: tasks})
  });
})


app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
