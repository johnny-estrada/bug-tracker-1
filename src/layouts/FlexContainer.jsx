import React from "react";
import './FlexContainer.css'

function FlexContainer(props) {
  return (
    <div className="FlexContainer">
        {props.children}
    </div>
  )
}

export default FlexContainer;
