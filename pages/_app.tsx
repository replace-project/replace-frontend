/*
 * Created on Wed May 10 2023
 * Author : Hyeon-Lee
 * Email : pine9805@kakao.com
 */

import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;
