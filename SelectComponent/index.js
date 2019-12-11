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
    const { onChange, value, placeholder } = this.props; // 有默认传来的 chang事件，和 value值
    const { optionList } = this.state;
    return (
      <Select value={value} placeholder={placeholder} onChange={onChange}>
        {
          optionList.map(({ value, title }) => <Option key={value}>{title}</Option>)
        }
      </Select>
    )
  }
}


export default SelectComponent;