// Creating a Private Variable wiith a Closure
function createPerson(name,age){
    let privateAge=age;
    return{
        getName:function(){
            return name;
        },
        getAge:function(){
            return privateAge;
        },
        setAge:function(newAge){
            privateAge=newAge;
        }
    };
}
let person=createPerson('Amit kumar',22);
console.log(person.getName());
console.log(person.getAge());
person.setAge(31);
console.log(person.getAge());