/*
 * Created on Wed May 24 2023
 * Author : HyeonSeok-Lee
 * GitHub : https://github.com/seok20
 * Email : pine9805@kakao.com
 */

import React from "react";
import styled from "styled-components";

import Link from "next/link";
import LogoIcon from "../../public/logo/logo_icon.svg";
import HamburgerMenu from "./HeaderMenu";
import Theme from "../../styles/Theme";

const Header: React.FC = () => {
	return (
		<Container>
			<LogoContainer>
				<Link href={"/"}>
					<LogoIcon height="2.7rem" color={Theme.subTheme_C}></LogoIcon>
				</Link>
			</LogoContainer>
			<HamburgerMenu />
		</Container>
	);
};

export default Header;

const Container = styled.header`
	display: flex;
	justify-content: space-between;
	position: sticky;
	width: 100%;
	height: 3rem;
	box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
	background: ${(props) => props.theme.basicTheme_C};
	top: 0;
	left: 0;
	z-index: 10;
	text-align: center;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const LogoContainer = styled.div`
	flex-grow: 1;
	display: flex;
	justify-content: center;
`;
