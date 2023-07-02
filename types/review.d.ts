/*
 * Created on Tue Jun 20 2023
 * Author : HyeonSeok-Lee
 * GitHub : https://github.com/seok20
 * Email : pine9805@kakao.com
 */

export type StoreLocation = {
	id: number;
	coordinate: {
		lat: string;
		lng: string;
	};
};

export type StoreInfo = {
	storeId?: number;
	name?: string;
	address?: string;
};

export type StoreData = {
	storeList: StoreLocation[];
};

export type ReviewList = {
	reviews: Review[];
	store: StoreInfo;
};

export type Review = {
	id: number;
	likeCount: number;
	category: string[];
	title: string;
	content: string;
	isLiked: boolean;
	viewCount: string;
	image: string[];
};
