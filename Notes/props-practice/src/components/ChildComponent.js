import React from "react";
import GrandchildComponent from "./GrandchildComponent";

const ChildComponent = props => {
    console.log("Props", props);
    
    return (
        <div className="childContainer">
            <div>I am the child component, and my name is {props.propChildName}!</div>
            <GrandchildComponent propGrandChildName={props.propGrandChildName} />
        </div>
    )
}

export default ChildComponent;