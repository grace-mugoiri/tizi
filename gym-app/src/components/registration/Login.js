import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: ""
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
			name
		} = this.state;

		axios.post("http://localhost:3000/sessions", {
			user: {
				name: name
			}
		},
			{ withCredentials: true }
		)
			.then(response => {
				if (response.data.logged_in) {
					this.props.handleSuccessfulAuth(response.data);
				}
			})

			.catch(error => {
				console.log("login error", error);
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

					<button type='submit'>Login</button>
				</form>
			</div>
		)
	}
}


