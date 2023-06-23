/*
 * Created on Thu Jun 22 2023
 * Author : HyeonSeok-Lee
 * GitHub : https://github.com/seok20
 * Email : pine9805@kakao.com
 */

import React from "react";
import styled from "styled-components";
import { Wrapper } from "../common/CommonComponents";

interface IProps {
	id: number;
}

const StoreReviewList: React.FC<IProps> = ({ id }) => {
	return <Container></Container>;
};

export default StoreReviewList;

const Container = styled(Wrapper)`
	position: fixed;
	bottom: 0;
	width: 940px;
	height: 420px;
	display: inline-flex;
	padding: 20px;
	flex-direction: column;
	align-items: flex-start;
	gap: 30px;
	border-radius: 15px;
	background: #fff;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
