import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css";
import Hello from './Hello';
import Timer from './Timer';
class App extends React.Component {
  constructor(){
    super();
    this.state={
      title:"پر قدرت ادامه میدم: ) قراره یه فرانت کار خفن بشم: ) قول میدم به خودم"
    }
    // this.handleSetTitle=this.handleSetTitle.bind(this)
  }
  handleSetTitle=()=>{
    this.setState({
      title:"Amirho3einAmini"
    })
  }

  // handleSetTitle(){
  //   this.setState({
  //     title:"Amirho3einAmini"
  //   })
  // }

  render() {
    return ( 
    <div className = 'main' >
      <Hello title={this.state.title} />
      <Timer handleSetTitle={this.handleSetTitle} />
    </div>
    )
  }
}
export default App;