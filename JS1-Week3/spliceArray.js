let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);

favoriteAnimals.splice(1,0,"meerkat");
console.log(favoriteAnimals);
console.log(`The array has a length of: ${favoriteAnimals.length}`);

let indexToRemove=favoriteAnimals.indexOf("giraffe");
if(indexToRemove > -1){
    favoriteAnimals.splice(indexToRemove,1);
}
console.log(favoriteAnimals);

console.log(`The item you are looking for is at index: ${favoriteAnimals.indexOf("meerkat")}`);