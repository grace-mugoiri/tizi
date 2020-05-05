import React from 'react';

const Dashboard = props => {
	return (
		<div>
			<h2>Dash</h2>
			<h2>Status: {props.loggedInStatus}</h2>
		</div>
	);
}

export default Dashboard;
