// Object Methods
let person={
    name:'Amit kumar',
    age:22,
    greet: function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
person.greet();