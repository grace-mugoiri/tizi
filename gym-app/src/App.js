import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import axios from 'axios';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			loggedInStatus: "Not Logged In",
			user: {}
		}
		this.handleLogin = this.handleLogin.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
	}

	checkLoginStatus() {
		axios
			.get("http://localhost:3000/", { withCredentials: true })
			.then(response => {
				if (
					response.data.logged_in &&
					this.state.loggedInStatus === 'NOT_LOGGED_IN'
				) {
					this.setState({
						loggedInStatus: "LOGGED_IN",
						user: response.data.user
					});
				} else if (
					!response.data.logged_in &
					(this.state.loggedInStatus === "LOGGED_IN")
				) {
					this.setState({
						loggedInStatus: "NOT_LOGGED_IN",
						user: {}
					})
				}
			})
			.catch(error => {
				console.log("check loggin error", error)
			})
	}
	componentDidMount() {
		this.checkLoginStatus();
	}

	handleLogout() {
		this.setState({
			loggedInStatus: "NOT_LOGGED_IN",
			user: {}
		})
	}

	handleLogin(data) {
		this.setState({
			loggedInStatus: "Logged In",
			user: data.user
		})
	}
	render() {
		return (
			<div className="app">
				<BrowserRouter>
					<Switch>
						<Route
							exact
							path={"/"}
							render={props => (
								<Home {...props}
									handleLogin={this.handleLogin}
									handleLogout={this.handleLogout}
									loggedInStatus={this.state.loggedInStatus} />
							)} />
						<Route
							exact
							path={"/dashboard"}
							render={props => (
								<Dashboard {...props} loggedInStatus={this.state.loggedInStatus} />
							)} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}
