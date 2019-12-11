import React from 'react';
import { Drawer } from 'antd';

function getValueComponent (detailData, type, field) {
  switch (type) {
    case "text":
      return <span className="detail-value">{detailData[field]}</span>
    case "img":
      return <img src={detailData[field]} alt="" />
  }
}

function DetailModal ({ visible, onClose, detailData, config: { list } }) {
  return (
    <Drawer
      title="详情"
      visible={visible}
      onClose={onClose}
      width={600}
    >
      {
        list.map(({ label, field, type }) => <div key={label + field} className="detail-item">
          <span className="detail-lable">{label}</span>
          {getValueComponent(detailData, type, field)}
        </div>)
      }
    </Drawer>
  )
}

export default DetailModal;