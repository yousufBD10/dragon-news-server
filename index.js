const express = require('express')
const app = express()
const cors = require('cors');
const port = 5000;


app.use(cors());
const categorise = require('./data/category.json')

app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.get('/news-categorise',(req,res)=>{
    res.send(categorise)
})

app.listen(port, () => {
  console.log(`News Dragon server Running ${port}`)
})