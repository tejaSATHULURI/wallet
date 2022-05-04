const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

// place holder for the data
const records = [];

app.use(bodyParser.json());

app.get('/api/alldata', (req, res) => {
  console.log('api/alldata called!!!!')
  res.json(records);
});

app.post('/api/createdata', (req, res) => {
  let userData = req.body.userData;
  console.log('Adding user::::::::', userData);
  console.log(records.length);
  userData.id = records.length ? records.length+1 : 1;
  records.push(userData);
  res.json("user provided data is added successfully");
});

app.delete('/api/deletedata/:id', (req, res) => {
  let index = records.map((item) => item.id).indexOf(parseInt(req.params.id));
    if (index > -1) {
      records.splice(index, 1);
    }
  res.json("user provided data is deleted successfully");
  
})

app.get('/', (req,res) => {
    res.send('App Works !!!!');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});