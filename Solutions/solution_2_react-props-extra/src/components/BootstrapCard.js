import React from "react";
import CardImg from "./CardImg";
import CardBody from "./CardBody";

// Create a functional component
const BootstrapCard = props => {
	return (
		<div className="card m-5" style={ {width: "18rem"} }>
			<CardImg image={props.image} />
			<CardBody 
				cardTitle={props.cardTitle}
				cardDescription={props.cardDescription}
				button={props.button}
			/>
		</div>
	);
}

export default BootstrapCard;