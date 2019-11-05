import React, { Component } from "react";
import axios from "axios";
import Profile from "./components/Profile";

import { Grid, Button, Wrapper, Title } from "./styles/styles";
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

const ExternalCss = {
	paddingTop: "100px",
	marginBottom: "100px"
};

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
						extStyles={ExternalCss}
						alignX="center"
						alignY="center"
						direction="column"
						flex="1 1 40%"
					>
						<Title>Spotifylize</Title>
						<Grid gap="20px">
							<Button as="a" href="/api/auth/spotify">
								Log With Spotify
							</Button>
							<Button onClick={this.handleGetProfile}>
								Get Profile Info
							</Button>
						</Grid>
					</Grid>
					<Grid direction="row" alignX="center" alignY="center">
						<Grid flex="0 1 40%">
							<Profile props={this.state.data}></Profile>
						</Grid>
					</Grid>
				</Wrapper>
			</ThemeProvider>
		);
	}
}

export default App;
