/*
 * Created on Fri May 26 2023
 * Author : HyeonSeok-Lee
 * GitHub : https://github.com/seok20
 * Email : pine9805@kakao.com
 */

import React from "react";
import styled from "styled-components";
import { ColWrapper, GuideUl } from "../common/CommonComponents";
import MenuItem from "./MenuItem";

const MenuLayout: React.FC = () => {
	const sideBarItems = [
		{ name: "내 정보", icon: "user_profile_mini_icon.svg" },
		{ name: "쿠폰함", icon: "coupon_icon.svg" },
		{ name: "리뷰 통계", icon: "graph_icon.svg" },
		{ name: "리뷰 작성", icon: "write_icon.svg" },
	];

	return (
		<Container>
			{sideBarItems.map((item, index) => {
				return <MenuItem key={index} name={item.name} icon={item.icon} />;
			})}
		</Container>
	);
};

export default MenuLayout;

const Container = styled(ColWrapper)`
	/* Auto layout */

	justify-content: space-between;
	align-items: bottom;
	padding: 60px 72px;
	gap: 40px;
	height: auto;
	background: #fff;
	border-radius: 12px;

	/* Inside auto layout */

	flex: none;
	order: 2;
	align-self: stretch;
`;
