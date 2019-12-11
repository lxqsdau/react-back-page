import { Button } from "antd";
import SelectComponent from "./SelectComponent";
import InputComponent from "./InputComponent";

function getComponent (conponentStr) {
  switch (conponentStr) {
    case "input":
      return InputComponent;
    case "select":
      return SelectComponent;
    case "button":
      return Button;
  }
}

export { getComponent }