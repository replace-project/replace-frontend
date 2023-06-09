/*
 * Created on Thu Jun 08 2023
 * Author : HyeonSeok-Lee
 * GitHub : https://github.com/seok20
 * Email : pine9805@kakao.com
 */

import React from "react";
import styled from "styled-components";

import { RowWrapper, Text, Wrapper } from "../common/CommonComponents";
import Image from "next/image";
import Link from "next/link";

interface ItemProps {
	name: string;
	icon: string;
}

const MenuItem: React.FC<ItemProps> = ({ name, icon }) => {
	const iconPath = `/sidebar/${icon}`;
	return (
		<Link href={"/"}>
			<ItemListItem>
				<Image src={iconPath} alt={name} width={20} height={20} />

				<TextDiv>
					<Text fontSize="16px">{name}</Text>
				</TextDiv>
			</ItemListItem>
		</Link>
	);
};

export default MenuItem;

const ItemListItem = styled(RowWrapper)`
	/* Frame 13979 */

	/* Auto layout */

	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 8px 30px;
	gap: 30px;

	width: 300px;
	height: 60.01px;

	background: #a09a95;
	border-radius: 12px;

	/* Inside auto layout */

	flex: none;
	order: 0;
	flex-grow: 0;

	:hover {
		background-color: #d0cac5;
	}

	:active {
		transform: scale(0.95);
	}
`;

const TextDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-grow: 1;
	height: 80%;
	border-left: 1px solid rgba(0, 0, 0, 0.25);
`;
