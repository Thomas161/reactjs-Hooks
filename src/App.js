import React, {
  Component} from 'react';
import './App.css';
import  Counter  from "./Counter";

class App extends Component {
 state ={
   count: 0,
   isOn: false,
   x: null,
   y: null
 }
 componentDidMount(){
   document.title = `You've been clicked ${this.state.count} times`;
   //mousemove listener is an action that is triggered by the window
   window.addEventListener('mousemove',this.handleMouseMove);
 }
 handleMouseMove=(e)=> {
this.setState({
  x: e.pageX,
  y: e.pageY
})
 }
 componentDidUpdate(){
   document.title = `You've been clicked ${this.state.count} times`;
 }
  componentWillUnmount() {

    window.removeEventListener('mousemove', this.handleMouseMove);
  }

 toggleLight =()=> {
   this.setState(prevState=> ({
     isOn: !prevState.isOn
   }))
 }
  render() {
    const {isOn} =this.state;
    return (
      <>

     <h2>Counter Component</h2>
          <Counter />
          <h2>Toggle Light
          </h2>
          <div style={{height: '50px', width: '50px', background: isOn? "orange":"green"}} onClick={this.toggleLight}></div>
<h2>Mouse Position</h2>
<p>X Position : {this.state.x}</p>
      <p>Y Position : {this.state.y}</p>
      </>
    );
  }
}

export default App;
