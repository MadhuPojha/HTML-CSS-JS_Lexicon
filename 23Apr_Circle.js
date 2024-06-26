/*Circle: Write a JS class that represents a Circle. It has only one data property – it’s radius, and it is set trough the constructor. 
The class needs to have getter and setter methods for its diameter – the setter needs to calculate the radius and change it and the getter needs to use the radius to 
calculate the diameter and return it. The circle also has a method area(), which calculates and returns its area.  */

class Circle {
    constructor(radius){
        this.radius = radius;
    }
    get diameter(){
        return this.radius * 2;
    }
    set diameter(value){
        const set_diameter = value * 2;
        this.radius = value / 2
    }
    get area() {
        return Math.PI * this.radius * this.radius;
      }
}
let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);

c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
