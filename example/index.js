import React from 'react';
import { render } from 'react-dom';
import { ConfigComponent, RenderComponent }from '../src';
import { config } from "./config";
import "antd/dist/antd.css";

class App extends RenderComponent {
  onSearch = v => {
    console.log(v)
  }
  onReset = () => {
    console.log("onReset")
  }
  render () {
    return (
      <ConfigComponent config={config} ref={r => this.tableComponent = r} actionEmit={this.actionEmit} />
    )
  }
}


render(<App />, document.getElementById("root"));