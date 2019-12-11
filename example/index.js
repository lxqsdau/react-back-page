import React from 'react';
import { render } from 'react-dom';
import MyComponent from '../src';
import { config } from "./config";
import "antd/dist/antd.css";
import RenderComponent from "../src/RenderComponent"

@RenderComponent
class App extends React.Component {
  onSearch = v => {
    console.log(v)
  }
  onReset = () => {
    console.log("onReset")
  }
  render () {
    return (
      <MyComponent config={config} onSearch={this.onSearch} onReset={this.onReset} actionEmit={this.actionEmit} />
    )
  }
}


render(<App />, document.getElementById("root"));