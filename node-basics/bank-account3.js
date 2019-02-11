var accounts = [];

function createAccount (account) {
    accounts.push(account);
    return account;
}

function getAccount (username) {
    var matchedAccount;

    // for or while loop
    // account[0], account[1]
    for (var i = 0; i < accounts.length; i++) {
        if (accounts[i].username === username) {
            matchedAccount = accounts[i];
        }
    }
 
    return matchedAccount;
}

function deposit (account, amount) {
    // only accept number, use typeof
    if (typeof amount === 'number') {
        account.balance += amount;
    } else {
        console.log('Deposit not accepted. Amount was not a number');
    }   
}

function withdraw (account, amount) {
    // only accept number, use typeof
    if (typeof amount === 'number') {
        account.balance -= amount;
    } else {
        console.log('Withdraw not accepted. Amount was not a number');
    }
}

function getBalance (account) {
    return account.balance;
}

// createBalanceGetter(account)
//      return function ()
//          account.balance (return it)
function createBalanceGetter (account) {
    return function () {
        return account.balance;
    }
}

// TEST

var jaren = createAccount({
    username: 'jaren',
    balance: 0
});

deposit(jaren, 120);
withdraw(jaren, 'my string');

var jaren2 = getAccount('jaren');
var getJaren2Balance = createBalanceGetter(jaren2);

console.log(getJaren2Balance());





