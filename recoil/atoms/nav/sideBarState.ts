/*
 * Created on Fri May 26 2023
 * Author : HyeonSeok-Lee
 * GitHub : https://github.com/seok20
 * Email : pine9805@kakao.com
 */

import { atom } from "recoil";

export const isOpeningState = atom({
	key: "isOpeningState",
	default: false,
});

export const isClosingState = atom({
	key: "isClosingState",
	default: false,
});
