
const config = {
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
    scroll: { x: 1500, y: 300 },
    columns: [
      {
        title: "姓名1",
        key: "name",
        dataIndex: "name",
        // width: 100,
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
        // width: 100,
        // fixed: "right"
      }
    ],
    actionProps: { // 操作配置
      fixed: "right"
    },
    // actionColumns: [
    //   {
    //     title: "编辑",
    //     key: "tableEdit",
    //     actionFn: "emit-tableEdit",
    //   },
    //   {
    //     title: "删除",
    //     key: "delete",
    //     actionFn: "delete",
    //   },
    //   {
    //     title: "删除2",
    //     key: "delete2",
    //     actionFn: "delete2",
    //   },
    //   {
    //     title: "删除3",
    //     key: "delete3",
    //     actionFn: "delete3",
    //   },
    //   {
    //     title: "删除4",
    //     key: "delete4",
    //     actionFn: "delete4",
    //   }
    // ]
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