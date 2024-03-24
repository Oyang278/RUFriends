var Express = require("express");
var Mongoclient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");
const bodyParser = require("body-parser");

var app = Express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var CONNECTION_STRING = "mongodb+srv://admin:Keyboard123!@cluster0.yjseio9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

var DATABASENAME = "projectdb";
var database;

app.listen(5030,()=>{
    Mongoclient.connect(CONNECTION_STRING,(error,client)=>{
        database = client.db(DATABASENAME)
        console.log("Port:5030 Connection Successful");
    })
})



app.get('/getInfo',(request, response)=>{
    database.collection("userlogincollection").find({}).toArray((error,result)=> {
        //response set back to the client
        response.send(result);
    });
})

app.post('/postInfo',(request, response)=>{
    const newUser = {
        username:request.body.username,
        password:request.body.password
    }
    database.collection('userlogincollection').insertOne(newUser);
});

app.post('/postInfo/createUserProfile',(request, response)=>{
    const newUser = {
        username:request.body.username,
        profileImg:'https://th.bing.com/th/id/OIP.z_n1P__qQV1JpHZs8yNmlwHaHa?rs=1&pid=ImgD…',
        fname:request.body.fname,
        lname:request.body.lname,
        dob:request.body.dob,
        email:request.body.email
    }
    database.collection('userinfocollection').insertOne(newUser);
});

app.delete('/deleteInfo',(request, response)=>{
    const filter = { username: request.body.username}
    database.collection('userlogincollection').deleteOne(filter);
});