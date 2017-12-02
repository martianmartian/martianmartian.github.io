const express = require('express')
const app = express()
app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/assets'));


app.get('/', (req, res)=> {
  res.render('index');//page render of index.ejs
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))