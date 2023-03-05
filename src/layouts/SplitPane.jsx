import React from "react";
import "./SplitPane.css";

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane__left">{props.left}</div>
      <div className="SplitPane__right">{props.right}</div>
    </div>
  );
}

export default SplitPane;
