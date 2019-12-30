import React from 'react';
import { Table, Divider } from "antd";
import { ConsumerState } from "../createContext";
import "./index.scss";

function TableComponent ({ tableColumnsProps, emit, config: { actionColumns = [], columns, pageSize = 10, ...tableProps } }) {

  let actionColumnsFilter = record => actionColumns.filter(({ isShow = () => true, title }) => isShow({ text: title, record, tableColumnsProps }))


  columns = [
    ...columns.map(item => item.slot ? {
      ...item,
      render: (text, record) => item.render({ text, record, emit, tableColumnsProps })
    } : item),
    ...(actionColumns.length > 0 ?
      [{
        title: '操作',
        key: 'action',
        render: (text, record) => <>
          {
            actionColumnsFilter(record).map(({ title, key, render, actionFn, ...extraConfigField }, i, arr) =>
              <span key={key}>
                <span onClick={() => emit(actionFn, { ...record, ...extraConfigField })} className="table-action">{render ? render({ text, record, tableColumnsProps }) : title}</span>
                {arr.length - 1 !== i && <Divider type="vertical" />}
              </span>
            )
          }
        </>
      }] : [])
  ]

  return (
    <ConsumerState>
      {
        value =>
          <Table
            onChange={info => emit("tablePageChange", info)}
            columns={columns}
            {...tableProps}
            pagination={{
              total: value.total,
              pageSize,
              current: value.currentPage,
              showTotal: total => `共${total}条`
            }}
            dataSource={value.tableDataList}
            loading={value.tableLoading}
          >
          </Table>
      }
    </ConsumerState>
  )
}

export default TableComponent;