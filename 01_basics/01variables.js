const accountId = 12222
let accountEmail = "aryan@gmail.com"
var accountPassword = "12345"
accountCity = "kota"

// accountId = 2  not allowed

accountEmail = "rohit@gmail.com"
accountPassword = "213312"
accountCity = "patna"

console.log(accountId);

console.log([accountId, accountEmail, accountPassword, accountCity])

/*
prefer not to use var
because of issue in block scope and functional scope
*/