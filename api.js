const dboperations = require('./dboperations');
var Order = require('./order');


//its app to use Createing APi
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

// its work to create API 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api',router);

//middleware is used to create login profomance ?? 
router.use((request,response,next)=>{
    console.log('middleware');
    next();
})
router.route('/orders').get((request,response)=>{
    dboperations.getOrders().then(result=>{
        response.json(result[0]);
    })
})
// Here we are define port this port are using in access api 
var port = process.env.PORT || 8090;
app.listen(port);
console.log("Payload API is runnig at " + port);

