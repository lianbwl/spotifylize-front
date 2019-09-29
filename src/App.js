import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import keys from "./keys";

class App extends Component {
	state = {
		response: "default"
	};

	componentDidMount() {}

	btProfile = () => {
		this.getProfile().then(res =>
			// this.setState({ response: res })
			console.log(res)
		);
	};

	getProfile = async () => {
		axios
			.get("http://localhost:5000/api/profile", {
				headers: {
					"Access-Control-Allow-Origin": "*",
					"Content-Type": "application/json"
				}
			})
			.then(function(response) {
				console.log(response);
			})
			.catch(function(error) {
				console.log(error);
			})
			.finally(function() {
				// always executed
			});
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<a href="/api/auth/spotify">Log With Spotify</a>
					<button onClick={this.getProfile}>Get Profile Info</button>
					{this.state.response}
				</header>
			</div>
		);
	}
}

export default App;
