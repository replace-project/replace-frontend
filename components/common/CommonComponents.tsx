import { Row, Col, Button, Form, theme } from "antd";
import styled, { keyframes } from "styled-components";

interface props {
	width?: string;
	height?: string;
	bgcolor?: string;
	bgImg?: string;
	bgPosition?: string;
	bgSize?: string;
	boxShadow?: string;
	index?: string;
	zIndex?: string;
	position?: string;
	top?: string;
	left?: string;
	right?: string;
	bottom?: string;
	margin?: string;
	padding?: string;
	brWidth?: string;
	border?: string;
	borderBottom?: string;
	borderTop?: string;
	borderRight?: string;
	borderLeft?: string;
	radius?: string;
	fontSize?: string;
	fontWeight?: string;
	fontStyle?: string;
	textDecoration?: string;
	lineHeight?: string;
	textAlign?: string;
	letterSpacing?: string;
	cursor?: string;
	opacity?: string;
	shadow?: string;
	attachment?: string;
	transform?: string;
	filter?: string;
	transition?: string;
	objectFit?: string;
	minHeight?: string;
	minWidth?: string;
	maxHeight?: string;
	display?: string;
	wrap?: string;
	dr?: string;
	al?: string;
	ju?: string;
	overflow?: string;
	overflowX?: string;
	overflowY?: string;
	kindOf?: string;
	isEllipsis?: boolean;
	isImpo?: string;
	isActive?: boolean;
	whiteSpace?: string;
	classid?: string;
}

export const fadeAni = keyframes`
    0%{
        opacity:0;
    }
    100%{
        opacity:1;
    }
`;

export const Background = styled.div`
	position: absolute;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	background: #ffffffb7;
	z-index: 999;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const LoadingText = styled.div`
	font: 1rem "Noto Sans KR";
	text-align: center;
`;

export const RowWrapper = styled(Row)<props>`
	width: ${(props) => props.width || `100%`};
	height: ${(props) => props.height};
	background: ${(props) => props.bgcolor};
	background-image: ${(props) => props.bgImg};
	background-size: cover;
	background-position: 50% 50%;
	background-repeat: no-repeat;
	box-shadow: ${(props) => props.boxShadow};
	z-index: ${(props) => props.index};
	position: ${(props) => props.position};
	top: ${(props) => props.top};
	left: ${(props) => props.left};
	right: ${(props) => props.right};
	bottom: ${(props) => props.bottom};
	margin: ${(props) => props.margin};
	padding: ${(props) => props.padding};
	border: ${(props) => props.border};
	border-bottom: ${(props) => props.borderBottom};
	border-top: ${(props) => props.borderTop};
	border-right: ${(props) => props.borderRight};
	border-left: ${(props) => props.borderLeft};
	border-radius: ${(props) => props.radius};
	font-size: ${(props) => props.fontSize};
	font-weight: ${(props) => props.fontWeight};
	line-height: ${(props) => props.lineHeight};
	text-align: ${(props) => props.textAlign};
	letter-spacing: ${(props) => props.letterSpacing};
	cursor: ${(props) => props.cursor};
	opacity: ${(props) => props.opacity};
`;

export const ColWrapper = styled(Col)<props>`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	min-height: ${(props) => props.minHeight};
	display: ${(props) => props.display || `flex`};
	flex-direction: ${(props) => props.dr || `column`};
	align-items: ${(props) => props.al || `center`};
	justify-content: ${(props) => props.ju || `center`};
	background: ${(props) => props.bgcolor};
	background-image: ${(props) => props.bgImg};
	background-size: cover;
	background-position: 50% 50%;
	background-repeat: no-repeat;
	box-shadow: ${(props) => props.boxShadow};
	z-index: ${(props) => props.index};
	position: ${(props) => props.position};
	top: ${(props) => props.top};
	left: ${(props) => props.left};
	right: ${(props) => props.right};
	bottom: ${(props) => props.bottom};
	margin: ${(props) => props.margin};
	padding: ${(props) => props.padding};
	border: ${(props) => props.border};
	border-bottom: ${(props) => props.borderBottom};
	border-top: ${(props) => props.borderTop};
	border-right: ${(props) => props.borderRight};
	border-left: ${(props) => props.borderLeft};
	border-radius: ${(props) => props.radius};
	font-size: ${(props) => props.fontSize};
	font-weight: ${(props) => props.fontWeight};
	color: ${(props) => props.color};
	line-height: ${(props) => props.lineHeight};
	text-align: ${(props) => props.textAlign};
	letter-spacing: ${(props) => props.letterSpacing};
	cursor: ${(props) => props.cursor};
	opacity: ${(props) => props.opacity};
	z-index: ${(props) => props.zIndex};
