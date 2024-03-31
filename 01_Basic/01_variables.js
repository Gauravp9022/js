const account_ID="321098"
let account_Email="random512@gmail.com"
var account_password="shakalakaboomboom"
account_city="Bombay"

let account_state;

/*
Prefer not to use var
because of issue in block scope and functional scope


scope means {}
*/

console.log (account_ID) 

// account_ID="123456" 
// once constant value is defined its cant be modified or change 
// here account_ID is constant value


account_Email="ajanabiinsaan@yahoo.com"
account_password="khoonidarinda"
account_city="Mumbai"


console.log (account_ID)   
// log use for particular file to show in output

console.table([account_ID,account_Email,account_password,account_state])
// console.table use for to show many data values in output