import React from "react";
import Head from "react-helmet";
import { StyleSheet } from "react-primitives";

const Html = props => {
  const helmet = Head.renderStatic();
  const styles = StyleSheet.renderToString().split("</style>");
  const staticStyles = styles[0].replace(
    '<style id="react-native-stylesheet-static">',
    ""
  );
  const mainStyles = styles[1].replace(
    '<style id="react-native-stylesheet">',
    ""
  );

  return (
    <html {...helmet.htmlAttributes.toComponent()}>
      <head>
        {helmet.base.toComponent()}
        {helmet.title.toComponent()}
        {helmet.meta.toComponent()}
        <style id="react-native-stylesheet-static">
          {staticStyles}
        </style>
        <style id="react-native-stylesheet-static">
          {mainStyles}
        </style>
        {helmet.link.toComponent()}
        {helmet.style.toComponent()}
        {helmet.script.toComponent()}
        {helmet.noscript.toComponent()}
      </head>
      <body {...helmet.bodyAttributes.toComponent()}>
        {props.body}
        {props.state}
        {props.script}
      </body>
    </html>
  );
};

export default Html;
