'use strict';

// arguments object - no longer bound with arrow functions

var add = function add(a, b) {
    return a + b;
};

console.log(add(55, 1, 1000, 32));

// this keyword - no longer bound

var user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacedLived: function printPlacedLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};

console.log(user.printPlacedLived());

// Challenge area

var multiplier = {
    numbers: [23, 1, 14, 30],
    multiplyBy: 10,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (num) {
            return num * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
