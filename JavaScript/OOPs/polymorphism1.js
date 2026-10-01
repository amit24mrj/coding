class Shape{
    area(){
        throw new Error('Method must be implemented.');
    }
}
class Circle extends Shape{
    constructor(radius){
        super();
        this.radius=radius;
    }
    area(){
        return Math.PI*this.radius*this.radius;
    }
}
class Rectangle extends Shape{
    constructor(width,height){
        super();
        this.width=width;
        this.height=height;
    }
    area(){
        return this.width*this.height;
    }
}
function calculateArea(shape){
    return shape.area();
}
let circle=new Circle(5);
let rectangle=new Rectangle(4,6);
console.log(calculateArea(circle));
console.log(calculateArea(rectangle));