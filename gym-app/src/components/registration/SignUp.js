import React, { Component } from 'react';
import axios from 'axios';

export default class Registration extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			phoneNumber: "",
			registrationErrors: ""
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit(event) {
		const {
			name,
			phoneNumber
		} = this.state;

		axios.post("http://localhost:3000/registrations", {
			user: {
				name: name,
				phoneNumber: phoneNumber,
			}
		},
			{ withCredentials: true }
		)
			.then(response => {
				if (response.data.status === 'created') {
					this.props.handleSuccessfulAuth(response.data);
				}
			})
			.catch(error => {
				console.log("reg error", error);
			})
		event.preventDefault();
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="name"
						name="name"
						placeholder="name"
						value={this.state.name}
						onChange={this.handleChange} required
					/>
					<input type="phoneNumber"
						name="phoneNumber"
						placeholder="phoneNumber"
						value={this.state.phoneNumber}
						onChange={this.handleChange} required
					/>

					<button type='submit'>Register</button>
				</form>
			</div>
		)
	}
}


