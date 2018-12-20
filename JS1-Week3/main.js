const name="Ufuk";

//console.log(`The letters in your name are ${Array.from(name.toUpperCase()).join(", ")}`);

function makeItArray(name){
  const upperCaseLetters=Array.from(name.toUpperCase());
  const joinedStr= upperCaseLetters.join(", ");
  console.log("The letters in your name are "+joinedStr);
}

makeItArray(name);

const name="Ufuk";

//console.log(`The letters in your name are ${Array.from(name.toUpperCase()).join(", ")}`);

function makeItArray(name){
  const upperCaseLetters=Array.from(name.toUpperCase());
  const joinedStr= upperCaseLetters.join(", ");
  console.log(`The letters in your name are ${joinedStr}`);
}

//makeItArray(name);

function sortName(name){
  let letters=Array.from(name.toUpperCase());
  letters.sort();
  let uniqueLetters=new Set(letters); 
  return uniqueLetters;
}

console.log(`The letter in your name are ${sortName(name)} and ${sortName(name)}`);