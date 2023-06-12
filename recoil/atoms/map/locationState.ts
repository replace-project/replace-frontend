/*
 * Created on Sat Jun 10 2023
 * Author : HyeonSeok-Lee
 * GitHub : https://github.com/seok20
 * Email : pine9805@kakao.com
 */

import { atom } from "recoil";
import {
	DEFAULT_LATITUDE,
	DEFAULT_LONGITUDE,
} from "../../../constants/mapConstants";

export const locationState = atom({
	key: "locationState",
	default: { lat: DEFAULT_LATITUDE, lng: DEFAULT_LONGITUDE },
});
