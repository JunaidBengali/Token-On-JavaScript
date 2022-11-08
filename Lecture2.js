/* Function(console.log method)

var introduction = {
    name: "muhammad Ahmed",
    age: 18,
    fav_character: "Flashpoint Batman",
}

console.log(`Age: ${introduction.age}, Name: ${introduction.name}, Favourite: ${introduction.fav_character}`);

function age(birth_year, year) { //here "age" is the funcytion name and (birth_year, year) is a perimeter..
    const calculated_age = year - birth_year;
    console.log(calculated_age);
}
age(2004, 2077); //now (birth_year, year) "or" (2004, 2077) is an arguement.
age(2007, 2077);
*/

// Function(return method)

function addition(n1, n2) {
    return n1 + n2;
}

console.log(addition(55, 45));
console.log(addition(5, 4));
console.log(addition(5, 5));
