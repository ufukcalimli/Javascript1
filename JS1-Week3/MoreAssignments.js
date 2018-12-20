//These codes are for 'More Javascript'
//Assignment 1
function toSumUp(first,second,third){
    return parseFloat(first)+parseFloat(second)+parseFloat(third);
}
console.log(toSumUp(12,41,24.5));

//Assignment 2
function colorCar(color){
    console.log(`a ${color} car`);
}
colorCar("blue");

//Assignment 3
let instrument={
    id:1,
    type:"guitar",
    color:"black",
    secondHand:false
}

function printPropertiesOut(item){
    console.log(item);
}
printPropertiesOut(instrument);

//Assignment 4
function vehicleType(color,code){
    switch (code) {
        case 1:
            console.log(`a ${color} car`);
            break;
        case 2:
            console.log(`a ${color} motorbike`);
            break;
        default:
            console.log("Color or code error!")
            break;
    }
}
vehicleType("Purple",1);

//Assignment 5
let conditionToShow=3===3?"yes":"no";
console.log(conditionToShow);

//Assignment 6
function vehicle(color,code,age){
    switch (code) {
        case 1:
            if(age>1){
                console.log(`a ${color} used bike`);
            }
            console.log(`a ${color} bike`);
            break;
        case 2:
            if(age>1){
                console.log(`a ${color} used motorbike`);
            }
            console.log(`a ${color} motorbike`);
            break;
        default:
            console.log("Color, code or age error!")
            break;
    }
}

//Assignment 7
let vehiclesList=["motorbike", "caravan", "bike","hovercraft"];
var theThirdElement=vehiclesList[2];

//Assignment 10
function vehicleAdvertisement(){
    let outputStr="Amazing Joe's Garage, we service ";
    let lastOne=vehiclesList.pop();
    for(let vehicle of vehiclesList){
        outputStr+=`${vehicle}s `;
    }
    outputStr+=`and ${lastOne}s`;
    return outputStr;
}
console.log(vehicleAdvertisement());

//Assignment 12
let emptyObj={}
let teachers=[
    {
        name:"Josja",
        language:"HTML/CSS"
    },
    {
        name:"Sander",
        language:"HTML/CSS"
    },
    {
        name:"unmesh",
        language:"Bash"
    },
    {
        name:"Kapila",
        language:"Git"
    },
    {
        name:"nouran",
        language:"Javascript"
    },
    {
        name:"Joost",
        language:"Javascript"
    }
];

//Assignment 15 ?
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

function isSame(arr1, arr2, arr3){
    if (arr1.length===arr2.length) {
        arr1.every(function(element, index){
            console.log(`First and second arrays are equal: ${element===arr2[index]}`);
        })
    }

    if (arr1.length===arr3.length) {
        arr1.every(function(element, index){
            console.log(`First and third arrays are equal: ${element===arr3[index]}`);
        })
    }
    
    if (arr2.length===arr3.length) {
        arr2.every(function(element, index){
            console.log(`Second and third arrays are equal: ${element===arr3[index]}`);
        })
    }
}
isSame(x,y,z);

//Assignment 16 ?
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

console.log(typeof o1);
console.log(typeof o2);
console.log(typeof o3);


//Assignment 17
let bar = 42;
console.log( typeof typeof bar);