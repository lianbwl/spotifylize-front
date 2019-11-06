import React from "react";
import { Grid, List, ListItem, Picture, Chips } from "../styles/styles";

const Profile = ({ profile, playlists, itemClick }) => {
	return (
		<div>
			{profile.length === 0 || profile === "undefined" ? (
				""
			) : (
				<Grid flex="1 1 100%">
					{profile.images ? (
						<Picture borderWidth="10px">
							<source src={profile.images[0].url} type="image" />
							<img src={profile.images[0].url} alt="Profile" />
						</Picture>
					) : (
						""
					)}
					<List width="100%">
						<ListItem marginBotton="30px">
							<Chips>Loged as:</Chips> {profile.display_name}
						</ListItem>
						<ListItem>
							<Chips>Email:</Chips> {profile.email}
						</ListItem>
					</List>
				</Grid>
			)}

			{!playlists.items || playlists.items.length === 0 ? (
				""
			) : (
				<Grid flex="1 1 100%">
					<List>
						{playlists.items.map(x => {
							return (
								<ListItem key={x.id} marginBotton="30px">
									<Chips onClick={() => itemClick(x.id)}>
										{x.name}
									</Chips>
								</ListItem>
							);
						})}
					</List>
				</Grid>
			)}
		</div>
	);
};

export default Profile;
