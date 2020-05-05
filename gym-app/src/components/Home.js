import React, { Component } from 'react';
import SignUp from './registration/SignUp';
import Login from './registration/Login';
import axios from 'axios';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
	}

	handleSuccessfulAuth(data) {
		this.props.handleLogin(data);
		this.props.history.push('/dashboard');
	}

	handleLogoutClick() {
		axios
			.delete("http://localhost:3001/logout", { withCredentials: true })
			.then(response => {
				this.props.handleLogout();
			})
			.catch(error => {
				console.log("logout error", error);
			})
	}
	render() {
		return (
			<div>
				<h2>Home</h2>
				<h2>Status: {this.props.loggedInStatus}</h2>
				<button onClick={() => this.handleLogoutClick()}>Logout</button>
				<SignUp handleSuccessfulAuth={this.handleSuccessfulAuth} />
				<Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
			</div>
		)
	}
}
