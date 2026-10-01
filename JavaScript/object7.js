// Creating an Object with a Constructor Function
function Person(name, age){
    this.name=name;
    this.age=age;
    this.greet=function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}
let person=new Person('Amit kumar',20);
person.greet();