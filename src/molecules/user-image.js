import React from 'react';
import PropsTypes from 'prop-types';
import './user-image.css'

const UserImage = (props) => {
	return (
		<img src={props.picUrl} alt='' />
	)
}

UserImage.propsTypes = {
	picUrl : PropsTypes.string
}

export default UserImage;