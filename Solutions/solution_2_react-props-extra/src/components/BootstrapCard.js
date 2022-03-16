import React from "react";
import CardImg from "./CardImg";
import CardBody from "./CardBody";

// Create a functional component
const BootstrapCard = props => {
	return (
		<div className="card m-5" style={ {width: "18rem"} }>
			<CardImg 
				propImage={props.propImage} 	// props.propImage --> the data we received from App.js in the "propsImage" prop!
				propTitle2={props.propTitle}	// ? propTitle Step 2A - pass "Bob Dylan" to the <CardImg /> 
			/>
			<CardBody 
				propTitle={props.propTitle}	   // ? propTitle Step 2B - pass "Bob Dylan" to the <CardBody />
				propDescription={props.propDescription}
				propButton={props.propButton}
			/>
		</div>
	);
}

export default BootstrapCard;