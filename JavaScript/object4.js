// Object Declaration
let person={name:'Amit kumar',age:21};

// Object Properties
console.log(person.name);
console.log(person['age']);

// Object Methods
person.greet=function(){
    console.log(`Hello, my name is ${this.name} and I am ${this.age}  year old.`)
};
person.greet();

// Object Constructors
function Person(name,age){
    this.name=name;
    this.age=age;
    this.greet=function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    };
}
let person1= new Person('Prabhat',21);
let person2=new Person('Priya',22);
person1.greet();
person2.greet();