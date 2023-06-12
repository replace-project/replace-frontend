/*
 * Created on Fri May 12 2023
 * Author : HyeonSeok-Lee
 * GitHub : https://github.com/seok20
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

	html,
	body {
		margin: 0;
		font-family: Noto Sans, Noto Sans KR;
		color: ${theme.black_C};
		background: ${theme.white_C};
		height: 100%;
		section {
			max-width: 50.8rem;
			margin: 0 auto;
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
