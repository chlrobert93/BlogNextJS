import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='es'>
        <Head />
        <body>
          <Main />
          <NextScript />
          //Para portal
          <div id="notifications"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
  

