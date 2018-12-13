let multiTypes=["John",25,true,{
    language:"Greek",
    hasCar:true
}];

for(let item of multiTypes){
    console.log(item);
}

console.log(multiTypes[3].language);
console.log(multiTypes[3].hasCar);
console.log("");

if (6/0===10/0) {
    console.log(true);
}

if (6/0) {
    console.log(true);
}

if (10/0) {
    console.log(true);
}