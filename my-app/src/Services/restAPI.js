const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('./connection.js');
const UserDetails = require('./models/userdetails.js');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 5005;


app.post('/addUser', async (req, res) => {
  console.log(req.body.form);
  const data  = req.body.form;
  UserDetails.insertMany(data).then((response) => {
    res.send({
      status: 200,
      message: 'Success\n' + response.data
    });
  }).catch((err) => {
    res.send(err);
  })
});

app.post('/userAuthenticate', async (req, res) => {
  UserDetails.find({"email":req.body.email},{"password":req.body.password});
});
app.listen(port, () => console.log(`Rest API is listening on port ${port}!`));