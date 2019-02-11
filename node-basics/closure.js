// createAdder(baseNumber)
/*
    return function (numberToAdd)

        add up baseNumber & numberToAdd
        return result
*/
function createAdder (baseNumber) {
    return function (numberToAdd) {
        return baseNumber + numberToAdd;
    }
}

var addTen = createAdder(10);
console.log(addTen(2)); // 12
console.log(addTen(0)); // 10

/*
function greetMaker (name) {
    // Closure: function created inside another function
    function greet () {
        console.log('Hello ' + name + '!');
    }

    return greet;
}

var greetJaren = greetMaker('Jaren'); // greetJaren is a FUNCTION
greetJaren();

var greetWorld = greetMaker('world');
greetWorld();
*/