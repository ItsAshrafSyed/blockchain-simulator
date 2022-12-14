import "../styles/globals.css";
import Layout from "../components/layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<title>BlockChain Simulator</title>
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
