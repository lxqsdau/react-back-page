import React from 'react';
import { Input } from 'antd';

class InputComponent extends React.Component {
  render() {
    const { onChange, value, placeholder } = this.props;

    return <Input value={value} onChange={onChange} placeholder={placeholder} />
  }
}

export default InputComponent;
