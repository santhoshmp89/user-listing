import React from 'react';


const SeachInput = (props) => {
	return(
		<input type={props.type} onChange={props.onChange} value={props.value} />
	)
}

export default SeachInput