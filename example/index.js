import React from 'react';
import { render } from 'react-dom';
import { ConfigComponent, RenderComponent } from '../src';
import { config, tableConfig } from "./config";
import { Table, Button } from 'antd';
import "antd/dist/antd.css";


class App extends RenderComponent {
  test = () => {
    this.updateTableData(
      [{
        name: "小王",
        sex: "男",
        id: "1",
        na6me: "9",
        na7me: "value"
      },
      {
        name: "小张",
        sex: "女",
        id: "2",
        na6me: "8",
        na7me: 10
      }]
    )
  }

  tableReturn = (data) => {
  }

  export = () => {
    console.log("export")
    console.log(this.getSearchValue())
  }

  onReset = () => {
    console.log("23")
    this.updateConfig(1)
  }

  rowSelectionChange = (selectedRowKeys, selectedRows) => {
    console.log(selectedRowKeys, selectedRows)
  }

  discountChange = (e) => {
    let value = e.target.value;
    this.updateTableData(
      [{
        name: "小王",
        sex: "男",
        id: "1",
        na6me: "9",
        na7me: value
      },
      {
        name: "小张",
        sex: "女",
        id: "2",
        na6me: "8",
        na7me: 10
      }]
    )
  }

  render () {
    return (
      <>
        <Button onClick={this.test}>按钮</Button>
        <ConfigComponent
          config={config}
          ref={r => this.tableComponent = r}
          actionEmit={this.actionEmit}
          tableConfig={tableConfig}
          tableColumnsProps={{ id: "2" }}
          searchFormConfig={{
            foldtThreshold: 20
          }}
          tableReturn={this.tableReturn}
          onReset={this.onReset}
        />
      </>
    )
  }
}


render(<App />, document.getElementById("root"));