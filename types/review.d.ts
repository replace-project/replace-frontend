/*
 * Created on Tue Jun 20 2023
 * Author : HyeonSeok-Lee
 * GitHub : https://github.com/seok20
 * Email : pine9805@kakao.com
 */

export type Store = {
	id: number;
	coordinate: {
		lat: string;
		lng: string;
	};
};

export type StoreData = {
	storeList: Store[];
};
