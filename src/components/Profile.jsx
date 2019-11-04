import React from "react";
import { Grid, List, ListItem, Picture } from "../styles/styles";

const Profile = ({ props }) => {
	console.log(props);
	return (
		<Grid>
			{props.images ? (
				<Picture borderWidth="10px">
					<source src={props.images[0].url} type="image" />
					<img src={props.images[0].url} alt="Profile" />
				</Picture>
			) : (
				""
			)}
			<List>
				<ListItem>Loged as: {props.display_name}</ListItem>
				<ListItem>Email: {props.email}</ListItem>
			</List>
		</Grid>
	);
};

export default Profile;
