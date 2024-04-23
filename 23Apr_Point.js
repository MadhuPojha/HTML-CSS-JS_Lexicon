/*  Point Distance: Write a JS class that represents a Point. It has x and y coordinates as properties, that are set through the constructor, and a static method for finding the distance between two points, 
called distance(). Input: The distance() method should receive two Point objects as parameters.
Output: The distance() method should return a number, the distance between the two point parameters. 
Submit the class definition as is, without wrapping it in any function.  */

class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    static distance(point1, point2){
        
        return Math.hypot(point1.x - point2.x, point1.y - point2.y)
        //const point_x = point1.x - point2.x; 
        //const point_y = point1.y - point2.y; 
        //return Math.sqrt(point_x * point_x + point_y * point_y); 
    }
}
let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
