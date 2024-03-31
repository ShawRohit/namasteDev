import React from 'react';
import ReactDOM  from 'react-dom/client';

const Title = ()=>{
    <h1 id="title" className='head'>
        Namaste react using JSX
    </h1>
}


//Component composition is nesting or merging more than one component inside each other
const HeadingComponent = ()=>{
    <div className='container'>
        <Title/>
        <h1>Namste react using functional component</h1>
    </div>
}

// const heading = React.createElement("h1",{},"Hello From React Only");

//JSX (Transpiled before it reaches the JS engine)
// JSX => Babel transpile it to React.createElement => ReactElement Js object => HTMLElement (render)

const heading = <h1 id="heading">Namaste React using JSX</h1>

// Note this console.log will print same as react.createElemnt object as they are same 
console.log(heading)
const root  = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading);
root.render(<HeadingComponent />)