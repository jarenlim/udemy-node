console.log('starting password maanger');

var storage = require('node-persist'); // include 3rd party modules into your files
storage.initSync();

// storage.setItemSync('accounts', [{
 //   username: 'Jaren',
//    balance: 0
//}]);

var accounts = storage.getItemSync('accounts');

// push on a new account
// accounts.push({
//     username: 'Joel',
//     balance: 100
// });

// save using setItemSync
// storage.setItemSync('accounts', accounts);

console.log(accounts);