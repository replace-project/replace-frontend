/*
 * Created on Sat Jun 10 2023
 * Author : HyeonSeok-Lee
 * GitHub : https://github.com/seok20
 * Email : pine9805@kakao.com
 */

import { useRecoilState } from "recoil";
import { locationState } from "../recoil/atoms/map/locationState";
import { useEffect } from "react";
import { locationErrorState } from "../recoil/atoms/errorState";
import { DEFAULT_LATITUDE, DEFAULT_LONGITUDE } from "../constants/mapConstants";

/**
 * 유저의 현재 위치를 계산하는 커스텀 훅입니다. 유저의 현재 위치 좌표를 반환합니다.
 * @returns {lat:number, lng:number} 유저의 현재 위치 좌표 {lat, lng}
 */
const useUserLocation = () => {
	const [location, setLocation] = useRecoilState(locationState);
	const [, setError] = useRecoilState(locationErrorState);

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					setLocation({
						lat: position.coords.latitude,
						lng: position.coords.longitude,
					});
				},
				(error) => {
					let errorMessage;
					switch (error.code) {
						case error.PERMISSION_DENIED:
							errorMessage = "위치 정보 접근이 거부되었습니다.";
							break;
						case error.POSITION_UNAVAILABLE:
							errorMessage = "장치의 위치를 얻을 수 없습니다.";
							break;
						case error.TIMEOUT:
							errorMessage = "위치 정보를 가져오는데 시간이 초과되었습니다.";
							break;
						default:
							errorMessage = "알 수 없는 오류가 발생했습니다.";
					}
					setError(errorMessage);
					setLocation({ lat: DEFAULT_LATITUDE, lng: DEFAULT_LONGITUDE });
				}
			);
		} else {
			setError("해당 브라우저에서 실행할 수 없습니다.");
			setLocation({ lat: DEFAULT_LATITUDE, lng: DEFAULT_LONGITUDE });
		}
	}, [setLocation, setError]);

	return location;
};

export default useUserLocation;
