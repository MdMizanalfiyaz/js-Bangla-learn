const accountId = 1556;
let accountEmail = "mahim@yahoo.com";
var accountPassword = "13456";
accountCity = "Feni";
let accountState;

// accountId = 4; (not allowed is js)

accountEmail = "ma@mayahoo.com";
accountPassword = "1235678";
accountCity = "Noakhali";

console.table([accountEmail,accountId,accountPassword,accountCity,accountState]);
console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/