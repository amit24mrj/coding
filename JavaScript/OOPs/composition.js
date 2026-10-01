class Address{
    constructor(street,city,state,zip){
        this.street=street;
        this.city=city;
        this.state=state;
        this.zip=zip;
    }
    toString(){
        return `${this.street}, ${this.city}, ${this.state}, ${this.zip}`;
    }
}
class Person{
    constructor(name,address){
        this.name=name;
        this.address=address;
    }
    toString(){
        return `${this.name}\n${this.address.toString()},`;
    }
}
let address=new Address('123 main st','Anytown','CA','1235');
let person=new Person('Amit kumar',address);
console.log(person.toString());