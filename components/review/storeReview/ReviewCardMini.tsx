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
import { Row } from "antd";
import { HeartTwoTone } from "@ant-design/icons";
import { Review } from "../../../types/review";
import { Chip } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
interface IProps {
	reviews: Review[];
}

const ReviewCardMini: React.FC<IProps> = ({ reviews }) => {
	return (
		<Swiper
			style={{
				width: "100%",
				height: "320px",
			}}
			slidesPerView={4}
			spaceBetween={20}
			pagination={{
				clickable: true,
			}}
			modules={[Pagination]}
		>
			{reviews?.map((data) => (
				<SwiperSlide
					style={{
						padding: "0.625rem",
						height: "90%",
						gap: "10px",
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
						background: "#fff",
						boxShadow: "0px 20px 20px 0px rgba(0, 0, 0, 0.25)",
					}}
				>
					<ImageDiv>
						<Image
							src={data.image[0]}
							alt="Review Image"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
							}}
							fill
						></Image>

						<ReviewTitleText>{data.title}</ReviewTitleText>
					</ImageDiv>
					<ReviewInfoDiv>
						{/* ToDo : 좋아요 버튼 이벤트 - 로그인 기능 추가 이후 구현 */}
						<Row>
							<HeartTwoTone
								twoToneColor="#eb2f96"
								style={{ fontSize: "1.2rem" }}
							/>
							<Text margin="0 0 0 3px" fontSize="1.2rem">
								{data.likeCount}
							</Text>
						</Row>
						<Row>
							<Text margin="0 3px 0 0 ">조회수</Text>
							<Text>{data.viewCount}</Text>
						</Row>
					</ReviewInfoDiv>
					<ReviewCategotyDiv>
						{data.category.map((category) => (
							<Chip label={category} color="warning"></Chip>
						))}
					</ReviewCategotyDiv>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

const ImageDiv = styled.div`
	position: relative;
	background: #bdbdbd;
	width: 100%;
	height: 100%;
`;

const ReviewTitleText = styled.span`
	position: absolute;
	margin: 0.5rem;
	bottom: 0;
	color: #fff;
	text-align: center;
	text-shadow: 4px 4px rgba(0, 0, 0, 0.25);
	font-size: 1.425rem;

	width: 8rem;
	overflow: hidden; // 텍스트가 박스를 넘어가면 가립니다.
	text-overflow: ellipsis; // 텍스트가 넘어가면 ...으로 표시합니다.
	white-space: nowrap; // 텍스트를 한 줄로 만듭니다.
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
