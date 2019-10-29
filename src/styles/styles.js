import styled from "styled-components";

const sizeBase = 10;

export const Grid = styled.div`
	display: flex;
	height: auto;
	flex-direction: ${props => props.direction || "row"};

	> *:not(:last-child) {
		margin-right: ${props => props.gap || "none"};
	}
	justify-content: ${props => props.alignX || "flex-start"};
	align-items: ${props => props.alignY || "flex-start"};

	// EXTERNAL CSS TO BE INJECTED;
	${props => props.extStyles};
`;

export const Wrapper = styled.section`
	width: ${props => props.width || "90%"};
	height: ${props => props.height || "auto"};
	margin: 0 auto;
	padding: 20px;
	background: ${props => props.theme.colors.forest};
`;

export const Block = styled.div`
	display: flex;
	flex-direction: ${props => props.direction || "row"};
`;

export const Title = styled.h1`
	font-family: ${props => props.font || "Helvetica"};
	font-size: ${props => props.size || sizeBase * 5}px;
	color: ${props => props.theme.colors.coral};
`;

export const Button = styled.button`
	cursor: pointer;
	border: solid 1px ${props => props.theme.colors.coral};
	color: ${props => props.theme.colors.coral};
	padding: 12px;
	background: none;
	flex: ${props => props.flexSize || "0 1 auto"};

	&:hover {
		background: ${props => props.theme.colors.coral};
		color: ${props => props.theme.colors.white};
	}
`;
