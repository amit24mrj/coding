// Example of Encapsulation
class BankAccount{
    constructor(accountNumber,balance){
        let _accountNumber=accountNumber;
        let _balance=balance;
        this.getAccountNumber=function(){
            return _accountNumber;
        };
        this.getBalance=function(){
            return _balance;
        };
        this.deposit=function(amount){
            _balance += amount;
        };
        this.withdraw=function(amount){
            if(_balance >= amount){
                _balance-=amount;
            }
            else{
                console.log('Insufficient fund.');
            }
        };
    }
}
let account=new BankAccount('1234567890',1000);
console.log(account.getAccountNumber());
console.log(account.getBalance());
account.deposit(500);
console.log(account.getBalance());
account.withdraw(200);
console.log(account.getBalance())