`;

export const WholeWrapper = styled.section<props>`
	width: ${(props) => props.width || `100%`};
	height: ${(props) => props.height};
	min-height: ${(props) => props.minHeight};
	color: ${(props) => props.color};
	display: ${(props) => props.display || `flex`};
	background: ${(props) => props.bgcolor};
	flex-direction: ${(props) => props.dr || `column`};
	align-items: ${(props) => props.al || `center`};
	justify-content: ${(props) => props.ju || `center`};
	background-image: ${(props) => props.bgImg};
	background-size: cover;
	background-position: ${(props) => props.bgPosition || `center`};
	background-repeat: no-repeat;
	box-shadow: ${(props) => props.boxShadow};
	z-index: ${(props) => props.zIndex};
	position: ${(props) => props.position};
	top: ${(props) => props.top};
	left: ${(props) => props.left};
	right: ${(props) => props.right};
	bottom: ${(props) => props.bottom};
	margin: ${(props) => props.margin};
	padding: ${(props) => props.padding};
	border-radius: ${(props) => props.radius};
	animation: ${fadeAni} 0.3s forwards;
`;

export const Wrapper = styled.div<props>`
	width: ${(props) => props.width || `100%`};
	min-width: ${(props) => props.minWidth};
	height: ${(props) => props.height};
	min-height: ${(props) => props.minHeight};
	display: ${(props) => props.display || `flex`};
	flex-direction: ${(props) => props.dr || `column`};
	align-items: ${(props) => props.al || `center`};
	justify-content: ${(props) => props.ju || `center`};
	flex-wrap: ${(props) => props.wrap || `wrap`};
	background: ${(props) => props.bgcolor};
	color: ${(props) => props.color};
	position: ${(props) => props.position};
	top: ${(props) => props.top};
	left: ${(props) => props.left};
	bottom: ${(props) => props.bottom};
	right: ${(props) => props.right};
	z-index: ${(props) => props.zIndex};
	border: ${(props) => props.border};
	border-bottom: ${(props) => props.borderBottom};
	border-top: ${(props) => props.borderTop};
	border-right: ${(props) => props.borderRight};
	border-left: ${(props) => props.borderLeft};
	border-radius: ${(props) => props.radius};
	box-shadow: ${(props) => props.shadow};
	font-size: ${(props) => props.fontSize};
	font-weight: ${(props) => props.fontWeight};
	margin: ${(props) => props.margin};
	padding: ${(props) => props.padding};
	overflow: ${(props) => props.overflow};
	overflow-x: ${(props) => props.overflowX};
	overflow-y: ${(props) => props.overflowY};
	background-image: ${(props) => props.bgImg};
	background-size: ${(props) => props.bgSize || `cover`};
	background-repeat: no-repeat;
	background-attachment: ${(props) => props.attachment};
	background-position: ${(props) => props.bgPosition || `center`};

	transition: ${(props) => props.transition || `0.2s`};
	cursor: ${(props) => props.cursor};
	line-height: ${(props) => props.lineHeight};
	text-align: ${(props) => props.textAlign};
	letter-spacing: ${(props) => props.letterSpacing};
	opacity: ${(props) => props.opacity};

	& pre {
		white-space: pre-wrap;
	}
`;

export const RsWrapper = styled.article<props>`
	width: 1350px;
	height: ${(props) => props.height || `100%`};
	${(props) => props.minHeight}
	color: ${(props) => props.color};
	display: ${(props) => props.display || `flex`};
	background: ${(props) => props.bgcolor};
	color: ${(props) => props.color};
	flex-direction: ${(props) => props.dr || `column`};
	align-items: ${(props) => props.al || `center`};
	justify-content: ${(props) => props.ju || `center`};
	flex-wrap: ${(props) => props.wrap || `wrap`};
	backdrop-filter: ${(props) => props.filter};
	margin: ${(props) => props.margin};
	padding: ${(props) => props.padding};
	overflow: ${(props) => props.overflow};
	border-bottom: ${(props) => props.borderBottom};
	border: ${(props) => props.border};
	font-size: ${(props) => props.fontSize};
	position: ${(props) => props.position};

	@media (max-width: 1500px) {
		width: 1350px;
	}
	@media (max-width: 1350px) {
		width: 1280px;
	}
	@media (max-width: 1280px) {
		width: 1100px;
	}
	@media (max-width: 1100px) {
		width: 900px;
	}
	@media (max-width: 900px) {
		width: 800px;
	}
	@media (max-width: 800px) {
		width: 700px;
	}
	@media (max-width: 700px) {
		width: 100%;
		padding-left: 10px;
		padding-right: 10px;
	}
