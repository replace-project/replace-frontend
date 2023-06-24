/*
 * Created on Fri Jun 23 2023
 * Author : HyeonSeok-Lee
 * GitHub : https://github.com/seok20
 * Email : pine9805@kakao.com
 */

import React from "react";
import styled from "styled-components";
import { Text } from "../../common/CommonComponents";
import Image from "next/image";
import { Row, Tag } from "antd";
import { HeartTwoTone } from "@ant-design/icons";

const ReviewCardMini: React.FC = () => {
	return (
		<CardContainer>
			<ImageDiv>
				<Image
					src={""}
					alt="Review Image"
					style={{ width: "100%", height: "100%", objectFit: "cover" }}
					fill
				></Image>
				<ReviewTitleText>리뷰 제목</ReviewTitleText>
			</ImageDiv>
			<ReviewInfoDiv>
				<Row>
					<HeartTwoTone twoToneColor="#eb2f96" style={{ fontSize: "1.2rem" }} />
					<Text margin="0 0 0 3px" fontSize="1.2rem">
						149
					</Text>
				</Row>
				<Row>
					<Text margin="0 3px 0 0 ">조회수</Text>
					<Text>1,234</Text>
				</Row>
			</ReviewInfoDiv>
			<ReviewCategotyDiv>
				<Tag color="volcano">☕️ 카페</Tag>
				<Tag color="lime">🍽️ 음식점</Tag>
				<Tag color="red">🍷 술집</Tag>
			</ReviewCategotyDiv>
		</CardContainer>
	);
};

const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 13.8rem;
	padding: 0.625rem;
	flex-direction: column;
	align-items: flex-start;
	gap: 1.0625rem;

	background: #fff;
	box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.25);
`;

const ImageDiv = styled.div`
	position: relative;
	background: #bdbdbd;
	width: 12.5rem;
	height: 12.5rem;
`;

const ReviewTitleText = styled.span`
	position: absolute;
	margin: 0.5rem;
	bottom: 0;
	color: #fff;
	text-align: center;
	text-shadow: 4px 4px rgba(0, 0, 0, 0.25);
	font-size: 1.425rem;
`;

const ReviewInfoDiv = styled.div`
	display: flex;
	width: 12.5rem;
	padding: 0rem 0.625rem;
	justify-content: space-between;
	align-items: center;
`;

const ReviewCategotyDiv = styled(Row)`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 0.5rem;
`;

export default ReviewCardMini;
