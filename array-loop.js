// ONLY SHOW 7 NUMBER. IF I ADD OR PUSH ANOTHER NUMBER THEN IT WONT BE SHOWN 

var numbers = [23, 45, 56, 78, 54, 32, 45, 100, 190];

for (var i = 0; i < 7; i++) {
    var element = numbers[i];
    console.log(element);
}

// FOR SHOWING UNLIMITED NUMBER THEN I HAVE TO USE ------- length -----

for (var i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    console.log(element);
}


// ANOTHER EXAMPLES 
var item = ['mobile','phone', 'charger', 'pencil', 'pen', 'table','dress','shirts', 'pants' ]

for (var i = 0; i < 6; i++) {
    var newElement = item[i];               // "I" MEANS - ITERATION
    console.log(newElement);
}

// PUSH 
for (var i = 0; i < item.length; i++) {
    var newElement = item[i];
    console.log(newElement);
}