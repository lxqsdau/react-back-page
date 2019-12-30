
const config = {
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
      }
    ],
    actionColumns: [
      {
        title: "编辑",
        key: "tableEdit",
        actionFn: "emit-tableEdit",
        isShow: ({ text, record, tableColumnsProps  }) => record.id === tableColumnsProps.id
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