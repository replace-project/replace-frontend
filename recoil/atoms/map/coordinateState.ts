/*
 * Created on Sat Jun 17 2023
 * Author : HyeonSeok-Lee
 * GitHub : https://github.com/seok20
 * Email : pine9805@kakao.com
 */

import { atom } from "recoil";

export const NEcoordinateState = atom({
	key: "NEcoordinateState",
	default: { lat: "", lng: "" },
});

export const SWcoordinateState = atom({
	key: "SWcoordinateState",
	default: { lat: "", lng: "" },
});
