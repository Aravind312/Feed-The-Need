const mysql = require('mysql');
const express = require('express');
var app=express();
const bodyParser=require('body-parser');
//var multer = require('multer'); // v1.0.5
//var upload = multer();

app.use(bodyParser.json());
// Create connection
const mysqlConnection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1234',
    database : 'customer',
    multipleStatements:true
});
mysqlConnection.connect((err) => {
    if(!err){
        console.log('MySql Connected...');
    }
    else{
    console.log('MySql failed...');
    }
});

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(3000,()=>console.log('Express server is running at port number 3000'));

app.get('/signups',(req,res)=>{
mysqlConnection.query('Select * from signup',(err,rows,fields)=>{
     if(!err)
     {
        res.send(rows);
        // console.log(rows[0].name);
     }
     else
     {
         console.log(err);
     }  
}) 
});

app.post('/signin',function(req,res){
//console.log(req);
    console.log(req.body.name,req.body.password);
     let queryString ='Select * from signup where name=? and password=?';
     let filter = [req.body.name,req.body.password];
     mysqlConnection.query(queryString,filter,function(err,results,fields,body){
     if(!err)
{
console.log("done success");
console.log(results);
if(results=="")
{
console.log("done success 2");
res.send(false);
}
else
{
res.send(true);
}
}     
else
{
console.log("not succes");
}
    })
    });

app.delete('/signup/:name',(req,res)=>{
        mysqlConnection.query('delete from signup where name=?',[req.params.name],(err,rows,fields)=>{
             if(!err)
             {
                res.send('delete successfully');
                // console.log(rows[0].name);
             }
             else
             {
                 console.log(err);
             }  
        })
        });
app.post('/signup',(req,res)=>{
    let cust=req.body;
    var sql="SET @name =?;SET @email =?;SET @password =?;SET @phone_number =?; \
    call customerdetails(@name,@email,@phone_number,@password)";
            mysqlConnection.query(sql,[cust.name,cust.email,cust.password,cust.phone_number],(err,rows,fields)=>{
                 if(!err)
                 {
                    res.send(rows);
                    // console.log(rows[0].name);
                 }
                 else
                 {
                     console.log(err);
                 }  
            })
            });

            /*
            var cors = require ('cors');
            app.use(cors({
                origin:['http://localhost:4200','http://127.0.0.1:4200'],
                credentials:true
            }));
            
            app.use(function (req, res, next) {
            
              res.header('Access-Control-Allow-Origin', "http://localhost:4200");
              res.header('Access-Control-Allow-Headers', true);
              res.header('Access-Control-Allow-Credentials', 'Content-Type');
              res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
              next();
            });


            */
