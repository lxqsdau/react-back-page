import React from 'react';
import { Input } from 'antd';

class InputComponent extends React.Component {
  render () {
    const { optionConfig, ...other } = this.props;
    return <Input {...other} />
  }
}

export default InputComponent;
