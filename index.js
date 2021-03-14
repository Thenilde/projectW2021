 const http = require('http'),
 axios = require('axios'),
 logger=require('morgan'),
 cors=require('cors'),
 express=require('express'),
 bodyParser=require('body-parser');


var app=express();
var port=8000;

app.use(bodyParser.json())
app.use(logger('tiny'));



let users=[];
(async function getNames(){
    try{
        const{data}=await axios.get("https://swapi.dev/api/people");
        console.log(data.results);
        users=data.results.map(user=>user.name);
        console.log(users);

    }catch(error){
        console.log(error)
    }
    
})();

app.listen(port, function(err){
    console.log('Listening on port:' + port);

    
});