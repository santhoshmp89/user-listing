import React, {Component, Fragment} from 'react';
import UsersList from '../molecules/users-list';
import './user-list.css';
import SeachInput from '../molecules/search-input'

class UserList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			data: '',
			searchValue: 'Search'
		};
		this.searchOnChange = this.searchOnChange.bind(this);
	}

	searchOnChange(e) {
		//console.log(e.target.value)
		this.setState({
			searchValue: e.target.value
		})
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(res => res.json())
		.then(res => {
			this.setState({
				loaded: true,
				data: res				
			})
		});
	}

	componentDidUpdate() {
		//console.log(this.state.searchValue)
	}

	render() {

		var users = '';
		if(this.state.loaded) {			
			users = this.state.data.map( (ele, index) => {
				return <UsersList value={ele} key={index} />	}
			)
		}
		
		return(

			<Fragment>
				<SeachInput type='type' onChange={this.searchOnChange} value={this.state.searchValue}/>

				<ul>				
					{users}
				</ul>
			</Fragment>
		)
	}
}

export default UserList;