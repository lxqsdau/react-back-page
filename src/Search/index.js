import React from 'react';
import { Form, Button, Icon } from 'antd';
import "./index.scss";

class Search extends React.Component {
  state = {
    fold: true, // 折叠
    config: this.props.config.slice(0, 5)
  }
  search = () => {
    const { form, emit } = this.props;
    const searchValue = form.getFieldsValue();
    emit("search", searchValue)
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
    const { fold, config } = this.state;
    const { searchFormConfig: { foldtThreshold }, config: propsConfig } = this.props;
    if (fold) { // 展开
      this.setState({
        fold: false,
        config: propsConfig
      })
    } else {
      this.setState({
        fold: true,
        config: config.slice(0, foldtThreshold)
      })
    }
  }

  render () {
    const { form, optionConfig, searchFormConfig: { foldtThreshold }, config: propsConfig } = this.props;
    const { getFieldDecorator } = form;
    const { fold, config } = this.state;
    return (
      <div className="search-box">
        <Form className="search-form" layout="inline">
          {
            config.map(({ Component, label, name, ...orther }, i) => <Form.Item className="search-item" key={i}>
              <p className="label">{label}</p>
              {
                getFieldDecorator(name)(<Component optionConfig={optionConfig} {...orther} />)
              }
            </Form.Item>)
          }
          {
           propsConfig.length > foldtThreshold && <Form.Item className="search-item ase">
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
              <Button onClick={this.search} type="primary">查询</Button>
            </div>
            <div className="btn-item">
              <Button onClick={this.reset}>重置</Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Form.create({ name: 'Search' })(Search);
