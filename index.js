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


const dbURI="mongodb://localhost/test";

mongoose.connect(dbURI, { useNewUrlParser: true , useUnifiedTopology:true})
        .then((result)=> Console.log('connected to db'))
        .catch((err)=>console.log(err));
          