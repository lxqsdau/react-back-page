import { Dropdown, Menu, Icon, Input } from 'antd';
import React from 'react';

const config = {
  search: [
    {
      type: "select",
      props: {
        name: "env",
        label: "环境",
        placeholder: "请选择环境",
        defaultValue: "1",
        option: [{ key: 1, label: "日常" }, { key: 3, label: "线上" }]
      }
    },
    {
      type: "input",
      props: {
        name: "name",
        label: "搜索",
        placeholder: "应用名称",
      }
    },
    {
      type: "select",
      props: {
        name: "select",
        label: "搜索",
        placeholder: "请输入分类名",
        option: []
      }
    },
    {
      type: "datePicker",
      props: {
        name: "name6",
        label: "日期",
        placeholder: "请选择日期",
        showTime: true
      }
    },
    {
      type: "rangePicker",
      props: {
        name: "name7",
        label: "日期",
        placeholder: ["开始时间", "结束时间"],
        showTime: true,
      }
    },
    {
      type: "monthPicker",
      props: {
        name: "name333",
        label: "搜索",
        placeholder: "请输入分类名",
      }
    },
  ],
  searchBtn: [
    {
      type: "button",
      props: {
        title: "导出",
        actionFn: "emit-export"
      }
    }
  ],
  action: [
    {
      type: "button",
      props: {
        title: "添加分类",
        actionFn: "emit-add"
      }
    }
  ],
  table: {
    rowKey: "id",
    rowSelection: {
      type: "checkbox",
      onChange: "emit-rowSelectionChange"
    },
    columns: [
      {
        title: "姓名1",
        key: "name",
        dataIndex: "name",
      },
      {
        title: "性别",
        key: "sex",
        dataIndex: "sex",
        render: ({ text, record, emit }) => <Input onChange={(e) => emit("emit-handleInputChange", e, record)} placeholder="请输入" />
      }
    ],
    actionProps: { // 操作配置
      fixed: "right",
      max: 4,
      moreText: "更多"
    },
    actionColumns: [
      {
        title: "详情",
        key: "tableDetail",
        actionFn: "tableDetail",
      },
      {
        title: "编辑",
        key: "tableEdit",
        actionFn: "emit-tableEdit",
      },
      {
        title: "删除",
        key: "delete",
        actionFn: "delete",
      },
      {
        title: "删除2",
        key: "delete2",
        actionFn: "delete2",
      },
      {
        title: "未处理",
        key: "tableDealAction",
        // actionFn: "emit-tableDealAction",
        render: ({ text, record, tableColumnsProps, emit }) => {
          return <div style={{ display: 'inline-block' }}>
            <Dropdown overlay=
              {
                (
                  <Menu onClick={(value) => { emit("emit-hh") }} >
                    <Menu.Item key={"put-"}>未处理</Menu.Item>
                    <Menu.Item key={"addjust-2"} >处理中</Menu.Item>
                    <Menu.Item key={"addjust-1"} >已处理</Menu.Item>
                  </Menu>
                )
              }
            >
              <a>未处理<Icon type="caret-down" /></a >
            </Dropdown>
          </div>
        }
      }
    ],
    dataSource: [
      {
        id: 1,
        name: "哈哈哈"
      }
    ],
    pagination: false
  },
  detail: {
    type: "detail",
    list: [
      {
        label: "备注",
        field: "name",
        type: "text",
        labelRender: ({ text }) => <span>{text}</span>
      },
      {
        label: "描述",
        field: "intro",
        type: "text",
        itemRender: () => <a>111</a>
      },
    ]
  }
}


function getListApi (data) {
  console.log(data, "data")
  return new Promise((resolve) => {
    resolve({
      data: [{
        name: "小王",
        sex: "男",
        id: "1"
      },
      {
        name: "小张",
        sex: "女",
        id: "2"
      }],
      total: 3
    })
  })
}
const tableConfig = {
  fetchFn: getListApi,
}
export { config, tableConfig }