import React from "react";

const Profile = ({ props }) => {
	console.log(props.email);
	return <p>Teste Viadao {props.email}</p>;
};

export default Profile;
