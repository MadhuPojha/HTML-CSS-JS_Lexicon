/* Person: Write a JS class that represents a personal record. It has the following properties, all set from the constructor: (firstName, lastName, age, email)
--> a method toString(), which prints a summary of the information like: "Maria Petterson (age: 22, email: mp@gmail.com)"  
--> a method get_Person(), which returns an array of Person objects.   */
class Person {
    constructor(firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;  //Maria Petterson (age: 22, email: mp@gmail.com)
    }
    static get_Person(){
        return [
            new Person("Maria", "Petterson", 22, "mp@gmail.com"),
            new Person("Lexicon"),
            new Person("Stefan", "Larsson", 25),
            new Person("Peter", "Jansson", 24, "ptr@live.com")
        ];
    }
}
let person1 = new Person("Maria", "Petterson", 22, "mp@gmail.com");

console.log(person1.toString());
console.log(Person.get_Person())


