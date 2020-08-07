import { Dropdown, Menu } from 'antd';
import React from 'react';


const config = {
  search: [
    {
      type: "select",
      props: {
        name: "env",
        label: "环境",
        placeholder: "请选择环境",
        defaultValue: "3",
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
    }
  ],
  action: [
    {
      type: "button",
      props: {
        title: "添加分类2",
        actionFn: "emit-add"
      }
    },
    {
      type: "button",
      props: {
        title: "添加分类2",
        actionFn: "emit-add"
      }
    },
    {
      type: "button",
      props: {
        title: "添加分类2",
        actionFn: "emit-add"
      }
    }
  ],
  table: {
    rowKey: "id",
    columns: [
      {
        title: "测试",
        key: "name",
        dataIndex: "name",
        width: 100,
        fixed: 'left',
      },
      {
        title: "姓名6",
        key: "nam6e",
        dataIndex: "na6me",
      },
      {
        title: "姓名7",
        key: "na7me",
        dataIndex: "na7me",
      },
      {
        title: "性别",
        key: "sex",
        dataIndex: "sex",
        width: 100,
      }
    ],
    actionColumns: [
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
        isDisabled: ({ text, record, tableColumnsProps }) => false
      }
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