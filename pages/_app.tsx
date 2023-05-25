/*
 * Created on Fri May 12 2023
 * Author : HyeonSeok-Lee
 * GitHub : https://github.com/seok20
 * Email : pine9805@kakao.com
 */

import { AppProps } from "next/app";
import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from "recoil";
import "../styles/GlobalStyle";
import { GlobalStyle } from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Theme from "../styles/Theme";
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<RecoilRoot>
			<ThemeProvider theme={Theme}>
				<GlobalStyle />
				<Component {...pageProps} />
			</ThemeProvider>
		</RecoilRoot>
	);
}

export default MyApp;
