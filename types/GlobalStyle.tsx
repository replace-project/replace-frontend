/*
 * Created on Wed May 10 2023
 * Author : Hyeon-Lee
 * Email : pine9805@kakao.com
 */

import reset from "styled-reset";
import { createGlobalStyle, css } from "styled-components";
import theme from "./Theme";

const globalStyle = css`
	${reset};
	* {
		box-sizing: border-box;
	}
	body {
		font-family: Noto Sans, Noto Sans KR;
		color: ${theme.black_C};
		background: ${theme.lightGrey_C};

		section {
			max-width: 50.8rem;
			mragin: 0 auto;
			padding: 0.8rem 1rem 0.8rem 1rem;
			background: ${theme.white_C};
			margin-bottom: 0.8rem;
		}
	}

	a {
		text-decoration: none;
		color: ${theme.black_C};
	}
	a:hover {
		color: inherit;
	}
`;

export const GlobalStyle = createGlobalStyle`
    ${globalStyle};
`;
