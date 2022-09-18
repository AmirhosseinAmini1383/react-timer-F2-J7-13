import React from 'react';
import ReactDOM from 'react-dom/client';

class Timer extends React.Component{
  render(){
    return(
      <h2>
          Time it is {new Date().toLocaleTimeString()} 
      </h2>
    )
  }
}

class Hello extends React.Component{
  render(){
    return(
      <h1>
        پر قدرت ادامه میدم :) قراره یه فرانت کار خفن بشم :) قول میدم به خودم
      </h1>
    )
  }
}

class App extends React.Component{
  render(){
    return (
      <div>
        <Hello/>
        <Timer/>
      </div>
    )
  }
}
// const elem=new App;

const Tick=()=>{
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    // elem.render()
    <App/>
    );
}

setInterval(()=>{
  Tick();
},1000)