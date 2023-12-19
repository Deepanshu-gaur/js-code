const accountId = 145356;
let accountEmail = 'xyz@gmail.com';
var accountpassword = "1236745";
accountCity ="Jaipur";
let accountstate;

// accountId = 2; //not allowed you have to declare const

accountEmail ="dg@dg.com";
accountpassword ="6477231";
accountCity ="bengaluru";

/* prefer not to use var
 because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountpassword,accountCity,accountstate]);