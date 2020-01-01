const express = require('express');
const app = express();
const port = 8080;
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
var finalPath = path.join(__dirname + '/public/dist');

app.use(express.static(finalPath)); //Serves resources from public folder
app.use(express.static(__dirname + './public')); //Serves resources from public folder
app.use(cors());
app.options('*', cors());
var searchHospitals = require('./routes/searchHospitals');
var addHospitals = require('./routes/addHospitals');
var authRoute = require('./routes/authRoutes');



//mongoose connect
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/collegeMajor', function (err,res) {
   if(err) console.log("not connected")
    else
   {
       console.log("connected");
   }
});

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//using middleware
app.use('/searchHospitals', searchHospitals);
app.use('/addHospitals',addHospitals);
app.use('/authCheck' , authRoute );
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  //app.use('/authRoute',authRoute);
  app.use('/', function (req,res) {
      console.log(finalPath);
    res.sendFile(finalPath + '/index.html');

})




app.listen(port,function () {
    console.log(`listening to port ${port}`);
})