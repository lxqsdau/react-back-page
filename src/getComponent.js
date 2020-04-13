import { Button } from "antd";
import SelectComponent from "./SelectComponent";
import InputComponent from "./InputComponent";
import DatePickerComponent from "./DatePickerComponent";
import RangePickerComponent from "./RangePickerComponent";
import MonthPickerComponent from "./MonthPickerComponent";

function getComponent (conponentStr) {
  switch (conponentStr) {
    case "input":
      return InputComponent;
    case "select":
      return SelectComponent;
    case "button":
      return Button;
    case "datePicker":
      return DatePickerComponent
    case "rangePicker":
      return RangePickerComponent;
    case "monthPicker":
      return MonthPickerComponent;
  }
}

export { getComponent }