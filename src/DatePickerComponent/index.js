import React from 'react';
import { DatePicker } from 'antd';

class DatePickerComponent extends React.Component {
  render () {
    return (
      <DatePicker {...this.props}  />
    )
  }
}

export default DatePickerComponent