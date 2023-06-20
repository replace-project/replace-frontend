/*
 * Created on Fri Jun 09 2023
 * Author : HyeonSeok-Lee
 * GitHub : https://github.com/seok20
 * Email : pine9805@kakao.com
 */

import React, { useEffect, useState } from "react";
import {
	NaverMap,
	useNavermaps,
	Container as MapDiv,
	Marker,
} from "react-naver-maps";
import styled from "styled-components";
import useUserLocation from "../../hooks/useUserLocation";
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import { locationErrorState } from "../../recoil/atoms/errorState";
import {
	DEFAULT_LATITUDE,
	DEFAULT_LONGITUDE,
} from "../../constants/mapConstants";
import {
	NEcoordinateState,
	SWcoordinateState,
} from "../../recoil/atoms/map/coordinateState";
import { fetchReviewMarkers } from "../../recoil/selectors/review/reviewSelecotrs";

const MapLayout: React.FC = () => {
	const location = useUserLocation();
	const error = useRecoilValue(locationErrorState);

	const [SWcoordinate, setSWcoordinate] = useRecoilState(SWcoordinateState);
	const [NEcoordinate, setNEcoordinate] = useRecoilState(NEcoordinateState);
	const [map, setMap] = useState<naver.maps.Map | null>(null);
	const reviewMarkersLoadable = useRecoilValueLoadable(
		fetchReviewMarkers({
			NEcoordinate,
			SWcoordinate,
		})
	);

	const navermaps = typeof window !== "undefined" ? useNavermaps() : null;

	useEffect(() => {
		if (
			map &&
			location.lat !== DEFAULT_LATITUDE &&
			location.lng !== DEFAULT_LONGITUDE
		) {
			handleRefreshLocation();
		}
	}, [map, location]);

	useEffect(() => {
		if (reviewMarkersLoadable.state === "hasValue") {
			const data = reviewMarkersLoadable.contents;
			console.log(data.stores[0]);
		} else if (reviewMarkersLoadable.state === "loading") {
		} else if (reviewMarkersLoadable.state === "hasError") {
		}
	}, [reviewMarkersLoadable.state]);

	//// 현재 위치 재검색 Handler
	const handleRefreshLocation = () => {
		if (map) {
			map.setZoom(15, true);
			let bounds = map.getBounds();
			setSWcoordinate({
				lat: bounds.getMin().y.toString(),
				lng: bounds.getMin().x.toString(),
			});

			setNEcoordinate({
				lat: bounds.getMax().y.toString(),
				lng: bounds.getMax().x.toString(),
			});
		}
	};

	if (error) {
		// TODO: 에러 modal 구현
		return <p>{error}</p>;
	}
	if (location.lat === DEFAULT_LATITUDE && location.lng === DEFAULT_LONGITUDE) {
		// TODO: Loading 컴포넌트 구현
		return <p>Loading...</p>;
	}
	return (
		<Container>
			<SearchButton onClick={handleRefreshLocation}>
				현재 위치 재검색
			</SearchButton>
			<NaverMap ref={setMap} center={location} defaultZoom={15}></NaverMap>
		</Container>
	);
};

export default MapLayout;

const Container = styled(MapDiv)`
	width: 800px;
	height: 800px;

	display: flex;
	justify-content: center;
	align-items: center;
`;

const SearchButton = styled.button`
	width: 140px;
	height: 40px;
	top: 1%;
	position: absolute;
	z-index: 100;

	border-radius: 10px;
	border: none;
	background: #ffffff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	transition: background 0.2s;

	:hover {
		background: #eeeeee;
	}
	:active {
		transform: scale(0.99);
	}
`;
