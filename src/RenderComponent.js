import React from 'react';

class RenderComponent extends React.Component {

  state = {
    isShowModal: false, // 添加和编辑的弹窗
    isEdit: false,
    editData: {},
  }
  updateConfig = (...args) => {
    // args 数组形式
    return this.tableComponent.updateConfig(...args)
  }
  updateSearchConfig = (search) => {
    return this.tableComponent.updateSearchConfig(search)
  }
  updateActionConfig = (action) => {
    return this.tableComponent.updateActionConfig(action)
  }
  updateTableConfig = (table) => {
    return this.tableComponent.updateTableConfig(table)
  }

  actionEmit = (type, data) => {
    this[type](data);
  }

  add = () => {
    this.setState({
      isShowModal: true,
      isEdit: false
    })
  }

  hideModal = () => {
    this.setState({
      isShowModal: false,
    })
  }

  tableEdit = record => {
    this.setState({
      isShowModal: true,
      isEdit: true,
      editData: record
    })
  }

  updateTable = () => {
    this.hideModal();
    const { isEdit } = this.state;
    if (isEdit) { // 编辑刷新当前页
      this.tableComponent.refreshCurrentPageTable();
    } else { // 新增刷新第一页
      this.tableComponent.refreshTable()
    }
  }

  refreshTable = (...args) => {
    this.tableComponent.refreshTable(...args);
  }
}

export default RenderComponent;


