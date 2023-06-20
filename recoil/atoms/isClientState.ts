/*
 * Created on Thu Jun 15 2023
 * Author : HyeonSeok-Lee
 * GitHub : https://github.com/seok20
 * Email : pine9805@kakao.com
 */

import { atom } from "recoil";

/**
 *  페이지가 Client Side인지 정의하는 상태입니다. defalut: false
 */
export const isClientState = atom({
	key: "isClientState",
	default: false,
});
