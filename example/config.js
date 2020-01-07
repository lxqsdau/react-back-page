
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
    {
      type: "input",
      props: {
        name: "name2",
        label: "搜索",
        placeholder: "请输入分类名",
      }
    },
    {
      type: "input",
      props: {
        name: "name3",
        label: "搜索",
        placeholder: "请输入分类名",
      }
    },
    {
      type: "input",
      props: {
        name: "name4",
        label: "搜索",
        placeholder: "请输入分类名",
      }
    },
    // {
    //   type: "input",
    //   props: {
    //     name: "name5",
    //     label: "搜索",
    //     placeholder: "请输入分类名",
    //   }
    // },
    // {
    //   type: "input",
    //   props: {
    //     name: "name6",
    //     label: "搜索",
    //     placeholder: "请输入分类名",
    //   }
    // },
    {
      type: "input",
      props: {
        name: "name6",
        label: "搜索",
        placeholder: "请输入分类名",
      }
    },
    {
      type: "input",
      props: {
        name: "name7",
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
    columns: [
      {
        title: "姓名",
        key: "name",
        dataIndex: "name",
      },
      {
        title: "性别",
        key: "sex",
        dataIndex: "sex",
        render: ({ text, record, tableColumnsProps }) => text + record.id + tableColumnsProps.id
      }
    ],
    actionColumns: [
      {
        title: "编辑",
        key: "tableEdit",
        actionFn: "emit-tableEdit",
        isShow: ({ text, record, tableColumnsProps }) => record.id === tableColumnsProps.id
      },
      {
        title: "删除",
        key: "delete",
        actionFn: "delete",
      }
    ]
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