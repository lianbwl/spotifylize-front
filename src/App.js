import React, { Component } from "react";
import "./App.css";

class App extends Component {
	state = {
		response: "default"
	};

	componentDidMount() {
		// this.callApi().then(res => this.setState({ response: res.express }));
	}

	btProfile = () => {
		this.getProfile().then(res =>
			// this.setState({ response: res })
			console.log(res)
		);
	};

	getProfile = async () => {
		const response = await fetch("http://localhost:5000/api/profile");
		const body = response.json();
		console.log(body);

		return body;
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<a href="/api/auth/spotify">Log With Spotify</a>
					<button onClick={this.btProfile}>Log With Spotify</button>
					{this.state.response}
				</header>
			</div>
		);
	}
}

export default App;
