import React, { Component } from "react";
import axios from "axios";
import Profile from "./components/Profile";

import { Grid, Button, Wrapper, Title, Block } from "./styles/styles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.js";

import { createGlobalStyle } from "styled-components";
import "./styles/reset.css";

const GlobalStyle = createGlobalStyle`
	body {
		background: ${props => props.theme.colors.forest};
	}
`;

class App extends Component {
	constructor() {
		super();
		this.state = {
			data: []
		};
		this.externalCss = {
			paddingTop: "100px",
			marginBottom: "100px"
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
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Wrapper>
					<Grid
						extStyles={this.externalCss}
						gap="20px"
						alignX="center"
						alignY="center"
						direction="column"
					>
						<Title>Spotifylize</Title>
						<Block>
							<Button as="a" href="/api/auth/spotify">
								Log With Spotify
							</Button>
							<Button onClick={this.handleGetProfile}>
								Get Profile Info
							</Button>
						</Block>
					</Grid>
					<Profile props={this.state.data}></Profile>
				</Wrapper>
			</ThemeProvider>
		);
	}
}

export default App;
