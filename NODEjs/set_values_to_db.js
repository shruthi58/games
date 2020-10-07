// as the form is submitted successfully, post method executes to check for unique mail id
var express =require("express");
var app =express();
var bp = require("body-parser");
const { nextTick } = require("process");
const { callbackify } = require("util");
app.use(bp.urlencoded({ extended: true }));

const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./customer.db');

app.get("/",function(req,res){
     res.render("form");
});
/*app.post("/success",function(req,res){
  res.send(req.body);
});*/

  app.post("/success",function(req,res){
     try{
 db.run(`insert into customerBussiness(bussiness,typeofBuss) values("${req.body.company}" ,"${req.body.type}")`);
 db.run(`insert into customerDetails(fname,lname,email,phone) values("${req.body.fname}" ,"${req.body.lname}","${req.body.email}" ,"${req.body.phone}")`);
 db.run(`insert into customerAddress(aptNo,address,pincode,city,state,country) values("${req.body.Address}" ,"${req.body.stateAddress}","${req.body.pincode}" ,"${req.body.city}","${req.body.state}" ,"${req.body.country}")`);
 throw "thrown message";    
}
    catch(error){
      var srh =error.message;
      if(srh.match("UNIQUE constraint failed")){
        res.send("email already in use.")
      }
          res.send("error in database.");
    }
    db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Closed the database connection.');
  });
 res.end();
});
app.listen(3000,function(){
    console.log("started");
});

/* another implementation in progress */
/*app.post("/success",function(req,res){
   
  db.run(`insert into customerDetails(fname,lname,email,phone) values("${req.body.fname}" ,"${req.body.lname}","${req.body.email}" ,"${req.body.phone}")`,function(error){
   
    //res.send("email exists");
    
    if(error.message=="SQLITE_CONSTRAINT: UNIQUE constraint failed: customerDetails.email")
       {  
          res.send("Email already exists");
  }
});
  db.run(`insert into customerBussiness(bussiness,typeofBuss) values("${req.body.company}" ,"${req.body.type}")`,function(error){
    if(error){
       return res.send("error in database.please try later!");
    }
});
db.run(`insert into customerAddress(aptNo,address,pincode,city,state,country) values("${req.body.Address}" ,"${req.body.stateAddress}","${req.body.pincode}" ,"${req.body.city}","${req.body.state}" ,"${req.body.country}")`);
   db.close((err) => {
   if (err) {
     throw err;
    
   }
   console.log('Closed the database connection.');
 });
res.end();
}); 
app.listen(3000,function(){
    console.log("started");
});
*/
