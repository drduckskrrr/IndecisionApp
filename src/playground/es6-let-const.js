var nameVar = 'Viet'
var nameVar = 'Minh'
//var can overide reassign redefine
console.log('nameVar', nameVar);

let nameLet = 'Viet'
nameLet = 'July'
//let can reassign but can not redefine
console.log('nameLet', nameLet)

const nameConst = 'A'
console.log('nameConst', nameConst)
//const can not reassign and redefine
//use const when value does not change

function getPetName() {
    var petName ='abc'
    return petName
    //let const are function scope not global and also block level scope
}

//block scope 

var fullName = 'abc abc'
let first
if(fullName){
    first = fullName.split(' ')[0]
    console.log(first)
}
console.log(first)
//var is not block level scope, can access out side the block
//let const block level scope, allow to create variable specific to those scope
//Use let when we reassign a variable 