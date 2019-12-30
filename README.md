# react-back-page
react后台配置页面

# 使用方法

# props
config
tableConfig
extraFetchProps 列表数据请求需要需要传的额外字段
extraDeleteProps 给删除接口需要传的额外数据
optionConfig 搜索区域option配置 {[optionField]: []}

方法
deleteRecordFn 删除
  参数:
    行数据id 
    行数据({...record, ...操作配置(除去actionFn title key)}) 
    额外数据 this.props.extraDeleteProps {}
fetchFn 请求列表数据
  参数 { page, ...searchValue, ...this.props.extraFetchProps }



表格的config
columns render参数 {text, record, emit, tableColumnsProps}
actionColumns 
  render参数 {text, record, tableColumnsProps}
  isShow参数 {text, record, tableColumnsProps}
