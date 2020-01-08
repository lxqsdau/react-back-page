import React from 'react';
import { render } from 'react-dom';
import { ConfigComponent, RenderComponent } from '../src';
import { config, tableConfig } from "./config";
import "antd/dist/antd.css";

class App extends RenderComponent {
  onSearch = data => {
    console.log(data)
  }
  render () {
    return (
      <ConfigComponent
        config={config}
        ref={r => this.tableComponent = r}
        actionEmit={this.actionEmit}
        tableConfig={tableConfig}
        tableColumnsProps={{ id: "2" }}
        onSearch={this.onSearch}
      />
    )
  }
}


render(<App />, document.getElementById("root"));