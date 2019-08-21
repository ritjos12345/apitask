var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
var cors = require('cors');	

mongoose = require('mongoose'),
  Task = require('./api/model/apiModel'), //created model loading here
  Driver = require('./api/model/dapiModel'),
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/cabs_db', {useNewUrlParser: true });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/apiRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('server started on: ' + port);


