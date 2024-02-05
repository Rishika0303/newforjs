const Id = 102
let email ="rishika@gmail.com"
var password = "11"
city = "Ranchi" //not good practice
let state //undefined value

// Id = 2  error const value cannot be modified
email="hc@hc.com"
password = "99"
city = "Bengaluru"
//prefer not to use var bc of issue in block 
//scope and functional scope

 console.log(email);
 console.log(password);
//instead use table() func of console to print all together in tabular form
console.table([Id, email, password, city, state])
