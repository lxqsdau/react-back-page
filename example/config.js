import { Dropdown, Menu, Icon } from 'antd';
import React from 'react';


const config = function (data) {
  console.log(data, "datadata")
  if (data) {
    return {
      search: [
        {
          type: "input",
          props: {
            name: "name",
            label: "搜索",
            placeholder: "请输入分类名",
          }
        },
      ]
    }
  }
  return {
    search: [
      {
        type: "input",
        props: {
          name: "name",
          label: "搜索",
          placeholder: "请输入分类名",
        }
      },
      // {
      //   type: "select",
      //   props: {
      //     name: "select",
      //     label: "搜索",
      //     placeholder: "请输入分类名",
      //     option: []
      //   }
      // },
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
        type: "input",
        props: {
          name: "name",
          label: "搜索",
          placeholder: "请输入分类名",
        }
      },
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
      scroll: { x: 1500 },
      columns: [
        {
          title: "姓名1",
          key: "name",
          dataIndex: "name",
          width: 100,
          fixed: 'left',
        },
        {
          title: "姓名2",
          key: "name2",
          dataIndex: "name2",
          // width: 100,
        },
        {
          title: "姓名3",
          key: "name3",
          dataIndex: "name3",
          // width: 100,
        },
        {
          title: "姓名4",
          key: "nam4e",
          dataIndex: "nam4e",
          // width: 100,
        },
        {
          title: "姓名5",
          key: "name5",
          dataIndex: "name5",
          // width: 100,
        },
        {
          title: "姓名6",
          key: "nam6e",
          dataIndex: "na6me",
          // width: 100,
        },
        {
          title: "姓名7",
          key: "na7me",
          dataIndex: "na7me",
          // width: 100,
        },
        {
          title: "性别",
          key: "sex",
          dataIndex: "sex",
          // render: ({ text, record, tableColumnsProps }) => text + record.id + tableColumnsProps.id,
          width: 100,
          fixed: "right"
        }
      ],
      actionProps: { // 操作配置
        fixed: "right"
      },
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
      ]
    }
  }
}


function getListApi () {
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