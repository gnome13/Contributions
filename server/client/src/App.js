import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";


class App extends Component {
  url = "/api";
  state = { data:''};

  clickHandler = () => {
    console.log("clicked");
    axios
      .get(this.url)
      .then(res => {
        console.log(res.data.res);
        this.setState({ data: res.data.res });
      })
      .catch(err => console.log(err));
    // fetch(this.url)
    //   .then(res => res.json())
    //   .then(data => this.setState({data : data.res}))
    //   .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
      
        <p><b>Kabalot</b> Get Started ! ! !</p>
        <button onClick={this.clickHandler}>Access express server !!!!!</button>
        <p>Got : {this.state.data}</p> 

        <BrowserRouter>
        <Switch>
       
          {/* <Route  component={NotFound}/> */}
        </Switch>        
      </BrowserRouter>
      </div>

    );
  }
}

export default App;
