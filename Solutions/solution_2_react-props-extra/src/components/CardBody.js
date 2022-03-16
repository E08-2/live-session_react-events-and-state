import React from "react";
import CardTitle from "./CardTitle";
import CardText from "./CardText";
import CardButton from "./CardButton";

const CardBody = props => {
    return (
        <div className="card-body">
            <CardTitle propTitle={props.propTitle} />
            <CardText propDescription={props.propDescription} />
            <CardButton propButton={props.propButton} />
        </div>
    )
}

export default CardBody;