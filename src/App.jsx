import React, { Component } from "react";
import axios from "axios";
import Profile from "./components/Profile";

import { Grid, Button, Wrapper, Title, SelectBox } from "./styles/styles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.js";

import { createGlobalStyle } from "styled-components";
import "./styles/reset.css";

const GlobalStyle = createGlobalStyle`
	body {
		background: ${props => props.theme.colors.forest};
		color: ${props => props.theme.colors.coral};
	}
`;

const externalCssMainGrid = {
	paddingTop: "100px",
	marginBottom: "100px"
};

const externalCssInnerGrid = {
	marginBottom: "40px"
};

const SelectField = ({ options, evtChange }) => {
	return (
		<SelectBox onChange={e => evtChange(e.target.value)}>
			{options.map((i, index) => {
				return (
					<option key={index} value={i.value}>
						{i.name}
					</option>
				);
			})}
		</SelectBox>
	);
};

class App extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
			playlists: [],
			tracks: [],
			options: [
				{ name: "Spotify", value: 1 },
				{ name: "Deezer", value: 2 }
			]
		};
	}

	componentDidMount() {}

	handleGetProfile = () => {
		this.getProfile().then(res => {
			this.setState({ data: res.data });
		});
	};

	handlePlaylists = () => {
		this.getPlaylists().then(res => {
			this.setState({ playlists: res.data });
		});
	};

	handleTracks = id => {
		this.getTracks(id).then(res => {
			this.setState({ tracks: res.data });
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

	getPlaylists = async () => {
		const req = await axios.get("http://localhost:5000/api/playlists", {
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Content-Type": "application/json"
			}
		});

		return req;
	};

	getTracks = async id => {
		const req = await axios.get(
			"http://localhost:5000/api/playlist/" + id,
			{
				headers: {
					"Access-Control-Allow-Origin": "*",
					"Content-Type": "application/json"
				}
			}
		);

		return req;
	};

	selectChange = val => {
		console.log(val);
	};

	render() {
		return (
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Wrapper>
					<Grid
						extStyles={externalCssMainGrid}
						alignX="center"
						alignY="center"
						direction="column"
						flex="1 1 40%">
						<Title>Spotifylize</Title>
						<Grid
							gap="20px"
							extStyles={externalCssInnerGrid}
							width="40%">
							<SelectField
								options={this.state.options}
								evtChange={this.selectChange}></SelectField>

							<SelectField
								options={this.state.options}
								evtChange={this.selectChange}></SelectField>
						</Grid>
						<Grid gap="20px">
							<Button as="a" href="/api/auth/spotify">
								Login
							</Button>
							<Button onClick={this.handlePlaylists}>
								Get Playlists
							</Button>
							<Button onClick={this.handleGetProfile}>
								Get Profile Info
							</Button>
						</Grid>
					</Grid>
					<Grid direction="row" alignX="center" alignY="center">
						<Grid flex="0 1 40%">
							<Profile
								profile={this.state.data}
								playlists={this.state.playlists}
								itemClick={this.handleTracks}></Profile>
						</Grid>
					</Grid>
				</Wrapper>
			</ThemeProvider>
		);
	}
}

export default App;
