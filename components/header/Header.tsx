/*
 * Created on Wed May 24 2023
 * Author : HyeonSeok-Lee
 * GitHub : https://github.com/seok20
 * Email : pine9805@kakao.com
 */

import React from "react";
import styled from "styled-components";

import Link from "next/link";
import LogoText from "../../public/logo/logo_text.svg";
import Theme from "../../styles/Theme";
import SideBar from "../sidebar/SideBarLayout";

const Header: React.FC = () => {
	return (
		<Container>
			<LogoContainer>
				<Link href={"/"}>
					<LogoText height="45px" />
				</Link>
			</LogoContainer>
			<SideBar />
		</Container>
	);
};

export default Header;

const Container = styled.header`
	display: flex;
	justify-content: space-between;
	position: sticky;
	width: 100%;
	height: 60px;
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
