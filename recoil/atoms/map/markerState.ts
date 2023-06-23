/*
 * Created on Thu Jun 22 2023
 * Author : HyeonSeok-Lee
 * GitHub : https://github.com/seok20
 * Email : pine9805@kakao.com
 */

import { atom } from "recoil";

export const isMarkerClickState = atom({
	key: "isMarkerClickState",
	default: false,
});

export const clickedMarkerIdState = atom({
	key: "clickedMarkerIdState",
	default: 0,
});
