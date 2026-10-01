let person={
    name:'Amit kumar',
    age:21,
    greet:function(){
        console.log(`Hello, My name is ${this.name} and I am ${this.age} years old.`);
    }
};
person.greet();