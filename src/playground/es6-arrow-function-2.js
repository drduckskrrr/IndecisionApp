// arguments object - no longer bound with arrow functions
const add = (a, b)=>{
    // console.log(arguments)
    return a +b;
}
console.log(add(55,1))
// this keyword - no longer bound
const user = {
    name: 'Andrew',
    city: ['Ha Noi', 'Sai Gon'],
    printPlacesLived: function() {
        return this.city.map((city)=> this.name+' has lived in '+city)
        
    }
}

console.log(user.printPlacesLived())

//Challenge

const multiplier = {
    //array of numbers
    numbers : [1,2,3],
    //multiplierBy - single number
    multiplierBy : 2,
    //method multiplier - return new array where number have been multiplied
    multiply(){
        return this.numbers.map((number)=>number*this.multiplierBy)
    }
}

console.log(multiplier.multiply())