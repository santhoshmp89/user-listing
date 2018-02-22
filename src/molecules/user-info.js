import React from 'react';
//	import PropsTypes from 'prop-types';
import './user-info.css';

const UserInfo = (props) => {
	//console.log(props)
	return(
				
		<div className="user-left">
			<h5>Name: {props.value.name}</h5>
			<p>Email: {props.value.email}</p>
			<p>Address: </p>
			<address>
				{props.value.address.street} <br />
				{props.value.address.suite} <br />
				{props.value.address.city} <br /> 
				{props.value.address.zipcode} <br /> 
			</address>
		</div>
	)
}

export default UserInfo;