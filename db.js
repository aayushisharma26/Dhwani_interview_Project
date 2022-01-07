//const mysql = require('mysql')
const mysql=require('mysql')
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123@Navgurukul",
    database:"Data"
})

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE Data", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE register(id INT AUTO_INCREMENT PRIMARY KEY,user_name VARCHAR(320) NOT NULL ,user_password VARCHAR(255) NOT NULL)"
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// }); 

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE state(state_id INT AUTO_INCREMENT PRIMARY KEY,state_name VARCHAR(320) NOT NULL,id int,foreign key(id) references register(id))"
//   //var sql = "CREATE TABLE States(id INT AUTO_INCREMENT PRIMARY KEY,state_name VARCHAR(320) NOT NULL)"
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// }); 


// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE District(District_id INT AUTO_INCREMENT PRIMARY KEY,District_name VARCHAR(320) NOT NULL,state_id INT,id INT,foreign key(state_id) references state(state_id),foreign key(id) references register(id))"

//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// }); 



//  con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE childs(child_id INT AUTO_INCREMENT PRIMARY KEY,Name VARCHAR(320) NOT NULL,Sex VARCHAR(320) NOT NULL,DOB VARCHAR(320) NOT NULL,Father_name VARCHAR(320) NOT NULL,Mother_name VARCHAR(320) NOT NULL,District_id INT,foreign key(District_id) references District(District_id),state_id INT,foreign key(state_id) references state(state_id))"
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });


