/*
 * Created on Fri May 26 2023
 * Author : HyeonSeok-Lee
 * GitHub : https://github.com/seok20
 * Email : pine9805@kakao.com
 */

import React, { useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import OutsideClickHandler from "react-outside-click-handler";
import HamburgerIcon from "../../public/header/menu_icon.svg";
import { useRecoilState } from "recoil";
import {
	isClosingState,
	isOpeningState,
} from "../../recoil/atoms/slide/slideState";
import Theme from "../../styles/Theme";
import SideBarTitle from "./SideBarTitle";
import SideBarAuths from "./SideBarAuth";
import MenuLayout from "./MenuLayout";

interface SideBarProps {
	isOpen: {
		state: boolean;
		type: string;
	};
}

const SideBar: React.FC = () => {
	const [isOpen, setIsOpen] = useRecoilState(isOpeningState);
	const [isClosing, setIsClosing] = useRecoilState(isClosingState);

	const handleClick = () => {
		setIsOpen((prevState) => ({
			state: !prevState.state,
			type: "sidebar",
		}));
	};

	useEffect(() => {
		console.log("in sidebar" + isOpen.type, isOpen.state);
		if (isOpen.state && isOpen.type === "sidebar") {
			setIsClosing({ state: true, type: "sidebar" });
			setTimeout(() => setIsClosing({ state: false, type: "" }), 500);
		}
	}, [isOpen]);

	return (
		<OutsideClickHandler
			onOutsideClick={() => {
				if (isOpen.state && isOpen.type === "sidebar") {
					handleClick();
				}
			}}
		>
			<React.Fragment>
				<WrapperButton onClick={handleClick}>
					<HamburgerIcon height="30px" />
				</WrapperButton>
				{((isOpen.state && isOpen.type === "sidebar") || isClosing) && (
					<SideBarLayout isOpen={isOpen}>
						<SideBarTitle />
						<SideBarAuths />
						<MenuLayout />
					</SideBarLayout>
				)}
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
        transform: translateX(-110%);
    }
`;

const WrapperButton = styled.button`
	background-color: transparent;
	border: none;
	margin-left: auto;
	margin-right: 1rem;

	& > :hover {
		cursor: pointer;
		opacity: 0.7;
	}
`;

const SideBarLayout = styled.aside<SideBarProps>`
	position: fixed;
	top: 2.5%; // 5%를 위 아래로 나눔
	left: 1%;
	height: 95%;
	box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
	border-radius: 15px;
	background-color: ${(props) => props.theme.white_C};
	animation: ${(props) =>
		props.isOpen.state && props.isOpen.type === "sidebar"
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
		width: 380px;
	}
`;
