/*
 * Created on Tue Jun 27 2023
 * Author : HyeonSeok-Lee
 * GitHub : https://github.com/seok20
 * Email : pine9805@kakao.com
 */

import styled from "styled-components";
import { Skeleton } from "@mui/material";

const SkeletonReviewCardMini: React.FC = () => {
	return (
		<>
			<Skeleton variant="text" width={"250px"} sx={{ fontSize: "1.4rem" }} />
			<Skeleton variant="text" width={"400px"} sx={{ fontSize: "1.2rem" }} />
			<br />
			<br />
			<CardContainer>
				<Skeleton variant="rectangular" width={`12.5rem`} height={`12.5rem`} />
				<Skeleton
					variant="text"
					width={"12.5rem"}
					sx={{ fontSize: "1.2rem" }}
				/>
				<Skeleton
					variant="text"
					width={"12.5rem"}
					sx={{ fontSize: "2rem" }}
				></Skeleton>
			</CardContainer>
		</>
	);
};

export default SkeletonReviewCardMini;

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
