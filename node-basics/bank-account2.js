var accounts = [];

// Account Object
// balance
// username

// createAccount(account)
// push onto accounts array
// return account
function createAccount (account) {
    accounts.push(account);
    return account;
}

// getAccount(username)
// find matching account using forEach
function getAccount (username) {
    var matchedAccount;

    accounts.forEach(function (account) {
        if (account.username === username) {
            matchedAccount = account;
            // cannot return here, that's returning for the anonymous function
        }
    });

    return matchedAccount;
}

// deposit(account, amount)
function deposit (account, amount) {
    account.balance += amount;
}

// withdraw(account, amount)
function withdraw (account, amount) {
    account.balance -= amount;
}

// getBalance(account)
function getBalance (account) {
    return account.balance;
}

var jarensAccount = createAccount({
    username: 'Jaren',
    balance: 0
});

deposit(jarensAccount, 100);
console.log(getBalance(jarensAccount));

withdraw(jarensAccount, 11);
console.log(getBalance(jarensAccount));

var existingAccount = getAccount('Jaren');
console.log(getBalance(jarensAccount));

var joelsAccount = createAccount({
    username: 'joel001',
    balance: 12
});

console.log(accounts);

var existingJoelAccount = getAccount('joel001');
console.log(existingJoelAccount);




