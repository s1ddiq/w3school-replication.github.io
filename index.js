const favoriteFood = prompt("Enter your favorite food name and we'll give you the ingredients!");

const sandwhich = ["peanut-butter & jelly other flavors:, include honey. ", "bread ", "flavors include but are not limited to: vegetable sandwhich, egg sandwhich, meat sandwhich ETC. ", "others include: single bread with butter ETC. "];

const cake = ["sugar ", "butter ", "salt ", "dough ", "milk ", "flavor: banana, strawberry, pineapple, apple, carrot ETC. "];

const taco = ["bread (tortilla bread baked) ", "vegetables ",  "flavor: burrito, includes but is not limted to: beef, pork & beans "];

taco[0] = "bread (includes: tortilla, and other bread types [baked]"

let buyersName = ["sadiq ", "age: 12, last-name: nasheed"];
console.log(buyersName)


console.log(sandwhich);

if(favoriteFood === "sandwhich") {
    alert(sandwhich);
} else if(favoriteFood === "cake") {
    alert(cake);
} else if(favoriteFood === "taco") {
    alert(taco);
} else {
    alert("It may be a food, But we currently can only tell you sandwhich, cake, and a taco :( sorry");
}

