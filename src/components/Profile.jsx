import React from "react";

const Profile = ({ props }) => {
	console.log(props.email);
	return <p>Email: {props.email}</p>;
};

export default Profile;
