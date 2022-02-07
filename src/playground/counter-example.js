// //if statements
// //ternary operator
// //logical operator


// //create app object(title/subtitle)
// //use title/subtitle in the template
// //render template
// //create object


// //only render the subtitlte (an p tag) if subtitle exist - logical operator
// //render new p tag - if options.length > 0 'here are your option' 'no options'
// const para = {
//     title: 'Indecision App ',
//     // subtitle: 'Put your life in the hand of a computer',
//     option: []
// }
// function getOption(option){
//     if(option.length >0){
//         return <p>Here is your option</p>
//     }else{
//         return <p>no options</p>
//     }
// }
// const template = (
//     <div>
//         <h1>{para.title}</h1>
//         {para.subtitle && <p>{para.subtitle}</p>}

//         <p>{para.option.length>0?'Here is your option':'No options'}</p>
//     </div>
// );
// let userName = 'Viet';
// let age = 23;
// let userLocation = 'VietNam'
// //create an object
// let user = {
//     name: 'Viet',
//     age: '20',
//     location: 'Ha Noi'
// }
// //cant render an object in jsx expression
// //undefined boolean null are ignored by JSX -> useful feature
// function getLocation(location) {
//     if (location) {
//         return <p>Location: {location}</p>
//     }
// }
// const templateTwo = (
//     <div>
//         <h1>{user.name?user.name:'Anonymous'}</h1>
        
//         {(user.age && user.age >=  18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// )
// //use only single root element
// //Create a templateTwo var JSX expression
// //route <div> -> <h1> Name -><p>Age: -><p>Location->Render templateTwo
// let count = 0;
// const addOne = () =>{
//     count++
//     renderCounterApp()
//     console.log('add one')
// }
// const minusOne = () =>{
//     count--
//     renderCounterApp()
//     console.log('minus one')
// }
// const reset = () =>{
//     count = 0
//     renderCounterApp()
//     console.log('reset')
// }


// //Chanllenge
// //Make button '-1' - setup minusOne function and register - log 'minusOne'
// //Make reset button 'reset' - setup reset function - log'reset'
// //class -> JSX:className 
// const appRoot = document.getElementById('app')


// const renderCounterApp = () => {
//     const templateThree = (
//         <div>
//            <h1>Count: {count}</h1>
//            <button onClick={addOne}>+1</button>
//            <button onClick={minusOne}>-1</button>
//            <button onClick={reset}>reset</button>
//         </div>
        
//        );
//        ReactDOM.render(templateThree, appRoot);
// }
// renderCounterApp();



class Counter extends React.Component{
    handeAddOne(){
        this.setState((state)=>{
            return {
                count: state.count+1
            }
        })
        
    }
    handeMinusOne(){
        this.setState((state)=>{
            return{
                count: state.count-1
            }
        })
    }
    handleReset(){
        this.setState(()=>{
            return{
                count:0
            }
        })

    }
    constructor(props){
        super(props)
        this.handeAddOne = this.handeAddOne.bind(this)
        this.handeMinusOne = this.handeMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            count: 0
        }
    }
    componentDidMount(){
        const json =localStorage.getItem('count')
        const count = parseInt(json, 10)
        if(!isNaN(count)){
            this.setState(()=>({count}))
        }
        
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.count!== this.state.count){
            const json = this.state.count
        
            localStorage.setItem('count', json)
        }
        
    }
    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handeAddOne}>+1</button>
                <button onClick={this.handeMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

//Step 1: Create 3 methods: handleAddOne, handleMinusOne, handleReset -> use console.log to print method name
ReactDOM.render(<Counter count={4} />, document.getElementById('app'))