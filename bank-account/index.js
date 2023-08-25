class BankAccount {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }

    get name() {
        return this._name;
    }
    set name(value) {
        if (typeof value !== 'string') throw TypeError('Please, enter correct type.');
        this._name = value;
    }

    get balance() {
        return this._balance;
    }

    set balance(value) {
        if(typeof value !== 'number') throw TypeError('Please, enter correct type.');
        this._balance = value;
    }
    deposit(amount) {
        if (amount < 0) throw Error('Please, enter positive amount.');
        this.balance += amount;

        return  this.balance;
    }

    withdraw(amount) {
        if(this.balance - amount < 0) throw Error('Please, You have not enough money.');
        this.balance -= amount;

        return this.balance;
    }

    transfer(amount, otherAccount) {
        return this.withdraw(amount) && otherAccount.deposit(amount) ?
            `Success transfer, the sender balance: ${this.balance}, the receiver balance: ${otherAccount.balance}`
            :  'There is not enough money to transfer';
    }
}

const userBankAccount = new BankAccount('Ann', 1000);
console.log(userBankAccount.deposit(300));
console.log(userBankAccount.withdraw(100));

const anotherUserBankAccount = new BankAccount('John', 1000);
console.log(userBankAccount.transfer(400, anotherUserBankAccount));