//es5 function 
const square = function(x){
    return x * x;
}

console.log(square(8));
//es 6 arrow function
// const squareArrow = (x)=>{
//     return x*x;
// }

const squareArrow = (x) => x*x
console.log(squareArrow(8))

//Chanllenge - use arrow functions 
//getfirstName

const getFirstName = (stringName) => {
    return stringName.split(' ')[0]
}

const getFirstNameShort =(stringName) => stringName.split(' ')[0]

console.log(getFirstName('Dean Smith'))
console.log(getFirstNameShort('Minh Viet'))