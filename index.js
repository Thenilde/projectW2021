 const http = require('http');
 const axios = require('axios');

http.createServer((req, res)=>{
//res.write(users.join("\n")); //display the list of users on the page

//res.write("\n\n" + emails.join(","));

res.write(chars.join("\n"));
    //users on the page
res.end(); //end the response
 }).listen(8000); // listen for requests on port 8000

//let users = []; // names of users will be stored here
//let email=[];
let chars=[];
(async function getNames(){
  try{
    //const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
    //users = data.map(user=>user.name);
    //emails=data.map(email=>email.email);

    const{data}=await axios.get("https://swapi.dev/api/people/");
    //characters=data.map()
    //console.log(users);
    //console.log(emails);
   
    chars=data.map(char=>char.name);
    console.log(chars);
  } catch(error){
    console.log(error)
  }
})()