import React from "react";

const CardImg = props => {
    return (
        <img className="card-img-top" src={ props.image } alt={`${props.cardTitle} singing`} />
    );
}

export default CardImg;