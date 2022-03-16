import React from "react";

const CardBody = props => {
    return (
        <div className="card-body">
            <h5 className="card-title">{props.cardTitle}</h5>
            <p className="card-text">{props.cardDescription}</p>
            <a href={props.button.url} className="btn btn-primary">{props.button.label}</a>
        </div>
    )
}

export default CardBody;