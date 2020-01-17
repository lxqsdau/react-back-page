import React from 'react';
import { Modal, message } from 'antd';
import { ProviderState } from "./createContext";
import { getComponent } from "./getComponent";
import Search from "./Search";
import Action from "./Action";
import TableComponent from "./TableComponent";
import DetailModal from "./DetailModal";
import PropTypes from 'prop-types';

function noop () { }
const { confirm } = Modal;

class ConfigComponent extends React.Component {
  constructor(props) {
    super(props);

    let resultConfig;
    if (Object.prototype.toString.call(this.props.config) === "[object Function]") {
      resultConfig = this.props.config()
    } else {
      resultConfig = this.props.config;
    }
    this.renderConfig(resultConfig)
  }

  renderConfig = (resultConfig) => {
    const { search = [], action = [], table, detail } = resultConfig;

    this.searchConfig = search.map(({ type, props }) => ({ Component: getComponent(type), ...props }))
    this.actionConfig = action.map(({ type, props }) => ({ Component: getComponent(type), ...props }))
    this.tableConfig = table;
    this.detail = detail
  }

  state = {
    tableLoading: true,
    total: 0,
    currentPage: 1,
    tableDataList: [],

    isShowDetailModal: false,
    detailData: {}
  }

  componentDidMount () {
    this.refreshTable();
  }

  updateConfig = (data) => {
    this.renderConfig(this.props.config(data));
    this.forceUpdate();
  }

  getTableData = ({ searchValue = {}, page = 1 } = {}) => {
    const { tableConfig: { fetchFn } } = this.props;
    if (!fetchFn) return;
    const { tableLoading } = this.state;
    if (!tableLoading) { // 减少页面更新
      this.setState({
        tableLoading: true
      });
    }
    fetchFn({ page, ...searchValue, ...this.props.extraFetchProps }).then(({ data, total }) => {
      this.setState({
        tableDataList: data,
        total,
        tableLoading: false,
        currentPage: page, // 放在此处更新 page ，减少页面渲染次数
      })
      this.props.tableReturn({
        data, 
        total
      })
    });
    // .finally(() => this.setState({ tableLoading: false })); 减少页面更新
  }

  // 重新刷新表格数据。 重置和对外新增用
  // 新增刷新第一页
  refreshTable = () => {
    this.getTableData();
  }

  // 刷新当前页 对外 编辑和删除用
  refreshCurrentPageTable = () => {
    const searchValue = this.getSearchValue()
    const { currentPage: page } = this.state;
    this.getTableData({ page, searchValue })
  }

  getSearchValue = () => {
    let searchValue = {}
    if (this.form) {
      searchValue = this.form.getSearchValue();
    }
    return searchValue
  }



  search = searchValue => {
    this.props.onSearch(searchValue);
    this.getTableData({
      searchValue,
      page: 1
    })
  }

  reset = () => {
    this.refreshTable();
    this.props.onReset()
  }


  tablePageChange = ({ current: page }) => {
    const searchValue = this.getSearchValue()
    this.getTableData({
      searchValue,
      page
    })
  }

  delete = (data) => {
    const { tableConfig: { deleteRecordFn }, extraDeleteProps } = this.props;
    const { confirmTitleField } = data;
    const me = this;
    confirm({
      title: `确认删除 ${confirmTitleField ? data[confirmTitleField] : ""}`,
      content: "",
      onOk () {
        deleteRecordFn({ record: data, extraDeleteProps }).then(() => {
          message.success("删除成功");
          const searchValue = me.getSearchValue()
          // 判断 不是第一页，且 这页只有一个了，请求上一页的数据
          const { currentPage, tableDataList } = me.state;
          const isUpdatePrePageData = currentPage !== 1 && tableDataList.length === 1;
          if (isUpdatePrePageData) {
            me.getTableData({ page: currentPage - 1, searchValue });
          } else {
            me.refreshCurrentPageTable();
          }
        }).catch(message.error)
      },
      onCancel () { },
      okText: "确认",
      cancelText: "取消"
    })
  }

  // 详情
  tableDetail = record => {
    this.setState({
      isShowDetailModal: true,
      detailData: record
    })
  }

  closeDetailModal = () => this.setState({ isShowDetailModal: false })

  // 事件类型， 传递的数据
  handleEmit = (actionFn, data) => {
    if (actionFn.includes("emit")) {
      this.props.actionEmit(actionFn.split("-")[1], data);
    } else {
      this[actionFn](data);
    }
  }

  render () {
    const { isShowDetailModal, detailData } = this.state;
    const { optionConfig, tableColumnsProps, searchFormConfig } = this.props;
    return (
      <>
        {
          this.searchConfig.length > 0 && <Search
            searchFormConfig={searchFormConfig}
            optionConfig={optionConfig}
            wrappedComponentRef={form => this.form = form}
            emit={this.handleEmit}
            config={this.searchConfig}
          />
        }
        {
          this.actionConfig.length > 0 && <Action emit={this.handleEmit} config={this.actionConfig} />
        }

        {
          this.tableConfig && <ProviderState value={this.state}>
            <TableComponent emit={this.handleEmit} config={this.tableConfig} tableColumnsProps={tableColumnsProps} />
          </ProviderState>
        }
        {
          this.detail && <DetailModal visible={isShowDetailModal} onClose={this.closeDetailModal} config={this.detail} detailData={detailData} />
        }
      </>
    )
  }
}

ConfigComponent.propTypes = {
  config: PropTypes.oneOfType([PropTypes.object, PropTypes.func]) ,
  tableConfig: PropTypes.object,
  onSearch: PropTypes.func,
  onReset: PropTypes.func,
  actionEmit: PropTypes.func,
  extraFetchProps: PropTypes.object,
  optionConfig: PropTypes.object,
  extraDeleteProps: PropTypes.object,
  tableColumnsProps: PropTypes.object,
  searchFormConfig: PropTypes.object,
  tableReturn: PropTypes.func
}
ConfigComponent.defaultProps = {
  config: {},
  tableConfig: {},
  onSearch: noop,
  onReset: noop,
  actionEmit: noop,
  extraFetchProps: {}, // 需要额外给表格请求的字段
  optionConfig: {},
  searchFormConfig: { // 搜索表单设置 展开
    foldtThreshold: 3, // 展开阈值
  },
  tableReturn: noop, // 每次table请求完数据，调用此函数返回数据
}



export default ConfigComponent





/**
 * 向上传递：
 * 编辑
 * 新增
 */
