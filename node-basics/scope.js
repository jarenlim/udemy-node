var age = 25; // global variable

// you can modify global variables from here
function localFunction () {
    age = 3; // you can modify global variables from here
    var age = 0;
}

localFunction();
console.log(age);