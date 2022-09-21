import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css";

var interval;

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 10
    }
  }

  componentDidMount(){
    console.log("componentDidMount");
    // interval = setInterval(() => {
    //   this.setState({
    //       time: this.state.time-1
    //     })
    //   }, 1000);
  }

  componentDidUpdate(){
    if(this.state.time == "0"){
      clearInterval(interval)
    }else{
      console.log(this.state.time);
    }
  }

  componentWillUnmount(){
    console.log("componentWillUnmount + Amirho3ein");
  }

  Start=()=>{
    interval = setInterval(() => {
      this.setState({
          time: this.state.time-1
        })
      }, 1000);
  }
  Stop=()=>{
    clearInterval(interval)
  }

  render() {
   console.log("render");
    return ( 
      <>
        <h2 className = 'timer' >
          Time it is {this.state.time} 
        </h2>
        <div>
          <button className='btnChange' onClick={this.props.handleSetTitle}>
            Change Text
          </button>
          <button className='btnStart' onClick={this.Start}>
            Start
          </button>
          <button className='btnStop' onClick={this.Stop}>
            Stop
          </button>
        </div>
      </>
    )
  }
}
export default Timer;