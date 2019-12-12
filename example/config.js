import moment from "moment";

const config = {
  table: {
    rowKey: "id",
    columns: [
      {
        title: "文件名",
        key: "file_name",
        dataIndex: "file_name",
      },
      {
        title: "添加时间",
        key: "gmt_create",
        dataIndex: "gmt_create",
        render: text => moment(text).format("YYYY-MM-DD HH:mm:ss")
      }
    ],
    actionColumns: [
      {
        title: "复制url",
        key: "tableCopy",
        actionFn: "emit-tableCopy"
      }
    ]
  }
}

export { config, }