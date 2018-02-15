const express = require('express');
const path = require('path');

const router = express.Router();

const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();
const port = process.env.PORT || 1337;


app.set('view engine', 'html');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client')));
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Error');
});
app.use('/api', routes);

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});


app.listen(port, (err) => {
  if(err){
    console.log('Cannot connect to sever', err)}
    else{
     console.log(`Connected.. Server is listening on port ${port}`);
    }
});
