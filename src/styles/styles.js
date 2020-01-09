import styled from "styled-components";

const sizeBase = 10;

export const Grid = styled.div`
	display: flex;
	height: auto;
	width: ${props => props.width || "auto"};
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
	padding: ${sizeBase * 2}px;
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
	padding: ${sizeBase * 1.2}px;
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
	width: ${props => props.width || "auto"};

	// EXTERNAL CSS TO BE INJECTED;
	${props => props.extStyles};
`;

export const ListItem = styled.li`
	display: list-item;
	margin-bottom: ${props => props.marginBotton || "20px"};

	// EXTERNAL CSS TO BE INJECTED;
	${props => props.extStyles};
`;

export const Picture = styled.picture`
	line-height: 0;
	border: solid ${props => props.borderWidth || sizeBase * 0.2 + `px`}
		${props => props.theme.colors.coral};

	// EXTERNAL CSS TO BE INJECTED;
	${props => props.extStyles};
`;

export const Chips = styled.span`
	padding: ${sizeBase * 0.6}px ${sizeBase * 1.2}px;
	border: 1px solid ${props => props.theme.colors.coral};
	border-radius: ${sizeBase * 0.6}px;
	margin-right: ${sizeBase * 0.6}px;
	display: ${props => props.display || "inline-block"};
	flex: ${props => props.width || "0 1 auto"};

	// EXTERNAL CSS TO BE INJECTED;
	${props => props.extStyles};
`;

export const SelectBox = styled.select`
	width: 100%;
	padding: ${sizeBase * 1.2}px ${sizeBase * 2}px;
	cursor: pointer;
	border: none;
	color: ${props => props.theme.colors.white};
	background: ${props => props.theme.colors.coral};
	text-align: center;
	appearance: none;
	border: solid 1px ${props => props.theme.colors.coral};

	// EXTERNAL CSS TO BE INJECTED;
	${props => props.extStyles};
`;
