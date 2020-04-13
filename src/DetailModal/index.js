import React from 'react';
import { Drawer, Table } from 'antd';
import "./index.scss";

// detailData record
function getValueComponent ({ detailData, type, field, render, ...other }) {
  switch (type) {
    case "text":
      return <span className="detail-value">{render ? render({ text: detailData[field], record: detailData }) : detailData[field]}</span>
    case "img":
      return <span><img style={{ maxWidth: "100%" }} src={detailData[field]} alt="" /></span>
    case "table":
      return render ? render({ text: detailData[field], record: detailData }) : <Table dataSource={detailData[field]} {...other} />
  }
}

function DetailModal ({ visible, onClose, detailData, config: { list = [], title = "详情", width = 600 } }) {
  return (
    <Drawer
      title={title}
      visible={visible}
      onClose={onClose}
      width={width}
    >
      {
        list.filter(({ isShow = () => true, field }) => isShow({ text: detailData[field], record: detailData }))
          .map(({ label, field, type, render, labelRender, itemRender, ...other }, i) => itemRender ? <div key={i}>{itemRender({ text: detailData[field], record: detailData })}</div> : <div key={label + field} className="react-back-page-detail-item">
            {labelRender ? labelRender({ text: detailData[field], record: detailData }) : <span className="detail-label">{label}</span>}
            {getValueComponent({ detailData, type, field, render, ...other })}
          </div>)
      }
    </Drawer>
  )
}

export default DetailModal;