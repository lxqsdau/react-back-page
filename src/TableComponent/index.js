import React from 'react';
import { Table, Divider, Dropdown, Menu, Icon } from "antd";
import { ConsumerState } from "../createContext";
import "./index.scss";

function noop() {}

// 渲染操作菜单
function getActionEle({ emit, record, title, text, render, index, actionFn, tableColumnsProps, extraConfigField, isDisabled }) {
  let disabled = isDisabled && isDisabled({ text, record, tableColumnsProps });
  return render ? <span className="table-action">{render({ text, record, index, tableColumnsProps, emit })}</span> : <span onClick={() => !disabled && emit(actionFn, { ...record, ...extraConfigField })} className={`table-action ${disabled ? "disabled" : ""}`}>{title}</span>
}

function actionMenu({ arr, record, text, index, tableColumnsProps, emit }) {
  return <Menu className="react-table-page-table-more-action">
    {
      arr.map(({ title, key, render, actionFn, isDisabled, ...extraConfigField }) => <Menu.Item key={key}>{getActionEle({ emit, record, title, index, text, render, actionFn, tableColumnsProps, extraConfigField, isDisabled })}</Menu.Item>)
    }
  </Menu>
}

function TableComponent({ tableColumnsProps, emit,
  config: {
    actionColumns = [],
    actionProps: { max: actionMax = 4, moreText = "更多", ...tableActionProps } = {},
    columns,
    pageSize = 10,
    pagination = true,
    rowSelection = null,
    ...tableProps
  }
}) {
  // isShow 函数 过滤掉不显示action
  let actionColumnsFilter = record => actionColumns.filter(({ isShow = () => true, title }) => isShow({ text: title, record, tableColumnsProps }))

  columns = [
    ...columns.map(item => {
      if (item.render) return { ...item, render: (text, record, index) => item.render({ text, record, index, emit, tableColumnsProps }) }
      return item
    }),

    ...(actionColumns.length > 0 ?
      [{
        title: '操作',
        key: 'action',
        render: (text, record, index) => {
          let calactionColumns = actionColumnsFilter(record);
          let len = calactionColumns.length;
          let normalColumns = calactionColumns.slice(0, actionMax - 1);
          let downColumns = calactionColumns.slice(actionMax - 1);
          return <>
            {
              normalColumns.map(({ title, key, render, actionFn, isDisabled, ...extraConfigField }, i, arr) =>
                <span key={key}>
                  {getActionEle({ emit, record, title, text, index, render, actionFn, tableColumnsProps, isDisabled, extraConfigField })}
                  {arr.length - 1 !== i && <Divider type="vertical" />}
                </span>
              )
            }

            {
              len >= actionMax ? len === actionMax ? <>
                <Divider type="vertical" />
                {
                  calactionColumns.slice(-1).map(({ title, key, render, actionFn, isDisabled, ...extraConfigField }) => <span key={key}>{getActionEle({ emit, record, title, index, text, render, actionFn, tableColumnsProps, isDisabled, extraConfigField })}</span>)
                }
              </> : <Dropdown overlay={actionMenu({ arr: downColumns, record, text, tableColumnsProps, emit, index })}>
                  <span className="table-action">
                    <Divider type="vertical" />
                    <span>{moreText}</span>
                    <Icon type="down" />
                  </span>
                </Dropdown> : ""
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
            className="react-back-page-table"
            onChange={info => emit("tablePageChange", info)}
            columns={columns}
            {...tableProps}
            pagination={pagination ? {
              total: value.total,
              pageSize,
              current: value.currentPage,
              showTotal: total => `共${total}条`
            } : false}
            dataSource={value.tableDataList}
            loading={value.tableLoading}
            rowSelection={rowSelection ? {
              ...rowSelection,
              onChange: (...args) => rowSelection.onChange ? emit(rowSelection.onChange, ...args) : noop,
              onSelect: (...args) => rowSelection.onSelect ? emit(rowSelection.onSelect, ...args) : noop,
              onSelectInvert: (...args) => rowSelection.onSelectInvert ? emit(rowSelection.onSelectInvert, ...args) : noop,
            } : null}
          >
          </Table>
      }
    </ConsumerState>
  )
}

export default TableComponent;