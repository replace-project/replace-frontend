/*
 * Created on Fri May 12 2023
 * Author : HyeonSeok-Lee
 * GitHub : https://github.com/seok20
 * Email : pine9805@kakao.com
 */

import React from "react";
import styled from "styled-components";
import { WholeWrapper, Wrapper } from "../components/common/CommonComponents";
import Header from "../components/header/Header";
import Theme from "../styles/Theme";
import MapLayout from "../components/maps/Map";

const Home: React.FC = () => {
	return (
		<>
			<Container>
				<Header></Header>
				<MapLayout></MapLayout>
			</Container>
		</>
	);
};

export default Home;

const Container = styled(Wrapper)``;
