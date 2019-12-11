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
    const { search = [], action = [], table, detail } = this.props.config;
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

  getTableData = ({ searchValue = {}, page = 1 } = {}) => {
    const { tableConfig: { fetchFn } } = this.props;
    if (!fetchFn) return;
    const { tableLoading } = this.state;
    if (!tableLoading) { // 减少页面更新
      this.setState({
        tableLoading: true
      });
    }
    fetchFn({ page, ...searchValue }).then(({ data, total }) => {
      this.setState({
        tableDataList: data,
        total,
        tableLoading: false,
        currentPage: page, // 放在此处更新 page ，减少页面渲染次数
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
    const searchValue = this.form.getSearchValue();
    const { currentPage: page } = this.state;
    this.getTableData({ page, searchValue })
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
    const searchValue = this.form.getSearchValue();
    this.getTableData({
      searchValue,
      page
    })
  }

  delete = (data) => {
    const { tableConfig: { deleteRecordFn } } = this.props;
    const { confirmTitleField } = data;
    const me = this;
    confirm({
      title: `确认删除 ${confirmTitleField ? data[confirmTitleField] : ""}`,
      content: "",
      onOk () {
        deleteRecordFn(data.id).then(() => {
          message.success("删除成功");
          const searchValue = me.form.getSearchValue();
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
    return (
      <>
        {
          this.searchConfig.length > 0 && <Search wrappedComponentRef={form => this.form = form} emit={this.handleEmit} config={this.searchConfig} />
        }
        {
          this.actionConfig.length > 0 && <Action emit={this.handleEmit} config={this.actionConfig} />
        }

        {
          this.tableConfig && <ProviderState value={this.state}>
            <TableComponent emit={this.handleEmit} config={this.tableConfig} />
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
  config: PropTypes.object,
  tableConfig: PropTypes.object,
  onSearch: PropTypes.func,
  onReset: PropTypes.func,
  actionEmit: PropTypes.func,
}
ConfigComponent.defaultProps = {
  config: {},
  tableConfig: {},
  onSearch: noop,
  onReset: noop,
  actionEmit: noop
}



export default ConfigComponent





/**
 * 向上传递：
 * 编辑
 * 新增
 */
