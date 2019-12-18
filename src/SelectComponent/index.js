import React from 'react';
import { Select } from 'antd';
const { Option } = Select;

class SelectComponent extends React.Component {
  state = {
    optionList: this.props.option || []
  }
  componentDidMount() {
    const { api } = this.props;
    if (api) {
      api().then(res => this.setState({ optionList: res }))
    }
  }
  render () {
    const { onChange, value, placeholder, optionField, optionConfig } = this.props; // 有默认传来的 chang事件，和 value值
    let { optionList } = this.state;
    if (optionField) {
      optionList = optionConfig[optionField]
    }
    return (
      <Select value={value} placeholder={placeholder} onChange={onChange}>
        {
          optionList.map(({ key, label }) => <Option key={key}>{label}</Option>)
        }
      </Select>
    )
  }
}


export default SelectComponent;