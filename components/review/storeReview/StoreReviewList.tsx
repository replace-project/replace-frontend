/*
 * Created on Thu Jun 22 2023
 * Author : HyeonSeok-Lee
 * GitHub : https://github.com/seok20
 * Email : pine9805@kakao.com
 */

import React, { useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import { Text, Wrapper } from "../../common/CommonComponents";
import { useRecoilState } from "recoil";
import {
	isClosingState,
	isOpeningState,
} from "../../../recoil/atoms/slide/slideState";
import OutsideClickHandler from "react-outside-click-handler";
import ReviewCardMini from "./ReviewCardMini";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { fetchReviewListWithStoreId } from "../../../recoil/selectors/review/reviewSelecotrs";
import { clickedStoreIdState } from "../../../recoil/atoms/map/storeState";
import { useState } from "react";
import { ReviewList } from "../../../types/review";
import SkeletonReviewCardMini from "./SkeletonReviewCardMini";

interface ReviewListProps {
	isOpen: {
		state: boolean;
		type: string;
	};
}

const StoreReviewList: React.FC = () => {
	const [, setIsClosing] = useRecoilState(isClosingState);
	const [isOpen, setIsOpen] = useRecoilState(isOpeningState);

	const storeId = useRecoilValue(clickedStoreIdState);
	const reviewListLoadable = useRecoilValueLoadable(
		fetchReviewListWithStoreId(storeId)
	);
	const [content, setContent] = useState<ReviewList | null>(null);

	useEffect(() => {
		if (reviewListLoadable.state === "hasValue") {
			setContent(reviewListLoadable.contents);
		}
	}, [reviewListLoadable.state]);

	const handleClick = () => {
		setIsOpen((prevState) => ({
			state: !prevState.state,
			type: "reviewList",
		}));
	};

	useEffect(() => {
		if (isOpen.state && isOpen.type === "reviewList") {
			setIsClosing({ state: true, type: "reviewList" });
			setTimeout(() => setIsClosing({ state: false, type: "" }), 500);
		}
	}, [isOpen.state]);

	return (
		<OutsideClickHandler
			onOutsideClick={() => {
				if (isOpen.state && isOpen.type === "reviewList") {
					handleClick();
				}
			}}
		>
			<React.Fragment>
				<Container isOpen={isOpen}>
					{reviewListLoadable.state === "loading" ? (
						<SkeletonReviewCardMini></SkeletonReviewCardMini>
					) : (
						content && (
							<>
								<StoreInfoWrapper>
									<Text fontSize="1.4rem">{content?.store?.name}</Text>
									<Text fontSize="1.2rem">{content?.store?.address}</Text>
								</StoreInfoWrapper>
								<Wrapper padding="0.625rem" al="flex-start">
									<ReviewCardMini reviews={content?.reviews}></ReviewCardMini>
								</Wrapper>
							</>
						)
					)}
				</Container>
			</React.Fragment>
		</OutsideClickHandler>
	);
};

export default StoreReviewList;

const slideIn = keyframes`
    from {
        transform : translateY(100%);
    }

    to{
        transform : translateY(0);
    }
`;

const slideOut = keyframes`
    from{
        transform: translateY(0);
    }

    to{
        transform: translateY(110%);
    }
`;

const Container = styled(Wrapper)<ReviewListProps>`
	position: fixed;
	bottom: 0;
	left: 50%;
	margin: 0 0 20px -470px;
	width: 940px;
	display: inline-flex;
	padding: 20px;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 10px;
	border-radius: 15px;
	background: #fff;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

	animation: ${(props) =>
		props.isOpen.state && props.isOpen.type === "reviewList"
			? css`
					${slideIn} 0.5s forwards
			  `
			: css`
					${slideOut} 0.5s forwards
			  `};
`;

const StoreInfoWrapper = styled(Wrapper)`
	display: flex;
	padding: 0.625rem 0.9375rem;
	flex-direction: column;
	align-items: flex-start;

	gap: 0.84rem;
`;
