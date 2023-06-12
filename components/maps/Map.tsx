/*
 * Created on Fri Jun 09 2023
 * Author : HyeonSeok-Lee
 * GitHub : https://github.com/seok20
 * Email : pine9805@kakao.com
 */

import React from "react";
import { NaverMap, useNavermaps, Container as MapDiv } from "react-naver-maps";
import styled from "styled-components";
import useUserLocation from "../../hooks/useUserLocation";
import { useRecoilValue } from "recoil";
import { locationErrorState } from "../../recoil/atoms/errorState";
import {
	DEFAULT_LATITUDE,
	DEFAULT_LONGITUDE,
} from "../../constants/mapConstants";

const MapLayout: React.FC = () => {
	const location = useUserLocation();
	const error = useRecoilValue(locationErrorState);

	if (error) {
		return <p>{error}</p>;
	}
	if (location.lat === DEFAULT_LATITUDE && location.lng === DEFAULT_LONGITUDE) {
		return <p>Loading...</p>;
	}
	return (
		<Container>
			<NaverMap center={location} defaultZoom={15}></NaverMap>
		</Container>
	);
};

export default MapLayout;

const Container = styled(MapDiv)`
	width: 800px;
	height: 800px;
	background-color: #777;
`;
