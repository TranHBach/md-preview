import { useContext } from "react";
import Context from "../store/Context";
import "./Output.module.css";
import { marked } from "marked";
const Output = () => {
  const contextValue = useContext(Context);
  const HTMLText = marked.parse(contextValue.value);
  //   const result = HTMLText.replace(/\n/g, <br/>)
  return (
    <div
      className="col-6 border"
      id="preview"
      dangerouslySetInnerHTML={{ __html: HTMLText }}
    />
  );
};

export default Output;
