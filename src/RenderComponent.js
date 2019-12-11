/**
 * 反向继承
 * 传递来的组件 = 父类
 * 
 * 返回的是此组件，此组件先渲染，方法先从此组件查找
 * 没有则调用父类方法，父类方法的this指向子类
 */
// const RenderComponent = Component => {
//   return class A extends Component {

//     state = {
//       isShowModal: false, // 添加和编辑的弹窗
//       isEdit: false,
//       editData: {},
//       ...this.state
//     }

//     updateTable = () => {
//       this.hideModal();
//       const { isEdit } = this.state;
//       if (isEdit) { // 编辑刷新当前页
//         this.tableComponent.refreshCurrentPageTable();
//       } else { // 新增刷新第一页
//         this.tableComponent.refreshTable()
//       }
//     }

//     tableEdit = record => {
//       this.setState({
//         isShowModal: true,
//         isEdit: true,
//         editData: record
//       })
//     }

//     hideModal = () => {
//       this.setState({
//         isShowModal: false,
//       })
//     }
  
//     actionEmit = (type, data) => {
//       this[type](data);
//     }
  
//     add = () => {
//       this.setState({
//         isShowModal: true,
//         isEdit: false
//       })
//     }

//     render () {
//       return super.render()
//     }
//   }
// }

const RenderComponent = Component => {
  return class extends Component {
    render () {
      return super.render();
    }
  }
}


export default RenderComponent;
