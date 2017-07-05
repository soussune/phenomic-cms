import React from "react";
import { View } from "react-primitives";

const Article = ({ style, children }) =>
  <View accessibilityRole="article" style={style}>
    {children}
  </View>;

export default Article;
