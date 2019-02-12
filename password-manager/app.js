console.log('starting password maanger');

var storage = require('node-persist'); // include 3rd party modules into your files
storage.initSync();

// account.name Facebook
// account.username User12!
// account.password Password123!

function createAccount (account) {
    var accounts = storage.getItemSync('accounts');

    if (typeof accounts === 'undefined') {
        accounts = [];
    }

    accounts.push(account);
    storage.setItemSync('accounts', accounts);

    return account;
}

function getAccount (accountName) {
    var accounts = storage.getItemSync('accounts');
    var matchedAccount;

    accounts.forEach(function (account) {
        if (account.name === accountName) {
            matchedAccount = account;
        }
    });

    return matchedAccount;
}

var facebookAccount = getAccount('Facebook');
console.log(facebookAccount);