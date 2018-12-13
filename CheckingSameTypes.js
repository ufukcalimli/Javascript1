let myString="Stella";
let myInteger=1;
let myBool=true;
let myArray=[43,14,235,1,23,434,42];

console.log("myString's value is: ", myString);
console.log("myInteger's value is: ", myInteger);
console.log("myBool's value is: ", myBool);
console.log("myArray's value is: ", myArray);
console.log(" ");

console.log("myString's type is: ", typeof myString);
console.log("myInteger's type is: ", typeof myInteger);
console.log("myBool's type is: ", typeof myBool);
console.log("myArray's type is: ", typeof myArray);
console.log(" ");

if (typeof myString === typeof myInteger || typeof myBool || typeof myArray) {
    console.log("SAME TYPE!");
}
else{console.log("NOT SAME TYPE!");}

if(typeof myInteger === typeof myString || typeof myBool || myArray){
    console.log("SAME TYPE!");
}
else{console.log("NOT SAME TYPE!");}

if(typeof myBool === typeof myString || typeof myInteger || myArray){
    console.log("SAME TYPE!");
}
else{console.log("NOT SAME TYPE!");}

if(typeof myArray === typeof myString || myInteger || myBool){
    console.log("SAME TYPE!");
}
else{console.log("NOT SAME TYPE!");}