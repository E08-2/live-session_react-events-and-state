import React from "react";
import "./App.css";

const App = () => {
    const printHello = event => {
        console.log("Hello world");
        console.log("Event object:", event);
    }

    return (
        <div className="app_container">
            <button onClick={printHello}>Click me!</button>
            <button onClick={printHello}>Click me!</button>
            <button onClick={printHello}>Click me!</button>
            <button onClick={printHello}>Click me!</button>
            <button onClick={printHello}>Click me!</button>
        </div>
    )
}

export default App;