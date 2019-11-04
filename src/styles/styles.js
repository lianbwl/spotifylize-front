import styled from "styled-components";

const sizeBase = 10;

export const Grid = styled.div`
	display: flex;
	height: auto;
	flex: ${props => props.flex || "0 1 auto"};
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

	// EXTERNAL CSS TO BE INJECTED;
	${props => props.extStyles};
`;

export const Block = styled.div`
	display: flex;
	flex-direction: ${props => props.direction || "row"};

	// EXTERNAL CSS TO BE INJECTED;
	${props => props.extStyles};
`;

export const Title = styled.h1`
	font-family: ${props => props.font || "Helvetica"};
	font-size: ${props => props.size || sizeBase * 5}px;
	color: ${props => props.theme.colors.coral};

	// EXTERNAL CSS TO BE INJECTED;
	${props => props.extStyles};
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

	// EXTERNAL CSS TO BE INJECTED;
	${props => props.extStyles};
`;

export const List = styled.ul`
	list-style: ${props => props.style || "none"};

	// EXTERNAL CSS TO BE INJECTED;
	${props => props.extStyles};
`;

export const ListItem = styled.li`
	display: list-item;
	margin-bottom: ${props => props.marginBotton || "20px"};
`;

export const Picture = styled.picture`
	line-height: 0;
	border: solid ${props => props.borderWidth || sizeBase * 0.2 + `px`}
		${props => props.theme.colors.coral};
`;
