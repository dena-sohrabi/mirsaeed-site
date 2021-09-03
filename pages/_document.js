import { Children } from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { AppRegistry } from "react-native";
import config from "../app.json";

import { mediaStyles } from "../components/media";

// Force Next-generated DOM elements to fill their parent's height
const normalizeNextElements = `
  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  @font-face{
    font-family: 'Dana' ;
    src: url("/dana-regular.woff2");
    font-weight: normal;
    font-display: swap;
  }
  @font-face{
    font-family: 'Dana' ;
    src: url("/dana-bold.woff2");
    font-weight:bold;
    font-display: swap;
  }
  *{
    font-family:'Dana' !important;
  }
  body{
    font-family:'Dana' !important;
  }
 
`;

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    AppRegistry.registerComponent(config.name, () => Main);
    const { getStyleElement } = AppRegistry.getApplication(config.name);
    const page = await renderPage();
    const styles = [
      <style dangerouslySetInnerHTML={{ __html: normalizeNextElements }} />,
      <style dangerouslySetInnerHTML={{ __html: mediaStyles }} />,
      getStyleElement(),
    ];
    return { ...page, styles: Children.toArray(styles) };
  }

  render() {
    return (
      <Html style={{ height: "100%" }}>
        <Head />
        <body style={{ height: "100%", overflow: "hidden" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
