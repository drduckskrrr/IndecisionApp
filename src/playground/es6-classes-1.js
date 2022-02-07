//Setup constructor to take name and age(default to 0)
//Setup method getDescription - name + 'is' +age +'year(s) old

class Person {
    // constructor(name = 'Anonymous'){
    //     this.name = name
    // }
    //name = ..., age=... : set default value 
    constructor(name='Anonymous', age=0){
        this.name=name
        this.age =age
    }
    getDes(){
        return `Hello ${this.name} is ${this.age} year(s) old`
    }
    getGreeting(){
        return `Hi, i am ${this.name}`
    }
}
//use `` for template String
//create a sub class
class Student extends Person{
    constructor(name, age, major){
        //Calling parent contructor
        super(name, age)
        this.major=major
    }
    hasMajor(){
        return !!this.major
    }
    //overide parrent method
    getDes(){
        let description = super.getDes()
        if(this.hasMajor()){
            description += ` Their major is ${this.major}`
        }
        return description
    }
}

//Chalenge: Traveler extends Person , add support for homeLocation
//overide getGreeting
//1. Hi. I am ... I'm visiting from ...
//2. HI. I am ... 
class Traveller extends Person{
    constructor(name, age, homeLocation){
        super(name, age)
        this.homeLocation = homeLocation
    }
    //Overide getGreeting
    getGreeting(){
        if(this.homeLocation){
            return super.getGreeting() + ` I'm visiting from ${this.homeLocation}`
        }else{
            return super.getGreeting()
        }
    }
}
const me = new Traveller('Viet Hoang', 22,'Ha Noi')
console.log(me.getGreeting())
const other = new Student()
console.log(other.getGreeting())
//new keyword to create new instances of class
//! -> flip operator , falsie value like null, undefined, false, '' is flase