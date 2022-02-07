import React from 'react'
import ReactDom from 'react-dom'
import IndecisionApp from './components/IndecesionApp'
import './style/style.scss'
import 'normalize.css/normalize.css'
// const Layout = (props) =>{
//     return (
//         <div>
//         <p>header</p>
//         {props.children}
//         <p>footer</p>
//         </div>
//     )
// }

// const template = (
//     <div>
//         <h1>Page title</h1>
//         <p>This is my page</p>
//     </div>
// )

ReactDom.render(<IndecisionApp/>, document.getElementById('app'))

