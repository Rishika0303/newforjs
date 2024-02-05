const Id = 102
let email ="rishika@gmail.com"
var password = "11"
city = "Ranchi"

// Id = 2  error const value cannot be modified
email="hc@hc.com"
password = "99"
city = "Bengaluru"

// console.log(email);
// console.log(password);
//instead use table() func of console to print all together in tabular form
console.table(Id, email, password, city)
