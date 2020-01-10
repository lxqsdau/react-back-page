import React from 'react';
import { Table, Divider, Dropdown, Menu, Icon } from "antd";
import { ConsumerState } from "../createContext";
import "./index.scss";

function getActionEle ({ emit, record, title, text, render, actionFn, tableColumnsProps, extraConfigField }) {
  return <span onClick={() => emit(actionFn, { ...record, ...extraConfigField })} className="table-action">{render ? render({ text, record, tableColumnsProps }) : title}</span>
}

function actionMenu ({ arr, record, text, tableColumnsProps, emit }) {
  return <Menu>
    {
      arr.map(({ title, key, render, actionFn, ...extraConfigField }) => <Menu.Item key={key}>{getActionEle({ emit, record, title, text, render, actionFn, tableColumnsProps, extraConfigField })}</Menu.Item>)
    }
  </Menu>
}

function TableComponent ({ tableColumnsProps, emit, config: { actionColumns = [], actionProps: { max: actionMax = 4, moreText = "更多", ...tableActionProps } = {}, columns, pageSize = 10, ...tableProps } }) {

  let actionColumnsFilter = record => actionColumns.filter(({ isShow = () => true, title }) => isShow({ text: title, record, tableColumnsProps }))
  columns = [
    ...columns.map(item => {
      if (item.render) return { ...item, render: (text, record) => item.render({ text, record, emit, tableColumnsProps }) }
      return item
    }),

    ...(actionColumns.length > 0 ?
      [{
        title: '操作',
        key: 'action',
        render: (text, record) => {
          let calactionColumns = actionColumnsFilter(record);
          let len = calactionColumns.length;
          let normalColumns = calactionColumns.slice(0, actionMax - 1);
          let downColumns = calactionColumns.slice(actionMax - 1);
          return <>
            {
              normalColumns.map(({ title, key, render, actionFn, ...extraConfigField }, i, arr) =>
                <span key={key}>
                  {getActionEle({ emit, record, title, text, render, actionFn, tableColumnsProps, extraConfigField })}
                  {arr.length - 1 !== i && <Divider type="vertical" />}
                </span>
              )

            }
            {
              len === actionMax ? <>
                <Divider type="vertical" />
                {
                  calactionColumns.slice(-1).map(({ title, key, render, actionFn, ...extraConfigField }) => <span key={key}>{getActionEle({ emit, record, title, text, render, actionFn, tableColumnsProps, extraConfigField })}</span>)
                }
              </> : <Dropdown overlay={actionMenu({ arr: downColumns, record, text, tableColumnsProps, emit })}>
                  <span className="table-action">
                    <Divider type="vertical" />
                    <span>{moreText}</span>
                    <Icon type="down" />
                  </span>
                </Dropdown>
            }
          </>
        },
        ...tableActionProps,
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