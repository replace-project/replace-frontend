/*
 * Created on Fri May 12 2023
 * Author : HyeonSeok-Lee
 * GitHub : https://github.com/seok20
 * Email : pine9805@kakao.com
 */

import React from "react";
import styled from "styled-components";
import { Wrapper } from "../components/common/CommonComponents";
import Header from "../components/header/Header";
import Theme from "../styles/Theme";

const Home: React.FC = () => {
	return (
		<Container>
			<Header></Header>
		</Container>
	);
};

export default Home;

const Container = styled(Wrapper)`
	background-color: ${(props) => props.theme.white_C};
`;
