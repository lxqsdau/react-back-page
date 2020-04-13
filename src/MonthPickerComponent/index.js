import React from 'react';
import { DatePicker } from 'antd';
const { MonthPicker } = DatePicker;

class MonthPickerComponent extends React.Component {
  render () {
    return (
      <MonthPicker className="back-page-search-date-picker" {...this.props}  />
    )
  }
}

export default MonthPickerComponent