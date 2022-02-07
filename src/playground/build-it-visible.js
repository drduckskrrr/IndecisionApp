// let i = 0
// const handleClick = () =>{
//     const button = document.querySelector('button')
//     const pTag = document.querySelector('p')
//     i++
//     if(i%2===1){
//         button.innerText = 'Hide'
//         pTag.style.display='flex'
//     }else{
//         button.innerText = 'View detail'
//         pTag.style.display='none'
//     }
// }

// const template = (
//     <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={handleClick}>View detail</button>
//         <p style={{display:'none'}}>This is detail</p>
//     </div>
// )

// const appRoot = document.getElementById('app')

// ReactDOM.render(template, appRoot)


// const toggleVisibility = () =>{
//     visibility = !visibility
//     render()
// }

// let visibility = false
// const render = () =>{
//     const jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>
//                 {visibility? 'hide details':'show details'}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>This is details</p>
//                 </div>
//             )}
//         </div>
//     )
//     ReactDOM.render(jsx, document.getElementById('app'))
// }

// render()

class VisibilityToggle extends React.Component{
    
    Visibility(){
        this.setState((state)=>{
            return {
                visual: !state.visual
            }
        })
    }
    constructor(){
        super()
        this.Visibility = this.Visibility.bind(this)
        this.state={
            visual: false
        }
    }
    render(){
        return(
            <div>
                <button onClick={this.Visibility}>{this.state.visual ? 'Hide details' :'Show details'}</button>
                {this.state.visual && <p>This is details</p>}
            </div>
        )
    }
}
ReactDOM.render(<VisibilityToggle/>,document.getElementById("app"))

