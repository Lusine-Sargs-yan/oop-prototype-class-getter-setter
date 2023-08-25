### Create a class Bank Account. It should take in two arguments name and balance.
- Deposit: adds new balance to existing balance if entered amount is positive
- Withdraw: Withdraws specified amount from balance if allowed
- Transfer: transfers money from one account to another.

const userBankAccount = new BankAccount('Ann', 1000);<br>
userBankAccount.deposit(300);// -> 1300 <br>
userBankAccount.withdraw(100);// 1200 <br>

const anotherUserBankAccount = new BankAccount('John', 1000); <br>
userBankAccount.transfer(400, anotherUserBankAccount); // -> Success transfer, my balance: 800, the receiver balance: 1400 <br>
