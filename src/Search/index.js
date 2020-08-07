import React, { PureComponent } from 'react';
import { Form, Button, Icon } from 'antd';
import "./index.scss";

class Search extends PureComponent {
  state = {
    fold: true, // 折叠
  }
  componentDidMount () {
    document.addEventListener("keydown", this.handleEnterKey);
  }
  componentWillUnmount () {
    document.removeEventListener("keydown", this.handleEnterKey)
  }
  handleEnterKey = (e) => {
    if (e.keyCode === 13) {
      this.search();
    }
  }

  search = (values) => {
    console.log(values, "values")
    const { form, emit } = this.props;
    // emit("search", searchValue)
  }

  getSearchValue = () => {
    const { form } = this.props;
    return form.getFieldsValue();
  }

  reset = () => {
    const { form, emit } = this.props;
    form.resetFields();
    emit("reset")
  }

  foldChange = () => {
    const { fold } = this.state;
    this.setState({
      fold: !fold,
    })
  }

  render () {
    const { form, optionConfig, searchFormConfig: { foldtThreshold }, config, searchBtnConfig, emit } = this.props;
    const { fold } = this.state;
    let showFormItem

    if (fold && config.length > foldtThreshold) {
      showFormItem = config.slice(0, foldtThreshold)
    } else {
      showFormItem = config
    }
    return (
      <div className="react-back-page-search-box">
        <Form className="search-form" layout="inline" name="search-form"  onFinish={this.search}>
          {
            showFormItem.map(({ Component, label, name, defaultValue, ...orther }, i) => <Form.Item
              name={name}
              className="search-item"
              key={i}
              initialValue={defaultValue || undefined}
            >
              <p className="label">{label}</p>
              <Component optionConfig={optionConfig} {...orther} />
            </Form.Item>)
          }
          {
            config.length > foldtThreshold && <Form.Item className="search-item ase">
              <div onClick={this.foldChange} className="fold-box">{fold ? <>
                <span>展开</span>  <Icon type="down" />
              </> : <>
                  <span>收起</span>  <Icon type="up" />
                </>}</div>
            </Form.Item>
          }


          <Form.Item className="search-item ase">
            <div className="btn-item">
              <div className="label-btn">&nbsp;</div>
              <Button htmlType="submit" type="primary">查询</Button>
            </div>
            <div className="btn-item">
              <Button onClick={this.reset}>重置</Button>
            </div>
            {
              searchBtnConfig.map((searchBtnItem, i) => <div key={i} className="btn-item">
                <div className="label-btn">&nbsp;</div>
                <Button onClick={() => emit(searchBtnItem.actionFn)} type="primary">{searchBtnItem.title}</Button>
              </div>)
            }
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Search;