`;

export const CommonButton = styled(Button)<props>`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	margin: ${(props) => props.margin};
	padding: ${(props) => props.padding};
	font-size: ${(props) => props.fontSize || `16px`};
	color: ${(props) => props.color || props.theme.black_C};
	background: ${(props) => props.bgcolor || props.theme.basicTheme_C};
	border-radius: ${(props) => props.radius || `6px`};
	border-width: ${(props) => props.brWidth || `2px`};

	${(props) =>
		!props.kindOf && `border : 1px solid ${props.theme.basicTheme_C};`}
	/* white */
  ${(props) =>
		props.kindOf === `white` && `background : ${props.theme.white_C};`}
  ${(props) =>
		props.kindOf === `white` && `color : ${props.theme.basicTheme_C};`}
  ${(props) =>
		props.kindOf === `white` &&
		`border : 1px solid ${props.theme.basicTheme_C};`}
  /* white3 */
  ${(props) =>
		props.kindOf === `white3` && `background : ${props.theme.basicTheme_C};`}
  ${(props) => props.kindOf === `white3` && `color : ${props.theme.white_C};`}
  ${(props) =>
		props.kindOf === `white3` &&
		`border : 1px solid ${props.theme.basicTheme_C};`}
  /* black */
  ${(props) =>
		props.kindOf === `black` && `background : ${props.theme.black_C};`}
  ${(props) => props.kindOf === `black` && `color : ${props.theme.white_C};`}
  /* subTheme */
  ${(props) =>
		props.kindOf === `subTheme` && `background : ${props.theme.subTheme3_C};`}
  ${(props) => props.kindOf === `subTheme` && `color : ${props.theme.white_C};`}
  ${(props) =>
		props.kindOf === `subTheme` &&
		`border : 1px solid ${props.theme.subTheme3_C};`}
    /* white2 */
  ${(props) =>
		props.kindOf === `white2` && `background : ${props.theme.white_C};`}
  ${(props) =>
		props.kindOf === `white2` && `color : ${props.theme.subTheme3_C};`}
  ${(props) =>
		props.kindOf === `white2` &&
		`border :  1px solid ${props.theme.subTheme3_C};`}
    /* grey */
  ${(props) =>
		props.kindOf === `grey` && `background : ${props.theme.lightGrey4_C};`}
  ${(props) => props.kindOf === `grey` && `color : ${props.theme.grey2_C};`}
  ${(props) =>
		props.kindOf === `grey` && `border : 1px solid ${props.theme.grey4_C};`}
    /* grey2 */
  ${(props) =>
		props.kindOf === `grey2` && `background : ${props.theme.lightGrey4_C};`}
  ${(props) => props.kindOf === `grey2` && `color : ${props.theme.grey2_C};`}
  ${(props) =>
		props.kindOf === `grey2` &&
		`border : 1px solid ${props.theme.lightGrey4_C};`}
  /* kakao */
  ${(props) =>
		props.kindOf === `kakao` && `background : ${props.theme.kakao_C};`}
  ${(props) =>
		props.kindOf === `kakao` && `color : ${props.theme.subTheme4_C};`}
  ${(props) =>
		props.kindOf === `kakao` && `border : 1px solid ${props.theme.kakao_C};`}
/* delete */
  ${(props) =>
		props.kindOf === `delete` && `background : ${props.theme.red_C};`}
  ${(props) => props.kindOf === `delete` && `color : ${props.theme.white_C};`}
  ${(props) =>
		props.kindOf === `delete` && `border : 1px solid ${props.theme.red_C};`}



