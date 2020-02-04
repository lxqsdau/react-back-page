import React from 'react';
import { Drawer, Table } from 'antd';
import "./index.scss";
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
// detailData record
function getValueComponent ({ detailData, type, field, render, ...other }) {
  switch (type) {
    case "text":
      return <span className="detail-value">{render ? render({ text: detailData[field], record: detailData }) : detailData[field]}</span>
    case "img":
      return <span><img style={{ maxWidth: "100%" }} src={detailData[field]} alt="" /></span>
    case "table":
      return render ? render({ text: detailData[field], record: detailData }) : <Table dataSource={data} {...other} />
  }
}

function DetailModal ({ visible, onClose, detailData, config: { list = [], width = 600 }, title = "详情" }) {
  return (
    <Drawer
      title={title}
      visible={visible}
      onClose={onClose}
      width={width}
    >
      {
        list.map(({ label, field, type, render, ...other }) => <div key={label + field} className="detail-item">
          <span className="detail-lable">{label}</span>
          {getValueComponent({ detailData, type, field, render, ...other })}
        </div>)
      }
    </Drawer>
  )
}

export default DetailModal;