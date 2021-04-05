import Head from "next/head";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />

        <title>Plain - Multipurpose Bootstrap Template</title>

        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="shortcut icon" href="images/favicon.png" type="image/png" />

        <link rel="stylesheet" href="css/animate.css" />

        <link rel="stylesheet" href="fonts/lineicons/font-css/LineIcons.css" />

        <link rel="stylesheet" href="css/bootstrap.min.css" />

        <link rel="stylesheet" href="css/default.css" />

        <link rel="stylesheet" href="css/style.css" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
