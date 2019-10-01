import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Profile from "./components/Profile";

class App extends Component {
	constructor() {
		super();
		this.state = {
			data: []
		};
	}

	componentDidMount() {}

	handleGetProfile = () => {
		this.getProfile().then(res => {
			this.setState({ data: res.data });
		});
	};

	getProfile = async () => {
		const req = await axios.get("http://localhost:5000/api/profile", {
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Content-Type": "application/json"
			}
		});

		return req;
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<a href="/api/auth/spotify">Log With Spotify</a>
					<button onClick={this.handleGetProfile}>
						Get Profile Info
					</button>
					<Profile props={this.state.data}></Profile>
				</header>
			</div>
		);
	}
}

export default App;
