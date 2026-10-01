// Object Constructors
function Person(name,age){
    this.name=name;
    this.age=age;
    this.greet=function(){
        console.log(`Hello, my name is ${this.name} and I ${this.age} years old`);
    };
}
let person1 = new Person('Amit kumar',21);
let person2= new Person('Neeraj sahani',16);
person1.greet();
person2.greet();