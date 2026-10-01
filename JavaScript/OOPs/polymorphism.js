// Example of polymorphism
class Animal{
    constructor(name){
        this.name=name;
    }
    sound(){
        console.log(`${this.name} makes a soun.`);
    }
}
class Dog extends Animal{
    constructor(name,breed){
        super(name);
        this.breed=breed;
    }
    sound(){
        console.log(`${this.name} the ${this.breed} barks.`);
    }
}
class Cat extends Animal{
    constructor(name,breed){
        super(name);
        this.breed=breed;
    }
    sound(){
        console.log(`${this.name} the ${this.breed} meows`);
    }
}
let dog= new Dog('Fido','Golden Retriever');
let cat = new Cat('Whiskers','Siamese')
dog.sound();
cat.sound();