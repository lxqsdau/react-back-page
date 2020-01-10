import React from 'react';
import { render } from 'react-dom';
import { ConfigComponent, RenderComponent } from '../src';
import { config, tableConfig } from "./config";
import { Table } from 'antd';
import "antd/dist/antd.css";

const columns = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
  },
  // {
  //   title: 'Column 1',
  //   dataIndex: 'address',
  //   key: '1',
  //   width: 150,
  // },
  // {
  //   title: 'Column 2',
  //   dataIndex: 'address',
  //   key: '2',
  //   width: 150,
  // },
  // {
  //   title: 'Column 3',
  //   dataIndex: 'address',
  //   key: '3',
  //   width: 150,
  // },
  // {
  //   title: 'Column 4',
  //   dataIndex: 'address',
  //   key: '4',
  //   width: 150,
  // },
  // {
  //   title: 'Column 5',
  //   dataIndex: 'address',
  //   key: '5',
  //   width: 150,
  // },
  {
    title: 'Column 6',
    dataIndex: 'address',
    key: '6',
    width: 150,
  },
  {
    title: 'Column 7',
    dataIndex: 'address',
    key: '7',
    width: 150,
  },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>action</a>,
  },
];


const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}
class App extends RenderComponent {
  onSearch = data => {
    console.log(data)
  }
  render () {
    return (
      <>
        <ConfigComponent
          config={config}
          ref={r => this.tableComponent = r}
          actionEmit={this.actionEmit}
          tableConfig={tableConfig}
          tableColumnsProps={{ id: "2" }}
          onSearch={this.onSearch}
        />
       <Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 300 }} />,
      </>
    )
  }
}


render(<App />, document.getElementById("root"));