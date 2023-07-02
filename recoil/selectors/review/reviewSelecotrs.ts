/*
 * Created on Sun Jun 18 2023
 * Author : HyeonSeok-Lee
 * GitHub : https://github.com/seok20
 * Email : pine9805@kakao.com
 */

import { selectorFamily } from "recoil";
import axios from "axios";

type CoordinatePrams = {
	NEcoordinate: { lat: string; lng: string };
	SWcoordinate: { lat: string; lng: string };
};

export const fetchReviewMarkers = selectorFamily({
	key: "fetchReviewMarkers",
	get:
		(parms: CoordinatePrams) =>
		async ({ get }) => {
			const { NEcoordinate, SWcoordinate } = parms;
			if (
				NEcoordinate.lat !== "" ||
				NEcoordinate.lng !== "" ||
				SWcoordinate.lat !== "" ||
				SWcoordinate.lng !== ""
			) {
				const { lat: sw_lat, lng: sw_lng } = SWcoordinate;
				const { lat: ne_lat, lng: ne_lng } = NEcoordinate;
				try {
					const response = await axios.get(
						`https://f7e742fc-fd24-4d60-9539-e608ec494543.mock.pstmn.io/review?sw_lat=${sw_lat}&sw_lng=${sw_lng}&ne_lat=${ne_lat}&ne_lng=${ne_lng}`
					);
					return response.data;
				} catch (error) {
					throw error;
				}
			}
		},
});

export const fetchReviewListWithStoreId = selectorFamily({
	key: "fetchReviewListWithStoreId",
	get:
		(storeId: number) =>
		async ({ get }) => {
			if (storeId != -1) {
				try {
					const response =
						await axios.get(`https://f7e742fc-fd24-4d60-9539-e608ec494543.mock.pstmn.io/review?storeId=${storeId}
					`);
					return response.data;
				} catch (error) {
					throw error;
				}
			}
		},
});
