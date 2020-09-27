import React from 'react';

class RenderComponent extends React.Component {

  state = {
    isShowModal: false, // 添加和编辑的弹窗
    isEdit: false,
    editData: {},
  }

  actionEmit = (type, ...data) => {
    this[type](...data);
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

  getSearchValue = () => {
    return this.tableComponent.getSearchValue()
  }

  refreshTable = (...args) => {
    this.tableComponent.refreshTable(...args);
  }
  
  refreshCurrentPageTable = () => {
    this.tableComponent.refreshCurrentPageTable();
  }

}

export default RenderComponent;


