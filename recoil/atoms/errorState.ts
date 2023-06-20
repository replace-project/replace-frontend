/*
 * Created on Mon Jun 12 2023
 * Author : HyeonSeok-Lee
 * GitHub : https://github.com/seok20
 * Email : pine9805@kakao.com
 */

import { atom } from "recoil";

/**
 * 유저 위치 에러 메시지 상태를 정의합니다. default: ''
 */
export const locationErrorState = atom({
	key: "locationErrorState",
	default: "",
});
