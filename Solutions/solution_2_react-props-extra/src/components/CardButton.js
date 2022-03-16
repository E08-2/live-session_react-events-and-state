import React from "react";

const CardButton = props => {
    return (
        <a href={props.propButton.url} className="btn btn-primary">{props.propButton.label}</a>
    )
}

export default CardButton;