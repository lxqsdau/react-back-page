const config = {
  search: [
    {
      type: "input",
      props: {
        name: "title",
        label: "搜索",
        placeholder: "请输入标题",
      }
    },
    {
      type: "select",
      props: {
        name: "problem_type_id",
        label: "分类",
        placeholder: "请选择分类名",
        option: [],
      }
    }
  ],
  action: [
    {
      type: "button",
      props: {
        title: "添加咨询",
        actionFn: "emit-add"
      }
    }
  ],
  table: {
    rowKey: "id",
    columns: [
      {
        title: "标题",
        key: "title",
        dataIndex: "title",
      },
      {
        title: "分类",
        key: "typeName",
        dataIndex: "typeName"
      },
      {
        title: "添加时间",
        key: "gmt_create",
        dataIndex: "gmt_create",
        render: text => text.slice(0, 19)
      }
    ],
    actionColumns: [
      {
        title: "编辑",
        key: "tableEdit",
        actionFn: "emit-tableEdit"
      },
      {
        title: "详情",
        key: "tableDetail",
        actionFn: "emit-tableDetail"
      },
      {
        title: "置顶",
        key: "tableTop",
        actionFn: "emit-tableTop",
        showField: "is_top",
        showValue: false,
      },
      {
        title: "取消置顶",
        key: "tableCancelTop",
        actionFn: "emit-tableCancelTop",
        showField: "is_top",
        showValue: true,
      },
      {
        title: "删除",
        key: "delete", // 删除
        confirmTitleField: "title", // 删除确认框，显示title字段
        actionFn: "delete"
      }
    ]
  }
}

export { config };
