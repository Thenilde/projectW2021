const http = require('http'),
// axios = require('axios'),
logger = require('morgan'),
cors = require('cors'),
express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
dotenv = require("dotenv"),
exphbs = require('express-handlebars');
handlebars = require('express-handlebars');

var app = express();
var port = process.env.PORT || 8000;
dotenv.config();

app.use(bodyParser.json());
app.use(logger('tiny'));
app.use(require('./routes'));
app.use(express.static('views'));

app.set('view engine', 'hbs');

//instead of app.engine('handlebars', handlebars({
app.engine('hbs', handlebars({
layoutsDir: __dirname + '/views/layouts',
extname: 'hbs',
defaultLayout: 'list',
//new configuration parameter
partialsDir: __dirname + '/views/partials/'
}));



app.get('/', (req, res) => {
res.render('main', {layout: 'addOrEdit'});

});


//app.engine('hbs', exphbs({
  //  layoutsDir: __dirname + '/views/layouts',
    //defaultLayout: 'main',
    //extname: '.hbs'
//}));
//Serves static files (we need it to import a css file)
app.use(express.static('public'))

//app.set('view engine', 'handlebars');

//app.get('/', (req, res) => {
//res.render('list');
//});

app.get('/', (req, res) => {
//Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
res.render('main');
});




// http.createServer((req, res)=>{
//   res.write(users.join(", ")); //display the list of users on the page
// //   res.write("\n\n"+emails.join(", ")); //display the list of users on the page
//   res.end(); //end the response
// }).listen(8000); // listen for requests on port 8000

// let users = []; // names of users will be stored here
// // let email = [];
// (async function getNames(){
//   try{
//     const {data} = await axios.get("https://swapi.dev/api/people");
//     console.log(data.results);
//     users = data.results.map(user=>user.name);
//     // emails = data.map(email=>email.email);
//     console.log(users);
//     // console.log(emails);
//   } catch(error){
//     console.log(error)
//   }
// })();

// mongoose.connect('mongodb://localhost/test');

// mongoose.connection.on('error', (err) => { 
//     console.log('Mongodb Error: ', err); 
//     process.exit();
// });
// mongoose.connection.on('connected', () => { 
//     console.log('MongoDB is successfully connected');
// });

app.listen(port, function(err){
    console.log('Listening on port: ' + port);
});

// const dbURI = "mongodb://localhost/test";
const dbURI = process.env.DB_URL;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology:true })
        .then((result) => console.log('connected to db'))
        .catch((err) => console.log(err));


