import styled from "styled-components";

export const Grid = styled.div`
	display: flex;
	flex-direction: ${props => props.direction || "row"};

	> *:not(:last-child) {
		margin-right: ${props => props.gap || "none"};
	}
`;

export const Wrapper = styled.section`
	width: 90%;
	height: 1200px;
	margin: 0 auto;
	padding: 20px;
	background: ${props => props.theme.colors.forest};
`;

export const Button = styled.button`
	cursor: pointer;
	border: solid 1px ${props => props.theme.colors.coral};
	color: ${props => props.theme.colors.coral};
	padding: 12px;
	background: none;

	&:hover {
		background: ${props => props.theme.colors.coral};
		color: ${props => props.theme.colors.white};
	}
`;
