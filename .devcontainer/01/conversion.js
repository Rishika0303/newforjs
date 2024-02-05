let score =33 //this is int 

//const {score} = req.body //input taken from frontend 
//can be of any data ty.(not known)

console.log(typeof score); //data ty shown is lowercase
console.log(typeof (score)); //typeof used as method

let value = Number(score) //capital Number is a class base
//converted to int      if score = 3abc (still ty:number)
console.log(typeof value) //will be alws number
console.log(value);  //NaN(not a no.) if score =33 or string or undefined
  //0 if score =null //1 if score = true

//CONVERSION
  //"33" <=>33 (33 string can be converted to number and vice versa)
  //"33abc" =>NaN (Not a Number)
  //true <=> 1; false <=> 0 (and vice versa)
  //string:"abc"=> true ; empty string:" " =>false (String to Boolean)

  let istrue =1
  let ans = Boolean(istrue)
  console.log(ans);
 
