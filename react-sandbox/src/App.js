import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
    constructor() {
      super();
      this.state = {color: "red"};
    }
    render() {
      return <h2>I am a {this.props.brand} Car!</h2>;
    
    }
  }
  const myelement = <Car brand="Ford" />;
  

export default Car;