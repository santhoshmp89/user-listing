import React from 'react';
import UserImage from '../molecules/user-image';
import UserInfo from '../molecules/user-info';
import './users-list.css'

const UsersList = (props) => {	
		return(
			<li>
				<div className="user-left">
					<UserImage picUrl='http://via.placeholder.com/150x150' />
				</div>

				<UserInfo value={props.value}/>

			</li>
		)
}

export default UsersList;