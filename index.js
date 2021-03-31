 const http = require('http'),
 axios = require('axios'),
 logger=require('morgan'),
 cors=require('cors'),
 express=require('express'),
 bodyParser=require('body-parser'),

 mongoose = require('mongoose');


var app=express();
var port=8000;

app.use(bodyParser.json())
app.use(logger('tiny'));
app.use(require ('./routes'));



//let users=[];
//(async function getNames(){
    //try{
        //const{data}=await axios.get("https://swapi.dev/api/people");
        //console.log(data.results);
       // users=data.results.map(user=>user.name);
      //  console.log(users);

    //}catch(error){
        //console.log(error)
   // }
    
//})();


mongoose.connect('mongodb://localhost/test');

mongoose.connection.on('error', (err) => { 
    console.log('Mongodb Error: ', err); 
    process.exit();
});
mongoose.connection.on('connected', () => { 
    console.log('MongoDB is successfully connected');
});

app.listen(port, function(err){
    console.log('Listening on port:' + port);

    
});