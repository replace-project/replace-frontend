/*
 * Created on Wed May 10 2023
 * Author : Hyeon-Lee
 * Email : pine9805@kakao.com
 */

import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;
		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});
			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html>
				<Head>{/* 필요한 Head 요소를 입력하세요 */}</Head>
				<body>
					{/* 필요한 body 요소를 입력하세요 */}
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
