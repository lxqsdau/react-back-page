import React from 'react';
import { render } from 'react-dom';
import { ConfigComponent, RenderComponent } from '../src';
import { config, tableConfig } from "./config";
import { Table, Button } from 'antd';
import "antd/dist/antd.css";


class App extends RenderComponent {
  
  export = () => {
    console.log("export")
    console.log(this.getSearchValue())
  }


  rowSelectionChange = (selectedRowKeys, selectedRows) => {
    console.log(selectedRowKeys, selectedRows)
  }

  handleInputChange = (e, record) => {
    console.log(e.target.value)
    console.log(record)
  }

  render() {
    return (
      <>
        <ConfigComponent
          config={config}
          ref={r => this.tableComponent = r}
          actionEmit={this.actionEmit}
          tableConfig={tableConfig}
          searchFormConfig={{
            foldtThreshold: 20
          }}
        />
      </>
    )
  }
}


render(<App />, document.getElementById("root"));