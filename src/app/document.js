import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta property="og:image" content={`${process.env.NEXT_PUBLIC_BASE_URL}/logo.png`} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:title" content="Carter's Web Design" />
          <meta property="og:description" content="Premium websites for small businesses." />
          <meta property="og:url" content={carterschmeling.com} />
          <meta property="og:type" content="website" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
