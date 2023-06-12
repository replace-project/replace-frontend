/*
 * Created on Fri May 26 2023
 * Author : HyeonSeok-Lee
 * GitHub : https://github.com/seok20
 * Email : pine9805@kakao.com
 */

import { atom } from "recoil";

/**
 * 사이드바의 열리는 상태를 정의합니다. default: false
 */
export const isOpeningState = atom({
	key: "isOpeningState",
	default: false,
});

/**
 * 사이드바의 닫히는 상태를 정의합니다. default: false
 */
export const isClosingState = atom({
	key: "isClosingState",
	default: false,
});
