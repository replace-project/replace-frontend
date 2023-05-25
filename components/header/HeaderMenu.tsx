/*
 * Created on Thu May 25 2023
 * Author : HyeonSeok-Lee
 * GitHub : https://github.com/seok20
 * Email : pine9805@kakao.com
 */

import React from "react";
import styled from "styled-components";
import Theme from "../../styles/Theme";
import HamburgerIcon from "../../public/header/hamburger_menu.svg";

const HamburgerMenu: React.FC = () => {
	return (
		<HamburgerMenuContainer>
			<HamburgerIcon style={{ color: Theme.subTheme_C }} height="1.8rem" />
		</HamburgerMenuContainer>
	);
};

export default HamburgerMenu;

const HamburgerMenuContainer = styled.div`
	margin-left: auto;
`;
