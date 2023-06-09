/*
 * Created on Tue May 30 2023
 * Author : HyeonSeok-Lee
 * GitHub : https://github.com/seok20
 * Email : pine9805@kakao.com
 */

import React from "react";
import LogoText from "../../public/logo/logo_text.svg";
import styled from "styled-components";
import { Wrapper } from "../common/CommonComponents";

const SideBarTitle: React.FC = () => {
	return (
		<Container>
			<LogoText></LogoText>
		</Container>
	);
};

export default SideBarTitle;

const Container = styled(Wrapper)`
	margin: 15px 0;
`;
