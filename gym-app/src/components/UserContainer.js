import React, { Component } from 'react';
import axios from 'axios';

class UserContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			users: [],
		}
	}

	componentDidMount() {
		axios.get('http://localhost:8080/api/v1/users')
			.then(response => {
			console.log(response)
			this.setState({ users: response.data })
		})
		.catch(error => console.log(error))
	}
	render() {
		return (
			<div className="userContainer">
				{this.state.users.map(user => {
					return (
						<div className="single-user" key={user.id}>
							<h2>{user.name}</h2>
							<h2>{user.phoneNumber}</h2>
						</div>
					)
				})}
			</div>
		)
	}
}
export default UserContainer;
