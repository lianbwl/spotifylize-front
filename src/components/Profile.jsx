import React from "react";
import { Grid, List, ListItem, Picture, Chips } from "../styles/styles";

const Profile = ({ props }) => {
	console.log(props);
	return (
		<div>
			{props.length === 0 || props === "undefined" ? (
				""
			) : (
				<Grid flex="1 1 100%">
					{props.images ? (
						<Picture borderWidth="10px">
							<source src={props.images[0].url} type="image" />
							<img src={props.images[0].url} alt="Profile" />
						</Picture>
					) : (
						""
					)}
					<List width="100%">
						<ListItem marginBotton="30px">
							<Chips>Loged as:</Chips> {props.display_name}
						</ListItem>
						<ListItem>
							<Chips>Email:</Chips> {props.email}
						</ListItem>
					</List>
				</Grid>
			)}
		</div>
	);
};

export default Profile;