&:hover {
		background: ${(props) => props.theme.white_C};
		color: ${(props) => props.theme.basicTheme_C};
		${(props) =>
			!props.kindOf && `border :1px solid ${props.theme.basicTheme_C};`}
		/* white */
    ${(props) =>
			props.kindOf === `white` && `background : ${props.theme.basicTheme_C};`}
    ${(props) => props.kindOf === `white` && `color : ${props.theme.white_C};`}
    ${(props) =>
			props.kindOf === `white` &&
			`border : 1px solid ${props.theme.basicTheme_C};`}
    /* white3 */
    ${(props) =>
			props.kindOf === `white3` && `background : ${props.theme.white_C};`}
    ${(props) =>
			props.kindOf === `white3` && `color : ${props.theme.basicTheme_C};`}
    ${(props) =>
			props.kindOf === `white3` &&
			`border : 1px solid ${props.theme.basicTheme_C};`}
  
      /* black */
    ${(props) =>
			props.kindOf === `black` && `background : ${props.theme.white_C};`}
    ${(props) => props.kindOf === `black` && `color : ${props.theme.black_C};`}
    ${(props) =>
			props.kindOf === `black` && `border : 1px solid ${props.theme.black_C};`}
      /* subTheme */
    ${(props) =>
			props.kindOf === `subTheme` && `color ${props.theme.subTheme3_C};`}
    ${(props) =>
			props.kindOf === `subTheme` && `background ${props.theme.white_C};`}
    ${(props) =>
			props.kindOf === `subTheme` &&
			`border : 1px solid ${props.theme.subTheme3_C};`}
    /* white2 */
    ${(props) =>
			props.kindOf === `white2` && `background : ${props.theme.subTheme3_C};`}
    ${(props) => props.kindOf === `white2` && `color : ${props.theme.white_C};`}
    ${(props) =>
			props.kindOf === `white2` &&
			`border :  1px solid ${props.theme.subTheme3_C};`}


    /* grey */
    ${(props) =>
			props.kindOf === `grey` && `background : ${props.theme.grey2_C};`}
    ${(props) => props.kindOf === `grey` && `color : ${props.theme.white_C};`}
    ${(props) =>
			props.kindOf === `grey` &&
			`border : 1px solid ${props.theme.lightGrey4_C};`}

    /* grey2 */
    ${(props) =>
			props.kindOf === `grey2` && `background : ${props.theme.grey2_C};`}
    ${(props) =>
			props.kindOf === `grey2` && `color : ${props.theme.lightGrey4_C};`}
    ${(props) =>
			props.kindOf === `grey2` && `border : 1px solid ${props.theme.grey2_C};`}
    ${(props) =>
			props.kindOf === `kakao` && `background : ${props.theme.kakao_C};`}
    ${(props) =>
			props.kindOf === `kakao` && `color : ${props.theme.subTheme4_C};`}
    ${(props) =>
			props.kindOf === `kakao` &&
			`border : 1px solid ${props.theme.subTheme4_C};`}
    ${(props) =>
			props.kindOf === `delete` && `background : ${props.theme.white_C};`}
    ${(props) => props.kindOf === `delete` && `color : ${props.theme.red_C};`}
    ${(props) =>
			props.kindOf === `delete` && `border : 1px solid ${props.theme.red_C};`}
	}
`;

export const Text = styled.p<props>`
	overflow: ${(props) => props.overflow};
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	min-height: ${(props) => props.minHeight};
	max-height: ${(props) => props.maxHeight};
	display: ${(props) => props.display};
	flex-direction: ${(props) => props.dr};
	align-items: ${(props) => props.al};
	justify-content: ${(props) => props.ju};
	font-size: ${(props) => props.fontSize};
	font-weight: ${(props) => props.fontWeight};
	line-height: ${(props) => props.lineHeight};
	color: ${(props) => props.color};
	margin: ${(props) => props.margin || `0`};
	padding: ${(props) => props.padding};
	background: ${(props) => props.bgcolor};
	text-align: ${(props) => props.textAlign};
	position: ${(props) => props.position};
	top: ${(props) => props.top};
	bottom: ${(props) => props.bottom};
	left: ${(props) => props.left};
	right: ${(props) => props.right};
	font-style: ${(props) => props.fontStyle};
	cursor: ${(props) => props.cursor};
	z-index: 1;
	white-space: ${(props) => props.whiteSpace};
	border-bottom: ${(props) => props.borderBottom};
	opacity: ${(props) => props.opacity};
	letter-spacing: ${(props) => props.letterSpacing};

	${(props) =>
		props.isEllipsis
			? `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `
			: ``}
