/*
 * Created on Fri May 26 2023
 * Author : HyeonSeok-Lee
 * GitHub : https://github.com/seok20
 * Email : pine9805@kakao.com
 */

import React from "react";
import styled, { css, keyframes } from "styled-components";
import OutsideClickHandler from "react-outside-click-handler";
import HamburgerIcon from "../../public/header/hamburger_menu.svg";
import { useRecoilState } from "recoil";
import {
	isClosingState,
	isOpeningState,
} from "../../recoil/atoms/nav/sideBarState";
import Theme from "../../styles/Theme";

interface SideBarProps {
	isOpen: boolean;
}

const SideBar: React.FC = () => {
	const [isOpen, setIsOpen] = useRecoilState(isOpeningState);
	const [isClosing, setIsClosing] = useRecoilState(isClosingState);

	const handleClick = () => {
		setIsOpen(!isOpen);
		if (isOpen) {
			setIsClosing(true);
			setTimeout(() => setIsClosing(false), 500);
		}
	};

	return (
		<OutsideClickHandler
			onOutsideClick={() => {
				if (isOpen) {
					handleClick();
				}
			}}
		>
			<React.Fragment>
				<WrapperButton onClick={handleClick}>
					<HamburgerIcon style={{ color: Theme.subTheme_C }} height="1.8rem" />
				</WrapperButton>
				{(isOpen || isClosing) && <SideBarMenu isOpen={isOpen}></SideBarMenu>}
			</React.Fragment>
		</OutsideClickHandler>
	);
};

export default SideBar;

const slideIn = keyframes`
    from {
        transform : translateX(-100%);
    }

    to{
        transform : translateX(0);
    }
`;

const slideOut = keyframes`
    from{
        transform: translateX(0);
    }

    to{
        transform: translateX(-100%);
    }
`;

const WrapperButton = styled.button`
	background-color: transparent;
	border: none;
	margin-left: auto;
`;

const SideBarMenu = styled.aside<SideBarProps>`
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	background-color: ${(props) => props.theme.basicTheme_C};
	animation: ${(props) =>
		props.isOpen
			? css`
					${slideIn} 0.5s forwards
			  `
			: css`
					${slideOut} 0.5s forwards
			  `};

	@media (max-width: 450px) {
		/* 휴대폰 크기에 맞는 미디어 쿼리 */
		width: 100%;
	}

	@media (min-width: 450px) {
		/* 웹사이트 크기에 맞는 미디어 쿼리 */
		width: 450px;
	}
`;
