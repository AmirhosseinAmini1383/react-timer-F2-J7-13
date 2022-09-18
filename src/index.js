import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css";

class Timer extends React.Component{
  constructor(){
    super();
    this.state={
      time :new Date().toLocaleTimeString()
    }
  }
  render(){
    setInterval(()=>{
      this.setState({
        time :new Date().toLocaleTimeString()
      })
    },1000)
    return(
      <h2 className='timer'>
          Time it is {this.state.time} 
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
      <div className='main'>
        <Hello/>
        <Timer/>
      </div>
    )
  }
}
// const elem=new App;

// const Tick=()=>{
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <App/>
    // elem.render()
    );
// }

// setInterval(()=>{
//   Tick();
// },1000)