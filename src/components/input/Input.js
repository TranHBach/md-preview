import { useContext } from "react";
import Context from "../store/Context";
import "./Input.module.css";
const Input = () => {
  const contextValue = useContext(Context);
  const valueChangedHandler = (event) => {
    contextValue.setValue(event.target.value);
  };
  return (
    <textarea
      id="editor"
      onChange={valueChangedHandler}
      value={contextValue.value}
      className="col-6"
    ></textarea>
  );
};

export default Input;
