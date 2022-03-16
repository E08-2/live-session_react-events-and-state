import React from "react";

const CardImg = props => {
    return (
        <img className="card-img-top" src={ props.propImage } alt={`${props.propTitle2} singing`} />
    );
}

export default CardImg;