import React, { Component } from "react";
import "./App.css";
import Smurf from './Smurf'
import SmurfForm from './SmurfForm';
import { Route } from "react-router-dom"
import Navigation from './Navigation'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Route path="/" component={Navigation} />
        <Route exact path="/" component={Smurf}/>
        <Route path="/createsmurf" component={SmurfForm}/>
      </div>
    );
  }
}

export default App;
