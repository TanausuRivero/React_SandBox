
import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
  constructor(props){
    super(props);
    this.state={brand: "ford",
                color: "red",
                size: "3,30m"}
  }

  changeColor = () => {
    this.setState({brand: "seat"});
    this.setState({color: "blue"});
    this.setState({size: "10m"});
  }

  render() {
     return (
      <div>
        <h1>My car is a {this.state.size} {this.state.brand}</h1>
        <p>
          Its a {this.state.color} car
        </p>
        <button
          type="button"
          onClick={this.changeColor}
        >Change car</button>
      </div>
    );
  }
}

class Garage extends React.Component {
  render() {
    const carinfo = {name: "Ford", model: "Mustang"};
    return (
      <div>
      <h1>Who lives in my garage?</h1>
      <Car name={this.props.name} model={this.props.model} />
      </div>
    );
  }
}
const myelement = <Car param1="Ford" param2="3"/>;

ReactDOM.render(<Car  name="Ford" model="Mustang"/>, document.getElementById('root'));

// ReactDOM.render(<Garage />, document.getElementById('root'));
//ReactDOM.render(<Car />, document.getElementById('inner'));