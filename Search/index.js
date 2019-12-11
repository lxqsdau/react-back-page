import React from 'react';
import { Form, Button } from 'antd';
import "./index.scss";

class Search extends React.Component {

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

  render () {
    const { form, config } = this.props;
    const { getFieldDecorator } = form;
    return (
      <div className="search-box">
        <Form layout="inline">
          {
            config.map(({ Component, label, name, ...orther }, i) => <Form.Item className="search-item" key={i}>
              <p className="label">{label}</p>
              {
                getFieldDecorator(name)(<Component {...orther} />)
              }
            </Form.Item>)
          }
        </Form>

        <div className="search-item">
          <p className="label">&nbsp;</p>
          <Button onClick={this.search} type="primary">查询</Button>
        </div>
        <div className="search-item">
          <p className="label">&nbsp;</p>
          <Button onClick={this.reset}>重置</Button>
        </div>
      </div>
    )
  }
}

export default Form.create({ name: 'Search' })(Search);
