// arguments object - no longer bound with arrow functions

const add = (a, b) => {    
    return a + b 
}

console.log(add(55, 1, 1000, 32));


// this keyword - no longer bound

const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacedLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city)
    }
}

console.log(user.printPlacedLived());


// Challenge area

const multiplier = {
    numbers: [23, 1, 14, 30],
    multiplyBy: 10,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy)
    }
}

console.log(multiplier.multiply());