`;

export const PagenationWrapper = styled.div<props>`
	width: ${(props) => props.width || `100%`};
	min-width: ${(props) => props.minWidth};
	height: ${(props) => props.height};
	color: ${(props) => props.color};
	display: flex;
	flex-direction: ${(props) => props.dr || `row`};
	align-items: ${(props) => props.al || `center`};
	justify-content: ${(props) => props.ju || `center`};
	background: ${(props) => props.bgcolor};
	color: ${(props) => props.color};
	border: ${(props) => props.border};
	border-bottom: ${(props) => props.borderBottom};
	border-radius: ${(props) => props.radius};
	box-shadow: ${(props) => props.shadow};
	font-size: ${(props) => props.fontSize || `14px`};
	font-weight: ${(props) => props.fontWeight};
	margin: ${(props) => props.margin || `0px 0 80px`};
	padding: ${(props) => props.padding};
`;

export const Pagenation = styled.div<props>`
	width: 25px;
	height: 25px;
	display: flex;
	flex-direction: ${(props) => props.dr || `row`};
	align-items: ${(props) => props.al || `center`};
	justify-content: ${(props) => props.ju || `center`};
	cursor: pointer;
	margin: 0px 5px;
	border-radius: 4px;

	&.active {
		background: ${(props) => props.theme.basicTheme_C};
		color: ${(props) => props.theme.white_C};
	}
`;

export const PagenationBtn = styled.div`
	text-align: center;
	font-size: 14px;
	width: 25px;
	height: 25px;
	color: ${(props) => props.color};
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	border-radius: 25px;
	margin: 0px 5px;
	border-radius: 4px;

	&:first-child,
	&:last-child {
		color: ${(props) => props.theme.grey_C};
	}

	&:hover {
		color: ${(props) => props.theme.basicTheme_C};
	}
`;

export const Image = styled.img<props>`
	display: ${(props) => props.display};
	width: ${(props) => props.width || `100%`};
	min-width: ${(props) => props.minWidth};
	height: ${(props) => props.height || `auto`};
	margin: ${(props) => props.margin};
	cursor: ${(props) => props.cursor};
	transform: ${(props) => props.transform};
	object-fit: ${(props) => props.objectFit || `cover`};
	position: ${(props) => props.position};
	box-shadow: ${(props) => props.shadow};
	border: ${(props) => props.border};
	border-radius: ${(props) => props.radius};
	z-index: ${(props) => props.zIndex};
	top: ${(props) => props.top};
	left: ${(props) => props.left};
	bottom: ${(props) => props.bottom};
	right: ${(props) => props.right};
`;

export const ATag = styled.a<props>`
	width: ${(props) => props.width || `100%`};
	min-width: ${(props) => props.minWidth};
	height: ${(props) => props.height};
	min-height: ${(props) => props.minHeight};
	display: ${(props) => props.display || `flex`};
	flex-direction: ${(props) => props.dr};
	align-items: ${(props) => props.al || `center`};
	justify-content: ${(props) => props.ju || `center`};
	flex-wrap: ${(props) => props.wrap || `wrap`};
	background: ${(props) => props.bgcolor};
	color: ${(props) => props.color};
`;

export const SpanText = styled.span<props>`
	width: ${(props) => props.width};
	font-size: ${(props) => props.fontSize};
	font-weight: ${(props) => props.fontWeight};
	line-height: ${(props) => props.lineHeight};
	color: ${(props) => props.color};
	margin: ${(props) => props.margin};
	padding: ${(props) => props.padding};
	display: ${(props) => props.display};
	background: ${(props) => props.bgcolor};
	text-align: ${(props) => props.textAlign};
	text-decoration: ${(props) => props.textDecoration};
	transition: 0.5s;
	position: ${(props) => props.position};
	top: ${(props) => props.top};
	left: ${(props) => props.left};
	bottom: ${(props) => props.bottom};
	right: ${(props) => props.right};
	font-style: ${(props) => props.fontStyle};
	cursor: ${(props) => props.cursor};
	z-index: 1;
	border: ${(props) => props.border};
	border-radius: ${(props) => props.radius};
	box-shadow: ${(props) => props.shadow};
	white-space: ${(props) => props.whiteSpace};

	${(props) =>
		props.isEllipsis &&
		`
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
  `}
