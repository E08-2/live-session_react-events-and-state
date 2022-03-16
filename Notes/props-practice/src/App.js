import React from "react";
import ChildComponent from "./components/ChildComponent";
import "./App.css";

const name1 = "David";
const name2 = "Sarah";
const name3 = "Englebert";

const grandchildName1 = "Grandchild 1";
const grandchildName2 = "Grandchild 2";
const grandchildName3 = "Grandchild 3";

const App = () => {
    return (
        <div>
            <ChildComponent
                propChildName={name1}
                propGrandChildName={grandchildName1}
            />
            <ChildComponent
                propChildName={name2}
                propGrandChildName={grandchildName2}
            />
            <ChildComponent
                propChildName={name3}
                propGrandChildName={grandchildName3}
            />
        </div>
    )
}

export default App;