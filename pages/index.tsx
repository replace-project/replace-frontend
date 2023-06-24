/*
 * Created on Fri May 12 2023
 * Author : HyeonSeok-Lee
 * GitHub : https://github.com/seok20
 * Email : pine9805@kakao.com
 */

import React from "react";
import styled from "styled-components";
import { Wrapper } from "../components/common/CommonComponents";
import { useRecoilState, useRecoilValue } from "recoil";
import Header from "../components/header/Header";
import MapLayout from "../components/maps/Map";
import { clickedMarkerIdState } from "../recoil/atoms/map/markerState";
import StoreReviewList from "../components/review/storeReview/StoreReviewList";
import {
	isClosingState,
	isOpeningState,
} from "../recoil/atoms/slide/slideState";

const Home: React.FC = () => {
	const [isOpen] = useRecoilState(isOpeningState);
	const [isClosing] = useRecoilState(isClosingState);
	const [clikcedMarkerId] = useRecoilState(clickedMarkerIdState);

	return (
		<>
			<Container>
				<Header></Header>
				<MapLayout></MapLayout>
				{((isOpen.state && isOpen.type === "reviewList") || isClosing) && (
					<StoreReviewList id={clikcedMarkerId}></StoreReviewList>
				)}
			</Container>
		</>
	);
};

export default Home;

const Container = styled(Wrapper)``;
