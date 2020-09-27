import React from 'react';
import { Modal, message } from 'antd';
import { ProviderState } from "./createContext";
import { getComponent } from "./getComponent";
import Search from "./Search";
import Action from "./Action";
import TableComponent from "./TableComponent";
import DetailModal from "./DetailModal";
import PropTypes from 'prop-types';

function noop() { }
const { confirm } = Modal;

class ConfigComponent extends React.Component {

  state = {
    tableLoading: false,
    total: 0,
    currentPage: 1,
    tableDataList: [],

    isShowDetailModal: false,
    detailData: {}
  }

  componentDidMount() {
    this.refreshTable()
  }

  getTableData = ({ page = 1, ...other } = {}) => {
    const searchValue = this.getSearchValue();
    const { tableConfig: { fetchFn } } = this.props;
    if (!fetchFn) return;
    const { tableLoading } = this.state;
    if (!tableLoading) { // 减少页面更新
      this.setState({
        tableLoading: true
      });
    }
    fetchFn({ page, ...searchValue, ...this.props.extraFetchProps, ...other }).then(({ data, total }) => {
      this.setState({
        tableDataList: data,
        total,
        tableLoading: false,
        currentPage: page, // 放在此处更新 page ，减少页面渲染次数
      });
      // 每次table数据返回，调用用户声明的此函数
      this.props.tableReturn({
        data,
        total
      })
    });
    // .finally(() => this.setState({ tableLoading: false })); 减少页面更新
  }

  // 重新刷新表格数据。 重置和对外新增用
  // 新增刷新第一页
  refreshTable = (...args) => {
    this.getTableData(...args);
  }

  // 刷新当前页 对外 编辑和删除用
  refreshCurrentPageTable = () => {
    const { currentPage: page } = this.state;
    this.getTableData({ page })
  }

  getSearchValue = () => {
    let searchValue = {}
    if (this.form) {
      searchValue = this.form.getSearchValue();
    }
    return searchValue
  }

  search = searchValue => {
    this.props.onSearch(searchValue); // 执行用户调用的 onSearch 事件
    this.getTableData({
      page: 1
    })
  }

  reset = () => {
    const { onReset } = this.props;
    if (onReset) {
      onReset();
    } else {
      this.refreshTable();
    }
  }


  tablePageChange = ({ current: page }) => {
    this.getTableData({
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
      onOk() {
        deleteRecordFn({ record: data, extraDeleteProps }).then(() => {
          message.success("删除成功");
          // 判断 不是第一页，且 这页只有一个了，请求上一页的数据
          const { currentPage, tableDataList } = me.state;
          const isUpdatePrePageData = currentPage !== 1 && tableDataList.length === 1;
          if (isUpdatePrePageData) {
            me.getTableData({ page: currentPage - 1 });
          } else {
            me.refreshCurrentPageTable();
          }
        }).catch(message.error)
      },
      onCancel() { },
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
  handleEmit = (actionFn, ...data) => {
    if (actionFn.includes("emit")) {
      this.props.actionEmit(actionFn.split("-")[1], ...data);
    } else {
      this[actionFn](...data);
    }
  }

  render() {
    const { isShowDetailModal, detailData } = this.state;
    const { optionConfig, tableColumnsProps, searchFormConfig } = this.props;

    const { search = [], searchBtn = [], action = [], table, detail } = this.props.config;
    const searchConfig = search.map(({ type, props }) => ({ Component: getComponent(type), ...props }))
    const searchBtnConfig = searchBtn.map(({ type, props }) => ({ Component: getComponent(type), ...props }))
    const actionConfig = action.map(({ type, props }) => ({ Component: getComponent(type), ...props }))
    const tableConfig = table
    const detailConfig = detail

    return (
      <>
        {
          searchConfig.length > 0 && <Search
            searchFormConfig={searchFormConfig}
            optionConfig={optionConfig}
            wrappedComponentRef={form => this.form = form}
            emit={this.handleEmit}
            config={searchConfig}
            searchBtnConfig={searchBtnConfig}
          />
        }
        {
          actionConfig.length > 0 && <Action emit={this.handleEmit} config={actionConfig} />
        }

        {
          tableConfig && <ProviderState value={this.state}>
            <TableComponent emit={this.handleEmit} config={tableConfig} tableColumnsProps={tableColumnsProps} />
          </ProviderState>
        }
        {
          detailConfig && <DetailModal visible={isShowDetailModal} onClose={this.closeDetailModal} config={detailConfig} detailData={detailData} />
        }
      </>
    )
  }
}

ConfigComponent.propTypes = {
  config: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
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
  // onReset: noop,
  actionEmit: noop,
  extraFetchProps: {}, // 需要额外给表格请求的字段
  optionConfig: {}, // 获取option list数据 拿配置的optionField作为属性 optionConfig:{[optionField]: []}
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
