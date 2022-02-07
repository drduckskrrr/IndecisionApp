
//this.props is an array
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            option: props.options,
            pick: 0
        }
        this.hadleDeleteOptions = this.hadleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
    }
    componentDidMount() {
        try{
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            
            if(options){
                this.setState(()=>({option: options}))
            }
        }catch(e){

        }
    }
    componentDidUpdate(preProps, preState) {
        if (preState.option.length !== this.state.option.length) {
            const json = JSON.stringify(this.state.option)
            console.log('saving')
            localStorage.setItem('options', json)
        }
        console.log('saving date')
    }
    componentWillUnmount() {
        console.log('component will unmount')
    }
    //hadleDeleteOptions
    hadleDeleteOptions() {
        this.setState(() => ({ option: [] }))
    }

    handleDeleteOption(option) {
        this.setState((state) => ({
            option: state.option.filter((op) => {
                return option !== op
            })
        }))
    }

    //handlePick
    handlePick() {
        this.setState((state) => {
            return {
                pick: Math.floor(state.option.length * Math.random())
            }
        })
        alert(this.state.option[this.state.pick])
    }
    handleAddOption(op) {
        if (!op) {
            return 'Enter valid value to add item'
        } 
        else if (this.state.option.indexOf(op) > -1) {
            return 'This option already exist'
        } else {
            this.setState((state) => ({ option: state.option.concat(op) }))
        }
    }
    check(op){
        if(this.state.option.indexOf(op)>-1){
            return false
        }
        return true
    }
    render() {
        const title = 'Indecision'
        const subTitle = 'Put your life in the hand of computer '

        return (
            <div>
                <Header subTitle={subTitle} />
                <Action hasOptions={this.state.option.length > 0} handlePick={this.handlePick} />
                <Options options={this.state.option} handleDeleteOptions={this.hadleDeleteOptions} />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}
// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subTitle}</h2>
//             </div>
//         )
//     }
// }

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision App'
}

// class Action extends React.Component {

//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}
//                 >What should i do ?</button>
//             </div>
//         )
//     }
// }

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick}
                disabled={!props.hasOptions}
            >What should i do ?</button>
        </div>
    )
}
//Options ->Options component here
//AddOption -> AddOptions component here

//Set up options prop for options component
//Render the length of the array

//Add Remove all button 
//Setup handleRemoveAll -> alert some message
//setup on click to fire the method
// class Options extends React.Component {

//     //have to define render() method
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>

//                 {
//                     this.props.options.map((op) =>
//                         <Option key={op} optionText={op} />
//                     )
//                 }

//             </div>
//         )
//     }
// }

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length===0&&'Please add an option to get start'}
            {
                props.options.map((op) =>
                    <Option key={op} optionText={op} handleDeleteOption={props.handleDeleteOption} />
                )
            }

        </div>
    )
}

//Option ->Option component here
//Can use </> or <></>
//Render new p tag for each option
// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p>{this.props.optionText}</p>
//             </div>
//         )
//     }
// }

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText)
                }}>
                Remove
            </button>
        </div>
    )
}

//1. setup the form with text input and submit button
//2. Wire up onSubmit
//3. handleAddOption -> fetch the value type ->if value, then alert
class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOptions = this.handleAddOptions.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOptions(e) {
        e.preventDefault()

        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)
        this.setState(() => ({ error }))

        if(!error){
            e.target.elements.option.value=''
        }
    }
    render() {
        return (

            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOptions}>
                    <input type='text' name='option' />
                    <button>submit</button>
                </form>
            </div>
        )
    }
}


//stateless functional components
//can not use state but can us props
// const User = (props) =>{
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// }

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))