// JavaScript Classes
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    sayHello(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
let person=new Person('Amit kumar',21);
person.sayHello();