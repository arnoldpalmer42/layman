import React, { Component } from "react";
import "./App.css";
import MainImage from "./components/main_image";
import Example from "./components/tab-bar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainImage />
        <Example />
      </div>
    );
  }
}

export default App;
