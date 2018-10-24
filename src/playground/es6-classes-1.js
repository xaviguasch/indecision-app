
class Person {
    constructor(name = 'Anon', age = 0) {
        this.name = name
        this.age = age
    }
    getGreeting() {
        return `Hi. I am ${this.name}.`
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }
    hasMajor() {
        return !!this.major   // converts a 'falsy' to false and a 'truthy' to true. undefined gets to false here.
    }
    getDescription() {
        let description = super.getDescription()

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }

        return description        
    } 
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }
    getGreeting() {
        let greeting = super.getGreeting()

        if (this.homeLocation) {
            greeting += ` I am visiting from ${this.homeLocation}.`
        }
        
        return greeting
    }
}



const me = new Student('Xavi Guasch', 33, 'Economics')
console.log(me)
console.log(me.hasMajor())
console.log(me.getDescription())


const other = new Student()
console.log(other);
console.log(other.hasMajor())
console.log(other.getDescription())


const thatGuy = new Traveler(undefined, undefined, 'Singapour')
console.log(thatGuy.getGreeting());





