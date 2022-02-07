const para = {
    title: 'Indecision App ',
    subtitle: 'Put your life in the hand of a computer',
    option: []
}
const onFormSubmit =(e) =>{
    e.preventDefault();
    const option = e.target.elements.option.value;

    if(option){
        para.option.push(option)
        e.target.elements.option.value = ''
        renderCounterApp()
    }
}

const numbers = [55, 101, 1000]

const onReset = () =>{
    // e.preventDefault();
    // para.option.splice(0, para.option.length)
    // renderCounterApp()
    para.option= []
    renderCounterApp()
}

const onMakeDecision = () =>{
    const random = Math.floor(Math.random() * para.option.length)
    const option = para.option[random]
    alert(option)
    console.log(random)
}
// const template = (
//     <div>
//         <h1>{para.title}</h1>
//         {para.subtitle && <p>{para.subtitle}</p>}
//         <p>{para.option.length}</p>
//         <p>{para.option.length>0?'Here is your option':'No options'}</p>
        
//         <form onSubmit={onFormSubmit}>
//             <input type='text' name='option'/>
//             <button>Add option</button>
//         </form>
//     </div>
// );




//create a render function that renders the new jsx
//call it right away
//call it after options array added to

//create remove all button above list
//on click -> wipe the array -> rerender
const appRoot = document.getElementById('app')
let i =0
const renderCounterApp = () =>{
    const templateRender = (
        <div>
        <h1>{para.title}</h1>
        {para.subtitle && <p>{para.subtitle}</p>}
        
        <p>{para.option.length>0?'Here is your option':'No options'}</p>
        <button onClick = {onReset}>Reset</button>
        <button onClick={onMakeDecision} disabled={para.option.length==0}>What should i do</button>
        <ol>
            {
                 
                para.option.map((op)=>{
                    i++
                    return <li key={i}>{op}</li>
                })
            }
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type='text' name='option'/>
            <button>Add option</button>
        </form>
    </div>
    )
    ReactDOM.render(templateRender, appRoot)
}
renderCounterApp()