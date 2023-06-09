/*
 * Created on Fri May 26 2023
 * Author : HyeonSeok-Lee
 * GitHub : https://github.com/seok20
 * Email : pine9805@kakao.com
 */

import React from "react";
import styled from "styled-components";
import UserProfile from "../../public/user/user_default_profile.svg";
import { ColWrapper, Text } from "../common/CommonComponents";
import Link from "next/link";

const SideBarAuths: React.FC = () => {
	return (
		<>
			<Container>
				<UserProfile height="100px" />
				<Link href={"/"}>
					<Text className="login-text" fontSize="16px">
						로그인이 필요합니다.
					</Text>
				</Link>
			</Container>
		</>
	);
};

export default SideBarAuths;

const Container = styled(ColWrapper)`
	& > * {
		margin: 15px;
	}
	.login-text {
		color: #777;
		display: inline-block;
		margin: 0;
		text-transform: uppercase;
		transition: box-shadow 0.3s ease; /* font-size transition 추가 */
	}

	.login-text:hover {
		color: #000;
	}

	.login-text:after {
		display: block;
		content: "";
		border-bottom: solid 2px #d0cac5;
		transform: scaleX(0);
		transition: transform 250ms ease-in-out;
		margin-top: 8px;
	}
	.login-text:hover:after {
		transform: scaleX(1);
	}
`;
