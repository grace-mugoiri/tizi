import React from 'react';
import './App.css';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <div className="container">
			<div className="header">
				<h2>Gym</h2>
			</div>
			<UserContainer />
    </div>
  );
}

export default App;
