// Example of Inheritance
class Animal{
    constructor(name){
        this.name=name;
    }
    eat(){
        console.log(`${this.name} is eating.`)
    }
}
class Dog extends Animal{
    constructor(name,breed){
        super(name);
        this.breed=breed;
    }
    bark(){
        console.log(`${this.name} the ${this.breed} is barking. `)
    }
}
let dog =new Dog('Fido','Golden Retriever');
dog.eat();
dog.bark();