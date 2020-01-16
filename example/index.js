import React from 'react';
import { render } from 'react-dom';
import { ConfigComponent, RenderComponent } from '../src';
import { config, tableConfig } from "./config";
import { Table } from 'antd';
import "antd/dist/antd.css";


class App extends RenderComponent {
 
  render () {
    return (
      <>
        <ConfigComponent
          config={config}
          ref={r => this.tableComponent = r}
          actionEmit={this.actionEmit}
          tableConfig={tableConfig}
          tableColumnsProps={{ id: "2" }}
        />
      </>
    )
  }
}


render(<App />, document.getElementById("root"));