`;

export const TextInput = styled.input<props>`
	width: ${(props) => props.width || `100%`};
	height: ${(props) => props.height || `40px`};
	border: ${(props) => props.border || `1px solid ${props.theme.lightGrey3_C}`};
	border-bottom: ${(props) => props.borderBottom};
	padding: ${(props) => props.padding || `10px`};
	transition: ${(props) => props.transition || props.theme.transition};
	margin: ${(props) => props.margin};
	background-color: ${(props) => props.bgcolor};
	border-radius: ${(props) => props.radius};
	font-size: ${(props) => props.fontSize};
	cursor: ${(props) => props.cursor};
	border-radius: ${(props) => props.radius || `10px`};
	transition: 0.3s;

	&:focus {
		outline: none;
		border: 1px solid ${(props) => props.theme.basicTheme_C};
	}

	&:read-only {
		background-color: ${(props) => props.theme.lightGrey_C};
		cursor: auto;
	}

	&:read-only:focus {
		box-shadow: none;
	}

	&::placeholder {
		font-size: 16px;
		color: ${(props) => props.theme.grey4_C};
	}
`;

export const TextArea = styled.textarea<props>`
	width: ${(props) => props.width || `100%`};
	height: ${(props) => props.height || `30rem`};
	padding: ${(props) => props.padding || `10px`};
	border: ${(props) => props.border || `1px solid ${props.theme.lightGrey3_C}`};
	border-radius: ${(props) => props.theme.radius};
	background: ${(props) => props.bgcolor};
	transition: ${(props) => props.transition || props.theme.transition};
	margin: ${(props) => props.margin};
	resize: none;
	border-radius: ${(props) => props.radius || `10px`};

	&:focus {
		outline: none;
		border: 1px solid ${(props) => props.theme.basicTheme_C};
	}

	&::placeholder {
		font-size: 16px;
		line-height: 1.5rem;
		color: ${(props) => props.theme.grey4_C};
	}
`;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////SYSTEM///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const SystemTitle = styled.h3<props>`
	font-size: 24px;
	margin: ${(props) => props.margin || `0 0 50px`};
`;

export const AdminContent = styled.div`
	padding: 20px;
`;

export const SearchForm = styled(Form)`
	background-color: ${(props) => props.theme.grey_C};
	padding: 0px 5px;
	margin-bottom: 10px;
	border-radius: 5px;
`;

export const SearchFormItem = styled(Form.Item)`
	margin-bottom: 0px;
	.ant-form-item-label > label {
		color: #fff;
	}
`;

export const ModalBtn = styled(Button)`
	margin-left: 5px;
`;

export const GuideUl = styled.ul`
	width: 100%;
	padding: 5px;
`;
export const GuideLi = styled.li<props>`
	width: 100%;
	margin-bottom: 5px;
	color: ${(props) => (props.isImpo ? props.theme.red_C : "")};
`;

export const GuideDiv = styled.div<props>`
	width: 100%;
	color: ${(props) => (props.isImpo ? props.theme.red_C : "")};
`;

export const WrapperUnderline = styled.div<props>`
	width: ${(props) => props.width || `100%`};
	border-bottom: 2px solid ${(props) => props.theme.lightGrey4_C};
	margin: ${(props) => props.margin};
`;

export const IconButton = styled.button<props>`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	margin: ${(props) => props.margin};
	padding: ${(props) => props.padding};
	color: ${(props) => props.color || props.theme.black_C};
	background: ${(props) => props.bgcolor || props.theme.white_C};
	border-radius: ${(props) => props.radius || `0px`};
	border-width: ${(props) => props.brWidth || `0px`};
	&:hover {
		cursor: ${(props) => props.brWidth || `pointer`};
	}
`;

export const InputForm = styled(Form)<props>`
	width: ${(props) => props.width || `100%`};
	height: ${(props) => props.height || `12px`};
	margin: ${(props) => props.margin};
	padding: ${(props) => props.padding};
	color: ${(props) => props.color || props.theme.black_C};
	background: ${(props) => props.bgcolor || props.theme.white_C};
	border-radius: ${(props) => props.radius || `0px`};
	border-width: ${(props) => props.brWidth || `0px`};
	&:hover {
		cursor: ${(props) => props.brWidth || `pointer`};
	}
`;
